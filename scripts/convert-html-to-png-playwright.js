#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = path.join(__dirname, '../docs/public/images');
const OUTPUT_DIR = path.join(__dirname, '../docs/public/images/png');
const WIDTH = 1920;
const HEIGHT = 1080;
const DEVICE_SCALE_FACTOR = 2; // 2x for high DPI

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function convertHtmlToPng(browser, htmlFile, outputFile) {
    console.log(`Converting ${path.basename(htmlFile)}...`);

    try {
        const context = await browser.newContext({
            viewport: {
                width: WIDTH,
                height: HEIGHT
            },
            deviceScaleFactor: DEVICE_SCALE_FACTOR
        });

        const page = await context.newPage();

        // Load the HTML file
        const htmlPath = `file://${htmlFile}`;
        await page.goto(htmlPath, {
            waitUntil: 'networkidle',
            timeout: 30000
        });

        // Wait for fonts and icons to load
        await page.waitForTimeout(2000);

        // Get the actual content bounds of the infographic
        const infographicElement = await page.$('.infographic');

        if (infographicElement) {
            // Take screenshot of just the infographic element (cropped to content)
            await infographicElement.screenshot({
                path: outputFile,
                type: 'png'
            });
        } else {
            // Fallback: full page screenshot if element not found
            await page.screenshot({
                path: outputFile,
                type: 'png',
                fullPage: true
            });
        }

        await context.close();

        console.log(`✓ Created ${path.basename(outputFile)}`);
        return true;
    } catch (error) {
        console.error(`✗ Error converting ${path.basename(htmlFile)}:`, error.message);
        return false;
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

    // Launch browser once for all conversions
    const browser = await chromium.launch({
        headless: true
    });

    let successCount = 0;
    let failCount = 0;

    // Convert each file
    for (const file of files) {
        const htmlPath = path.join(INPUT_DIR, file);
        const pngName = file.replace('.html', '.png');
        const pngPath = path.join(OUTPUT_DIR, pngName);

        const success = await convertHtmlToPng(browser, htmlPath, pngPath);
        if (success) {
            successCount++;
        } else {
            failCount++;
        }
    }

    await browser.close();

    console.log('\n' + '='.repeat(60));
    console.log(`✅ Conversion complete: ${successCount} succeeded, ${failCount} failed`);
    console.log(`\nPNG files saved to: ${OUTPUT_DIR}`);
}

// Run the conversion
convertAllInfographics().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
