import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Automatically copy the brochure to the public/brochure/ folder at server startup
try {
  const src = path.resolve(__dirname, '..', 'Brochure PHOTOMAT 2026.pdf');
  const destDir = path.resolve(__dirname, 'public', 'brochure');
  const dest = path.resolve(destDir, 'PHOTOMAT-2026.pdf');

  if (fs.existsSync(src)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log('Successfully copied brochure to public directory.');
  } else {
    console.warn('Source brochure not found at:', src);
  }

  // Copy Chief Patrons photos
  const patrons = [
    { srcName: 'Dr BHVS Narayana Murthy.jpg', destName: 'murthy.jpg' },
    { srcName: 'Dr Jagannath Nayak drdo chess director.jpg', destName: 'nayak.jpg' }
  ];

  const patronsDestDir = path.resolve(__dirname, 'public', 'images', 'patrons');
  if (!fs.existsSync(patronsDestDir)) {
    fs.mkdirSync(patronsDestDir, { recursive: true });
  }

  for (const patron of patrons) {
    const patronSrc = path.resolve(__dirname, '..', patron.srcName);
    const patronDest = path.resolve(patronsDestDir, patron.destName);

    if (fs.existsSync(patronSrc)) {
      fs.copyFileSync(patronSrc, patronDest);
      console.log(`Successfully copied patron photo: ${patron.destName}`);
    } else {
      console.warn(`Source patron photo not found at: ${patronSrc}`);
    }
  }

  // Clean up the route handler file if it exists, to avoid conflicts
  const routeFile = path.resolve(__dirname, 'app', 'brochure', 'PHOTOMAT-2026.pdf', 'route.ts');
  if (fs.existsSync(routeFile)) {
    fs.unlinkSync(routeFile);
    console.log('Successfully removed conflicting route handler file.');
    
    // Clean up empty directories
    const routeDir = path.dirname(routeFile);
    if (fs.existsSync(routeDir) && fs.readdirSync(routeDir).length === 0) {
      fs.rmdirSync(routeDir);
    }
    const brochureDir = path.resolve(__dirname, 'app', 'brochure');
    if (fs.existsSync(brochureDir) && fs.readdirSync(brochureDir).length === 0) {
      fs.rmdirSync(brochureDir);
    }
  }
} catch (err) {
  console.error('Error copying brochure:', err);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/photomat',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

