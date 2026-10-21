
import {test,expect} from "@playwright/test"
test("datePickerLocators @web @tag",async({page})=>{

    await page.goto("https://selenium.qabible.in/date-picker.php")
    await page.locator(".form-control.datepicker").click()
    await page.locator(".datepicker-days th.datepicker-switch").click()
    await page.locator(".datepicker-months th.datepicker-switch").click()
    const targetYear=2026
    const targetMonth=6
    const targetDate=12
    while(true){
        const currentRange=await page.locator(".datepicker-years th.datepicker-switch").textContent()
        console.log(currentRange)
        const startRange=currentRange.split("-")[0]
        console.log(startRange)
        const endRange=currentRange.split("-")[1]
        console.log(endRange)
        if(targetYear>=startRange && targetYear<=endRange)
            //2016>=2020 && 2016<=2029 , 2016>=2010 && 2016<=2019
        {
            break
        }
        
        if(targetYear<startRange){
            await page.locator(".datepicker-years th.prev").click()
        }else{
             await page.locator(".datepicker-years th.next").click()
        }
    }
    
    await page.locator("span.year").filter({hasText:targetYear.toString()}).click()
    await page.locator(".month").nth(targetMonth-1).click()
    await page.locator(".day").filter({hasText:targetDate.toString()}).click()

//inspecting the given date and printing date are same
    await page.locator("#button-one").click()
    const msgShown=await page.locator("#message-one")
    const msg=await msgShown.textContent()
    //console.log("Input",msg)
    const inputBox=await page.locator(".form-control.datepicker")
    const inputDate=await inputBox.inputValue()
    console.log(inputDate)
    await expect(msg).toContain(inputDate)
    
  
     await page.waitForTimeout(3000)

})