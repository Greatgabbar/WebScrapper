//Example to Take a scrren shot from the website

const puppeteer=require('puppeteer');

(async ()=>{
  const browser=await puppeteer.launch({
    headless: true,
   args: ['--no-sandbox']
  });
  const page = await browser.newPage(); 
  await page.goto('https://news.ycombinator.com/');
  const dimensions=await page.evaluate(()=>{
    return{
      width : document.documentElement.clientWidth,
      height:document.documentElement.clientHeight,
      deviceScaleFactor : window.devicePixelRatio
    }
  })
  await page.setViewport({
    width: dimensions.width,
    height: dimensions.height,
    deviceScaleFactor: dimensions.deviceScaleFactor,
  });
  await page.screenshot({path:'blahblahblah.png'});
  console.log(dimensions);
  console.log("completed");
  await browser.close();
})()