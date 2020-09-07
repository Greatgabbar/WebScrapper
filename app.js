//Example to Take a scrren shot from the website

const puppeteer=require('puppeteer');

(async ()=>{
  const browser=await puppeteer.launch({
    headless: true,
   args: ['--no-sandbox']
  });
  const page = await browser.newPage(); 
  await page.setViewport({
    width: 1000,
    height: 1000,
    deviceScaleFactor: 1,
  });
  await page.goto('https://github.com/Greatgabbar');
  await page.screenshot({path:'blahblahblah.png'});
  console.log("completed");
  await browser.close();
})()