import {test} from "@playwright/test"   //importing test function
test("firstTest",async({browser})=>{     //creating test function---2 parameters, //firstTest-type,()=>-an arrow fn
       const context=await browser.newContext()  //for creating fresh tab  
       const page=await context.newPage()       //for getting page from browser
       await page.goto("https://www.youtube.com/")  //for navigating to that page using goto method
})

                   


//fixture
//---------->1.browser
