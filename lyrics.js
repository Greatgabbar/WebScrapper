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
    await page.goto('https://www.google.com/search?q=without+me+lyrics');
    const search=await page.$('.SALvLe.farUxc.mJ2Mod');
    console.log(search);
    const title=await search.$$eval('.ujudUb span',options => options.map(option => option.textContent))
    console.log(title.join('\n'));
})()