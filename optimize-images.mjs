import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = './client/public';

async function optimizeImages() {
  const files = await readdir(publicDir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  
  console.log(`Found ${imageFiles.length} images to optimize...`);
  
  for (const file of imageFiles) {
    const inputPath = join(publicDir, file);
    const outputPath = join(publicDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`✓ Optimized: ${file} → ${file.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`);
    } catch (err) {
      console.error(`✗ Failed to optimize ${file}:`, err.message);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages();
