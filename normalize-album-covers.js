const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_SIZE = 1000;
const INPUT_DIR = './src/assets/images';
const OUTPUT_DIR = './src/assets/images/normalized';


if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const albumCovers = ['lazy.webp', 'christmas.webp', 'polish.webp'];

async function normalizeAlbumCover(filename) {
    const inputPath = path.join(INPUT_DIR, filename);
    const outputPath = path.join(OUTPUT_DIR, filename);
    
    console.log(`🔄 Przetwarzanie: ${filename}`);
    
    try {
        const image = sharp(inputPath);
        const { width, height } = await image.metadata();
        
        console.log(`📐 Oryginalny rozmiar: ${width}x${height}`);
        
        if (width === height) {

            await image
                .resize(TARGET_SIZE, TARGET_SIZE, {
                    fit: 'fill',
                    kernel: sharp.kernel.lanczos3
                })
                .webp({ quality: 90 })
                .toFile(outputPath);
            console.log(`✅ Kwadrat przeskalowany do ${TARGET_SIZE}x${TARGET_SIZE}`);
        } else {

            const maxDimension = Math.max(width, height);
            const scale = TARGET_SIZE / maxDimension;
            const newWidth = Math.round(width * scale);
            const newHeight = Math.round(height * scale);
            

            const background = sharp({
                create: {
                    width: TARGET_SIZE,
                    height: TARGET_SIZE,
                    channels: 4,
                    background: { r: 240, g: 230, b: 210, alpha: 1 }
                }
            });
            

            const resizedImage = await image
                .resize(newWidth, newHeight, {
                    fit: 'fill',
                    kernel: sharp.kernel.lanczos3
                })
                .toBuffer();
            
            await background
                .composite([{
                    input: resizedImage,
                    top: Math.round((TARGET_SIZE - newHeight) / 2),
                    left: Math.round((TARGET_SIZE - newWidth) / 2)
                }])
                .webp({ quality: 90 })
                .toFile(outputPath);
            
            console.log(`✅ Prostokąt przekształcony na ${TARGET_SIZE}x${TARGET_SIZE} z beżowym tłem`);
        }
        
    } catch (error) {
        console.error(`❌ Błąd przetwarzania ${filename}:`, error);
    }
}

async function normalizeAllCovers() {
    console.log(`🎯 OPCJA 3 - NORMALIZACJA ŹRÓDŁOWYCH OKŁADEK:`);
    console.log(`📐 Docelowy rozmiar: ${TARGET_SIZE}x${TARGET_SIZE}px`);
    console.log(`📁 Katalog wyjściowy: ${OUTPUT_DIR}`);
    console.log('');
    
    for (const filename of albumCovers) {
        await normalizeAlbumCover(filename);
        console.log('');
    }
    
    console.log('🎉 NORMALIZACJA ZAKOŃCZONA!');
    console.log('');
    console.log('📋 CO DALEJ:');
    console.log('1. Sprawdź pliki w: ./src/assets/images/normalized/');
    console.log('2. Zatwierdź jakość obrazów');
    console.log('3. Zastąp oryginalne pliki znormalizowanymi');
}

normalizeAllCovers().catch(console.error);
