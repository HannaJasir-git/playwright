import {test,expect} from '@playwright/test'
test("now",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    const firstName=page.locator("#validationCustom01")
    await expect (firstName).toBeVisible()
    await firstName.click()
    

    const secondName=page.locator("#validationCustom02")
    
})