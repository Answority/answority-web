const fs = require('node:fs');
const path = require('node:path');
// Refuse to reuse a populated directory: stale files, including an old public
// dashboard, must not silently become part of a new website package.
const output = path.resolve(__dirname, process.env.ANSWORITY_BUILD_DIR || 'dist');
if (fs.existsSync(output) && fs.readdirSync(output).length) {
  throw new Error('Build destination must be empty; choose a fresh ANSWORITY_BUILD_DIR.');
}
fs.mkdirSync(output, { recursive: true });
for (const entry of ['index.html', 'results.html', 'results.css', 'styles.css', 'redesign.css', 'book.css', 'app.js', 'favicon.svg', 'assets']) {
  fs.cpSync(path.join(__dirname, entry), path.join(output, entry), { recursive: true, filter: source => path.basename(source) !== 'dashboard.png' });
}
console.log(`Answority website candidate written to ${output}`);
