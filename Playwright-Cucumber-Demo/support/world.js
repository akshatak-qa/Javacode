const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

class CustomWorld {

    async init() {
        // Browser configuration options
        const browserType = process.env.BROWSER || 'chromium'; // chromium, firefox, webkit
        const headless = process.env.HEADLESS !== 'false'; // Set to 'false' for headed mode
        
        // Launch browser with options
        const launchOptions = {
            headless: headless,
            args: ['--start-maximized'],
            slowMo: parseInt(process.env.SLOW_MO || '0') // Add delay between actions (in ms)
        };

        // Select browser type
        let browserEngine;
        switch(browserType.toLowerCase()) {
            case 'firefox':
                browserEngine = firefox;
                break;
            case 'webkit':
                browserEngine = webkit;
                break;
            case 'chromium':
            default:
                browserEngine = chromium;
        }

        try {
            this.browser = await browserEngine.launch(launchOptions);
            console.log(`✓ Browser launched: ${browserType}`);

            // Create context with additional options
            this.context = await this.browser.newContext({
                viewport: { width: 1280, height: 720 },
                ignoreHTTPSErrors: true,
                acceptDownloads: true
            });

            // Create page with default timeout
            this.page = await this.context.newPage();
            this.page.setDefaultTimeout(30000);
            this.page.setDefaultNavigationTimeout(30000);
            
        } catch (error) {
            console.error('✗ Failed to launch browser:', error.message);
            throw error;
        }
    }

    async close() {
        try {
            if (this.browser) {
                await this.browser.close();
                console.log('✓ Browser closed');
            }
        } catch (error) {
            console.error('✗ Error closing browser:', error.message);
        }
    }
}

setWorldConstructor(CustomWorld);