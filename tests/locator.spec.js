import test from "@playwright/test"
test("FormSubmitlocators",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Hanna")
    await page.locator(".form-control").nth(1).fill("Jasir")
    await page.locator("[placeholder='Username']").fill("hanna123")
    await page.locator("//input[@placeholder='City']").fill("Trivandrum")
    await page.getByPlaceholder("State").fill("kerala")
    await page.getByLabel("Zip").fill("000")
    await page.locator("#invalidCheck").click()
    await page.getByRole("button",{name:"Submit form"}).click()   //getByRole method for button etc

    await page.waitForTimeout(3000)
})

//locators are used to find elements on the page
test("SimpleFormDemolocators",async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("This is a message")
    await page.getByRole("button",{name:"Show Message"}).click()
    await page.getByPlaceholder("Enter Value").nth(0).fill("10")
    await page.getByPlaceholder("Enter Value").nth(1).fill("20")
    await page.getByRole("button",{name:"Get Total"}).click()

    await page.waitForTimeout(6000)
})