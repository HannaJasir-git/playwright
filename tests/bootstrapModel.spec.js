import {test,expect} from "@playwright/test"
test.only("bootstrapModelLocators",async({page})=>{

    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    await page.getByRole("button",{name:"Launch modal"}).first().click()     //here we use first(),bcz there are 2 same button
    const modal=page.locator("#exampleModalCenter")                         //handling that small window -handling a modal
    await expect(modal).toBeVisible()
    await modal.locator(".btn.btn-secondary").click()                       //inspecting modal locators
})