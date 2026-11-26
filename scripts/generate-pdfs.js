#!/usr/bin/env node
/**
 * generate-pdfs.js — per-chapter PDFs without LaTeX, Typst, or a browser.
 *
 * Uses PDFKit for layout and kroki.io to render Mermaid diagrams to PNG.
 * This is the script the skill referred to as generate-pdfs-pdfkit.js.
 *
 * Install once per book:  npm install pdfkit marked
 * Run:                    node scripts/generate-pdfs.js [--book-dir <path>] [--only chNN]
 * Output:                 <book-dir>/pdfs/<chapter>.pdf
 *
 * It reads the chapter list straight from myst.yml — no hardcoded arrays.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function flag(args, name, fallback) {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
}
const argv = process.argv.slice(2);
const BOOK_DIR = path.resolve(flag(argv, '--book-dir', process.cwd()));
const ONLY = flag(argv, '--only', null);

let PDFDocument;
try { PDFDocument = require('pdfkit'); }
catch (_) {
  // Fall back to the book's own node_modules when this script is run from elsewhere.
  // Use createRequire rooted in the book dir so package "exports" maps resolve.
  try {
    const { createRequire } = require('module');
    PDFDocument = createRequire(path.join(BOOK_DIR, 'package.json'))('pdfkit');
  }
  catch (_) {
    console.log(JSON.stringify({
      success: false,
      error: 'pdfkit is not installed.',
      fix: `cd "${BOOK_DIR}" && npm install pdfkit marked`,
    }, null, 2));
    process.exit(1);
  }
}

const MYST = path.join(BOOK_DIR, 'myst.yml');
if (!fs.existsSync(MYST)) {
  console.log(JSON.stringify({ success: false, error: `myst.yml not found in ${BOOK_DIR}` }, null, 2));
  process.exit(1);
}

/* ------------------- read chapter list from myst.yml ---------------------- */
const mystLines = fs.readFileSync(MYST, 'utf8').split('\n');
const chapters = [];
let bookTitle = 'Book';
mystLines.forEach((line, i) => {
  const t = line.match(/^\s*title:\s*"?(.+?)"?\s*$/);
  if (t && chapters.length === 0 && !bookTitleSet()) { bookTitle = t[1]; }
  const f = line.match(/^\s*-\s*file:\s*(\S+)/);
  if (f && f[1].startsWith('chapters/')) {
    let title = f[1];
    const next = mystLines[i + 1] || '';
    const tm = next.match(/^\s*title:\s*"?(.+?)"?\s*$/);
    if (tm) title = tm[1];
    chapters.push({ file: f[1], title });
  }
});
function bookTitleSet() { return false; }

const targets = ONLY ? chapters.filter((c) => c.file.includes(ONLY)) : chapters;
if (!targets.length) {
  console.log(JSON.stringify({ success: false, error: 'No chapters found in myst.yml toc' }, null, 2));
  process.exit(1);
}

/* ----------------------------- kroki mermaid ------------------------------ */
function krokiUrl(diagram) {
  const compressed = zlib.deflateSync(Buffer.from(diagram, 'utf8'), { level: 9 });
  const encoded = compressed.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
  return `https://kroki.io/mermaid/png/${encoded}`;
}
function fetchBuffer(url) {
  // Proxy-aware; returns null on any failure so a missing diagram never kills the PDF.
  let hc;
  try { hc = require('./lib/http'); }
  catch (_) { try { hc = require(path.join(__dirname, 'lib', 'http.js')); } catch (_) { return Promise.resolve(null); } }
  return hc.getBuffer(url, 60000).catch(() => null);
}

/* ------------------------------- md cleanup ------------------------------- */
function parseChapter(md) {
  // strip frontmatter
  let body = md.replace(/^---\n[\s\S]*?\n---\n/, '');
  const blocks = [];
  const lines = body.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // fenced code / mermaid
    const fence = line.match(/^\s*```(\w*)/);
    if (fence) {
      const lang = fence[1];
      const buf = [];
      i++;
      while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++;
      blocks.push(lang === 'mermaid' ? { type: 'mermaid', text: buf.join('\n') } : { type: 'code', text: buf.join('\n'), lang });
      continue;
    }

    // MyST figure → pull the image path + caption
    const fig = line.match(/^:{3,}\{figure\}\s*(\S+)/);
    if (fig) {
      const src = fig[1];
      const caption = [];
      i++;
      while (i < lines.length && !/^:{3,}\s*$/.test(lines[i])) {
        if (!/^:\w[\w-]*:/.test(lines[i]) && lines[i].trim()) caption.push(lines[i].trim());
        i++;
      }
      i++;
      blocks.push({ type: 'image', src, caption: caption.join(' ') });
      continue;
    }

    // other directives → keep inner text, drop the markers
    if (/^:{3,}\{/.test(line)) {
      const label = (line.match(/\{([a-z-]+)\}/) || [])[1] || 'note';
      const buf = [];
      i++;
      let depth = 1;
      while (i < lines.length && depth > 0) {
        if (/^:{3,}\{/.test(lines[i])) depth++;
        else if (/^:{3,}\s*$/.test(lines[i])) { depth--; if (!depth) { i++; break; } }
        if (!/^:\w[\w-]*:/.test(lines[i])) buf.push(lines[i]);
        i++;
      }
      blocks.push({ type: 'callout', label, text: buf.join('\n').trim() });
      continue;
    }
    if (/^:{3,}\s*$/.test(line)) { i++; continue; }

    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) { blocks.push({ type: 'heading', level: h[1].length, text: clean(h[2]) }); i++; continue; }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { items.push(clean(lines[i].replace(/^\s*[-*]\s+/, ''))); i++; }
      blocks.push({ type: 'list', items });
      continue;
    }
    if (/^\s*\|/.test(line)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        const cells = lines[i].split('|').slice(1, -1).map((c) => clean(c.trim()));
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      blocks.push({ type: 'table', rows });
      continue;
    }
    if (!line.trim()) { i++; continue; }

    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|\s*[-*]\s|\s*\||:{3,}|\s*```)/.test(lines[i])) { para.push(lines[i]); i++; }
    blocks.push({ type: 'para', text: clean(para.join(' ')) });
  }
  return blocks;
}

function clean(s) {
  return String(s)
    .replace(/\\\$/g, '$')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|\s)\*([^*]+)\*/g, '$1$2')
    .replace(/\{[a-z-]+\}/g, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

/* --------------------------------- render --------------------------------- */
const MARGIN = 62;

async function renderChapter(ch) {
  const abs = path.join(BOOK_DIR, ch.file);
  if (!fs.existsSync(abs)) return { file: ch.file, ok: false, error: 'missing' };
  const blocks = parseChapter(fs.readFileSync(abs, 'utf8'));

  const outPath = path.join(BOOK_DIR, 'pdfs', path.basename(ch.file).replace(/\.md$/, '.pdf'));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const doc = new PDFDocument({ size: 'LETTER', margin: MARGIN, bufferPages: true, autoFirstPage: false });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // cover
  doc.addPage();
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0d1e38');
  doc.fillColor('#FF6B2B').rect(MARGIN, 250, 120, 6).fill();
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(30)
     .text(ch.title, MARGIN, 290, { width: doc.page.width - MARGIN * 2 });
  doc.font('Helvetica').fontSize(13).fillColor('#c9d4e5')
     .text(bookTitle, MARGIN, doc.y + 18, { width: doc.page.width - MARGIN * 2 });

  doc.addPage();
  const W = doc.page.width - MARGIN * 2;

  const ensure = (h) => { if (doc.y + h > doc.page.height - MARGIN) doc.addPage(); };

  for (const b of blocks) {
    if (b.type === 'heading') {
      const size = [0, 20, 16, 13, 12][b.level] || 12;
      ensure(size * 2.6);
      doc.moveDown(0.7);
      const y0 = doc.y;
      doc.font('Helvetica-Bold').fontSize(size).fillColor('#0d1e38').text(b.text, MARGIN, y0, { width: W });
      if (b.level <= 2) {
        doc.moveTo(MARGIN, doc.y + 3).lineTo(MARGIN + W, doc.y + 3).lineWidth(b.level === 1 ? 1.4 : 0.6).strokeColor('#FF6B2B').stroke();
        doc.moveDown(0.4);
      }
      doc.moveDown(0.3);
    } else if (b.type === 'para') {
      if (!b.text) continue;
      const h = doc.font('Helvetica').fontSize(10.5).heightOfString(b.text, { width: W });
      ensure(Math.min(h, 300));
      doc.font('Helvetica').fontSize(10.5).fillColor('#1a1a1a').text(b.text, MARGIN, doc.y, { width: W, align: 'left', lineGap: 2.2 });
      doc.moveDown(0.55);
    } else if (b.type === 'list') {
      for (const item of b.items) {
        const h = doc.font('Helvetica').fontSize(10.5).heightOfString(item, { width: W - 16 });
        ensure(h + 6);
        doc.font('Helvetica').fontSize(10.5).fillColor('#FF6B2B').text('•', MARGIN, doc.y, { continued: false, width: 10 });
        doc.fillColor('#1a1a1a').text(item, MARGIN + 14, doc.y - doc.currentLineHeight(), { width: W - 16, lineGap: 1.6 });
        doc.moveDown(0.25);
      }
      doc.moveDown(0.35);
    } else if (b.type === 'code') {
      const text = b.text || '';
      const lineH = 11.5;
      const h = Math.min(text.split('\n').length * lineH + 16, doc.page.height - MARGIN * 2);
      ensure(Math.min(h, 260));
      const y0 = doc.y;
      doc.rect(MARGIN, y0, W, h).fill('#12161f');
      doc.font('Courier').fontSize(8.6).fillColor('#e6edf3').text(text, MARGIN + 9, y0 + 8, { width: W - 18, lineGap: 1.2 });
      doc.y = y0 + h + 10;
      doc.fillColor('#1a1a1a');
    } else if (b.type === 'table') {
      const rows = b.rows;
      if (!rows.length) continue;
      const cols = rows[0].length || 1;
      const colW = W / cols;
      for (let r = 0; r < rows.length; r++) {
        const cells = rows[r];
        const heights = cells.map((c) => doc.font(r === 0 ? 'Helvetica-Bold' : 'Helvetica').fontSize(9).heightOfString(c, { width: colW - 10 }));
        const rowH = Math.max(...heights, 12) + 8;
        ensure(rowH);
        const y0 = doc.y;
        if (r === 0) doc.rect(MARGIN, y0, W, rowH).fill('#0d1e38');
        else if (r % 2 === 0) doc.rect(MARGIN, y0, W, rowH).fill('#f3f5f8');
        cells.forEach((c, ci) => {
          doc.font(r === 0 ? 'Helvetica-Bold' : 'Helvetica').fontSize(9)
             .fillColor(r === 0 ? '#ffffff' : '#1a1a1a')
             .text(c, MARGIN + ci * colW + 5, y0 + 4, { width: colW - 10 });
        });
        doc.y = y0 + rowH;
      }
      doc.moveDown(0.6);
      doc.fillColor('#1a1a1a');
    } else if (b.type === 'callout') {
      if (!b.text) continue;
      const h = doc.font('Helvetica').fontSize(10).heightOfString(b.text, { width: W - 22 }) + 16;
      ensure(Math.min(h, 280));
      const y0 = doc.y;
      doc.rect(MARGIN, y0, W, h).fill('#f5f8fc');
      doc.rect(MARGIN, y0, 3.5, h).fill('#FF6B2B');
      doc.font('Helvetica').fontSize(10).fillColor('#22303f').text(b.text, MARGIN + 14, y0 + 8, { width: W - 22, lineGap: 1.8 });
      doc.y = y0 + h + 10;
      doc.fillColor('#1a1a1a');
    } else if (b.type === 'image') {
      const rel = b.src.replace(/^\.\.\//, '');
      const abs2 = path.join(BOOK_DIR, rel);
      if (fs.existsSync(abs2)) {
        ensure(200);
        try {
          doc.image(abs2, MARGIN, doc.y, { fit: [W, 300], align: 'center' });
          doc.y += Math.min(300, 300) * 0 + 0;
          doc.moveDown(0.4);
          // PDFKit does not advance y for images; approximate using the fit box
          doc.y = Math.min(doc.y + 305, doc.page.height - MARGIN);
        } catch (_) {}
        if (b.caption) {
          ensure(24);
          doc.font('Helvetica-Oblique').fontSize(8.8).fillColor('#5a6572').text(b.caption, MARGIN, doc.y, { width: W, align: 'center' });
          doc.moveDown(0.7);
          doc.fillColor('#1a1a1a');
        }
      }
    } else if (b.type === 'mermaid') {
      const buf = await fetchBuffer(krokiUrl(b.text));
      if (buf && buf.length > 500) {
        ensure(220);
        try {
          const y0 = doc.y;
          doc.image(buf, MARGIN, y0, { fit: [W, 320], align: 'center' });
          doc.y = Math.min(y0 + 325, doc.page.height - MARGIN);
          doc.moveDown(0.5);
        } catch (_) {}
      }
    }
  }

  // page numbers
  const range = doc.bufferedPageRange();
  for (let p = 1; p < range.count; p++) {
    doc.switchToPage(p);
    doc.font('Helvetica').fontSize(8).fillColor('#8a939e')
       .text(`${bookTitle} · ${ch.title} · ${p}`, MARGIN, doc.page.height - 40, { width: doc.page.width - MARGIN * 2, align: 'center' });
  }

  doc.end();
  await new Promise((r) => stream.on('finish', r));
  return { file: ch.file, ok: true, pdf: outPath, bytes: fs.statSync(outPath).size };
}

(async () => {
  const results = [];
  for (const ch of targets) {
    process.stderr.write(`→ ${ch.file}\n`);
    results.push(await renderChapter(ch));
  }
  console.log(JSON.stringify({ success: results.every((r) => r.ok), book_dir: BOOK_DIR, results }, null, 2));
})();
