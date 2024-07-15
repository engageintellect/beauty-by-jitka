import { chromium } from 'playwright-core';
import { installBrowsersForNpmInstall } from '@playwright/test/lib/install/installer';

export async function scrapeTikTok() {
    let browser = null;

    try {
        // Ensure browsers are installed
        await installBrowsersForNpmInstall();

        // Launch browser
        browser = await chromium.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: true,
        });

        const page = await browser.newPage();

        // Navigate to the TikTok profile
        await page.goto('https://www.tiktok.com/@beautybyjitka?lang=en', { waitUntil: 'networkidle' });

        // Wait for the followers and likes elements to load
        await page.waitForSelector('.tiktok-1p43p3m-DivNumber.e1awr0xi0'); // Update this selector as necessary

        // Scrape the followers count
        const followers = await page.evaluate(() => {
            return document.querySelectorAll('.tiktok-1p43p3m-DivNumber.e1awr0xi0')[0].textContent;
        });

        // Scrape the likes count
        const likes = await page.evaluate(() => {
            return document.querySelectorAll('.tiktok-1p43p3m-DivNumber.e1awr0xi0')[1].textContent;
        });

        console.log(`Followers: ${followers}`);
        console.log(`Likes: ${likes}`);

    } catch (error) {
        console.error('Error scraping TikTok:', error);
        throw error;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}
