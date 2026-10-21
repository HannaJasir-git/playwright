import {test,expect} from "@playwright/test"
test.only("radioButtonLocators",async({page})=>{

   await page.goto("https://selenium.qabible.in/radio-button-demo.php")
   await page.locator("#inlineRadio1").check()
   await page.getByRole("button",{name:"Show Selected Value"}).click()
   const clickedMessage=page.locator("#message-one")
   const msg=await clickedMessage.textContent()
   console.log(msg)
   await expect(msg).toContain("checked")  
 
})
