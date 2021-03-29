const puppeteer = require('puppeteer');
const moment = require('moment');
// const data={
//     Monday : [
//         {
//             time : "8:50:00",
//             link : "https://tiet.zoom.us/my/eied1",
//             code : "UES034 L"
//         },
//         {
//             time : "9:40:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS411 L"
//         },
//         {
//             time : "10:30:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS415 L"
//         },
//         {
//             time : "11:20:00",
//             link : "https://tiet.zoom.us/my/CSED10",
//             code: "UTA014 P"
//         },
//         {
//             time : "13:50:00",
//             link : "https://tiet.zoom.us/my/CSED9",
//             code: "UCS414 P"
//         },
//         {
//             time : "15:30:00",
//             link : "https://tiet.zoom.us/my/mee01",
//             code: "UTA026 P"
//         }
//     ],
//     Tuesday : [
//         {
//             time : "8:50:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS310 L"
//         },
//         {
//             time : "9:40:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS414 L"
//         },
//         {
//             time : "11:20:00",
//             link : "https://tiet.zoom.us/my/mee01",
//             code : "UTA026 L"
//         },
//         {
//             time : "12:10:00",
//             link : "https://tiet.zoom.us/my/eied2",
//             code : "UES034 L"
//         },
//         {
//             time : "15:30:00",
//             link : "https://tiet.zoom.us/my/eied8",
//             code : "UES034 P"
//         }
//     ],
//     Wednesday : [
//         {
//             time : "8:50:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS411 L"
//         },
//         {
//             time : "9:40:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS415 L"
//         },
//         {
//             time : "10:30:00",
//             link : "https://tiet.zoom.us/my/eied2",
//             code : "UES034 L"
//         },
//         {
//             time : "11:20:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UTA014 L"
//         },
//         {
//             time : "14:40:00",
//             link : "https://tiet.zoom.us/my/CSED9",
//             code : "UCS415 P"
//         }
//     ],
//     Thursday : [
//         {
//             time : "8:00:00",
//             link : "https://tiet.zoom.us/my/ECED11",
//             code : "UTA014 P"
//         },
//         {
//             time : "13:50:00",
//             link : "https://tiet.zoom.us/my/csed12?pwd=VGUxNlkvSC90azZSeWYvWXdmbVVudz09",
//             code : "UCS411 P"
//         },
//         {
//             time : "15:30:00",
//             link : "https://tiet.zoom.us/my/CSED9",
//             code : "UCS411 L"
//         },
//         {
//             time : "16:20:00",
//             link : "https://tiet.zoom.us/my/CSED9",
//             code : "UCS415 L"
//         }
//     ],
//     Friday : [
//         {
//             time : "9:40:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS310 L"
//         },
//         {
//             time : "10:30:00",
//             link : "https://tiet.zoom.us/my/mee01",
//             code : "UTA026 L"
//         },
//         {
//             time : "11:20:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS310 L"
//         },
//         {
//             time : "12:10:00",
//             link : "https://tiet.zoom.us/my/CSED8",
//             code : "UCS414 L"
//         },
//         {
//             time : "14:40:00",
//             link : "https://tiet.zoom.us/my/CSED6",
//             code : "UCS310 P"
//         }
//     ]
// }

// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";


// let dateIST=new Date();
// dateIST.setHours(dateIST.getHours() + 5); 
// dateIST.setMinutes(dateIST.getMinutes() + 30);
// const day= weekday[dateIST.getDay()];
// const times=data[day];
// console.log(times);

// setInterval(()=>{
//     if(!times.length)
//      return;
//     let date=new Date();
//     let curtime=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     console.log(curtime);
//     if(curtime===times[0].time){
//       startClass(times[0].link);
//     }
// },1000)

// const startClass= async (link)=>{
    (async()=>{
    const browser= await puppeteer.launch({ headless: false });
    const page= await browser.newPage();
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
      });
    await page.setViewport({
        width: 1920,
        height: 720,
        deviceScaleFactor: 1,
    });
    await page.goto("https://zoom.us");
    await page.click('.signin'); 
    await page.waitForSelector('.login-btn-google');
    await page.click('.login-btn-google');
    // page.evaluate(() => alert('1'));
    })()
