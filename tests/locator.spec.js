import test from "@playwright/test"
test("locators",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
})