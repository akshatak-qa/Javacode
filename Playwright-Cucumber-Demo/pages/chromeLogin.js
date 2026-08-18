const {chromium}= require('playwright');

(async()=>{
 const browser= await chromiu.launch({headless:false});
// eslint-disable-next-line
const context= await browser.newContext();
const page= await context.newPage();
await page.goto("https://www.google.com");
browser.close();





});


async()=>{



}