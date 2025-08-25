const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateResponsiveImages(inputPath, outputDir, imageName) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const formats = [
    { suffix: 'desktop', width: 1920, quality: 85 },
    { suffix: 'tablet', width: 768, quality: 85 },
    { suffix: 'mobile', width: 480, quality: 85 },
    { suffix: 'thumb', width: 150, quality: 80 }
  ];

  const results = {};

  for (const format of formats) {
    const outputPath = path.join(outputDir, `${imageName}_${format.suffix}.webp`);
    
    await sharp(inputPath)
      .resize(format.width, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: format.quality })
      .toFile(outputPath);

    // Get file stats for manifest
    const stats = fs.statSync(outputPath);
    const sizeInKB = Math.round(stats.size / 1024 * 10) / 10;

    results[format.suffix] = {
      path: `./responsive/${imageName}_${format.suffix}.webp`,
      size: `${sizeInKB}KB`,
      format: 'webp'
    };

    console.log(`Generated: ${outputPath} (${sizeInKB}KB)`);
  }

  return results;
}

async function updateManifest(imageName, imageData) {
  const manifestPath = path.join(__dirname, 'public/images/responsive/image-manifest.json');
  let manifest = {};

  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  }

  manifest[imageName] = imageData;

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Updated manifest with ${imageName} data`);
}

async function main() {
  const inputImage = 'src/assets/images/homepage-hero.JPG';
  const outputDir = 'public/images/responsive';
  const imageName = 'homepage-hero';

  try {
    console.log(`Processing ${inputImage}...`);
    const imageData = await generateResponsiveImages(inputImage, outputDir, imageName);
    await updateManifest(imageName, imageData);
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
