const puppeteer = require('puppeteer');
const $=require('cheerio');
(async ()=>{
    const browser= await puppeteer.launch({ headless: false });
    const page= await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 720,
        deviceScaleFactor: 1,
    });
    await page.goto('https://www.google.com/search?q=lonely&source=lnms&tbm=vid');
    const search=await page.$('#search');
    const title=await search.$$eval('a',options => options.map(option => option.href))
    console.log(title[0]);
    const page2= await browser.newPage();
    page2.goto(title[0]);
})()