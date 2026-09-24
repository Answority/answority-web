const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const entry of ['index.html', 'styles.css', 'redesign.css', 'app.js', 'favicon.svg', 'assets', 'dashboard']) {
  fs.cpSync(path.join(__dirname, entry), path.join(output, entry), { recursive: true });
}
console.log('Answority deployment files written to dist/');
