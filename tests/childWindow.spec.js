import {expect,test} from '@playwright/test'

test.only("alertLocators",async({page})=>{
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const fbButton=page.getByRole("button",{name:"Like us On Facebook" })
    await fbButton.click()
    
})