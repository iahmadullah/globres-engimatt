// Builds the static site Vercel serves.
// The design source is "Engimatt Hotels - Zurich.dc.html"; the web root needs
// it at index.html, so copy it (plus its runtime and assets) into dist/.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PAGE = 'Engimatt Hotels - Zurich.dc.html';

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

fs.copyFileSync(path.join(ROOT, PAGE), path.join(DIST, 'index.html'));
fs.copyFileSync(path.join(ROOT, 'support.js'), path.join(DIST, 'support.js'));
fs.cpSync(path.join(ROOT, 'images'), path.join(DIST, 'images'), { recursive: true });

console.log('built dist/ from ' + PAGE);
