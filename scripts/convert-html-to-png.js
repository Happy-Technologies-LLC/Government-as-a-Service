#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = path.join(__dirname, '../docs/public/images');
const OUTPUT_DIR = path.join(__dirname, '../docs/public/images/png');
const WIDTH = 1920;
const HEIGHT = 1080;
const DEVICE_SCALE_FACTOR = 2; // 2x for high DPI (equivalent to 300 DPI for screen)

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function convertHtmlToPng(htmlFile, outputFile) {
    console.log(`Converting ${path.basename(htmlFile)}...`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Set viewport with high DPI
        await page.setViewport({
            width: WIDTH,
            height: HEIGHT,
            deviceScaleFactor: DEVICE_SCALE_FACTOR
        });

        // Load the HTML file
        const htmlPath = `file://${htmlFile}`;
        await page.goto(htmlPath, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for any custom fonts or icons to load
        await page.waitForTimeout(2000);

        // Take screenshot
        await page.screenshot({
            path: outputFile,
            type: 'png',
            fullPage: false
        });

        console.log(`✓ Created ${path.basename(outputFile)}`);
    } catch (error) {
        console.error(`✗ Error converting ${path.basename(htmlFile)}:`, error.message);
    } finally {
        await browser.close();
    }
}

async function convertAllInfographics() {
    console.log('Starting HTML to PNG conversion...\n');
    console.log(`Output directory: ${OUTPUT_DIR}\n`);

    // Get all HTML files in the images directory
    const files = fs.readdirSync(INPUT_DIR)
        .filter(file => file.endsWith('.html') && file.startsWith('infographic-'))
        .sort();

    if (files.length === 0) {
        console.log('No infographic HTML files found!');
        return;
    }

    console.log(`Found ${files.length} infographic(s) to convert:\n`);

    // Convert each file
    for (const file of files) {
        const htmlPath = path.join(INPUT_DIR, file);
        const pngName = file.replace('.html', '.png');
        const pngPath = path.join(OUTPUT_DIR, pngName);

        await convertHtmlToPng(htmlPath, pngPath);
    }

    console.log('\n✅ All conversions complete!');
    console.log(`\nPNG files saved to: ${OUTPUT_DIR}`);
}

// Run the conversion
convertAllInfographics().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
