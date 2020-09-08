//Example to Take a scrren shot from the website

const puppeteer = require('puppeteer');

// code for taking a full Screen Shot of a website

// (async ()=>{
//   const browser=await puppeteer.launch({
//     headless: true,
//    args: ['--no-sandbox']
//   });
//   const page = await browser.newPage(); 
//   await page.goto('https://news.ycombinator.com/');
  // const dimensions=await page.evaluate(()=>{
  //   return{
  //     width : document.documentElement.clientWidth,
  //     height:document.documentElement.clientHeight,
  //     deviceScaleFactor : window.devicePixelRatio
  //   }
  // })
  // await page.setViewport({
  //   width: dimensions.width,
  //   height: dimensions.height,
  //   deviceScaleFactor: dimensions.deviceScaleFactor,
  // });
//   await page.screenshot({path:'blahblahblah.png'});
//   console.log(dimensions);
//   console.log("completed");
//   await browser.close();
// })()

// Trying to fetch data of difffrent goverment schemes but dont get any website :(

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--no-sandbox']
//   });
//   const page = await browser.newPage();
//   await page.goto('https://www.turtlemint.com/government-insurance-schemes/');
//   const dimensions = await page.evaluate(() =>{
//     return{
//       heading:Array.from(document.querySelectorAll('.tm-pages .section-style'))
//         .map((data)=>{
//           return data.querySelector('h2').textContent
//         }),
//       content : Array.from(document.querySelectorAll('.tm-pages .paragraph-style'))
//         .map((data)=>{
//           return data.textContent
//         })
//     }
//   }
//   );
//   console.log(dimensions);

//   await browser.close();
// })()

// Code to save a pdf file

(async ()=>{
const browser=await puppeteer.launch({
  headless:true,
  args:['--no-sandbox']
})

const page=await browser.newPage();
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
 await page.goto('https://www.youtube.com/',{waitUntil : 'load'});
 await page.pdf({
   path:'hell.pdf',
   format:'A4',
  });

await browser.close();
})()