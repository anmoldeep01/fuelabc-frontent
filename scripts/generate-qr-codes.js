/* eslint-disable @typescript-eslint/no-require-imports */
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Direct link to Google Play Store
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN';

const publicDir = path.join(__dirname, '..', 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

async function generateQRCode() {
    try {
        // Generate QR code for Android Play Store
        await QRCode.toFile(
            path.join(publicDir, 'qr-download.png'),
            playStoreUrl,
            {
                width: 300,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            }
        );
        console.log('✓ Android Play Store QR code generated: public/qr-download.png');
        console.log('✓ QR code generation complete!');
    } catch (error) {
        console.error('Error generating QR code:', error);
        process.exit(1);
    }
}

generateQRCode();
