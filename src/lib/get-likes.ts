import puppeteer from "puppeteer";

export async function scrapeTikTok() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to the TikTok profile
    await page.goto('https://www.tiktok.com/@beautybyjitka?lang=en', { waitUntil: 'networkidle2' });

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

    await browser.close();
}

