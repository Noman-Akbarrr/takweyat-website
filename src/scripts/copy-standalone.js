const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..', '..');
const standaloneDir = path.join(rootDir, '.next', 'standalone');

if (fs.existsSync(standaloneDir)) {
  console.log('[Standalone Copy] Found .next/standalone, copying static and public assets...');

  const publicSrc = path.join(rootDir, 'public');
  const publicDest = path.join(standaloneDir, 'public');
  if (fs.existsSync(publicSrc)) {
    fs.cpSync(publicSrc, publicDest, { recursive: true });
    console.log('[Standalone Copy] Copied public/ -> .next/standalone/public/');
  }

  const staticSrc = path.join(rootDir, '.next', 'static');
  const staticDest = path.join(standaloneDir, '.next', 'static');
  if (fs.existsSync(staticSrc)) {
    fs.cpSync(staticSrc, staticDest, { recursive: true });
    console.log('[Standalone Copy] Copied .next/static/ -> .next/standalone/.next/static/');
  }

  console.log('[Standalone Copy] Successfully prepared standalone build for deployment!');
} else {
  console.log('[Standalone Copy] No .next/standalone folder found. Skipping copy.');
}
