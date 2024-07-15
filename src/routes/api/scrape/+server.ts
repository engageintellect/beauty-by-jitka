import type { RequestHandler } from '@sveltejs/kit';
import { chromium } from 'playwright';

export const GET: RequestHandler = async () => {
    let browser = null;

    try {
        // Launch browser
        browser = await chromium.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: true,
        });

        const page = await browser.newPage();

        // Navigate to the TikTok profile
        await page.goto('https://countik.com/user/@beautybyjitka', { waitUntil: 'networkidle' });

        // Wait for the followers count elements and ensure content is fully loaded
        await page.waitForSelector('.count', { timeout: 20000 });

        // Introduce a manual delay to ensure the content is loaded
        await new Promise(resolve => setTimeout(resolve, 5000));

        // Extract all counters
        const counters = await page.$$eval('.count', (elements: Element[]) => 
            elements.map(el => el.textContent?.trim())
        );

        await browser.close();

        return new Response(JSON.stringify({ counters }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Failed to fetch data:', error);  // Log the error

        if (browser) {
            await browser.close();
        }

        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 500
        });
    }
};
