import * as puppeteer from 'puppeteer';

(async () => {
    const url = 'https://www.dn.no/';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const title = await page.title();
    console.log('Website Title:', title);

    await browser.close();
})();