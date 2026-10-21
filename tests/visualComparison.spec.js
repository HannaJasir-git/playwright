import {expect,test} from "@playwright/test"

test.only("visualComparison",async({page})=>{

    await page.goto("https://www.amazon.ae/")
    await expect(page).toHaveScreenshot("simpleForm.png")
})