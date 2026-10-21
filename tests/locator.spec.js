import {test,expect} from "@playwright/test"
test.only("FormSubmitLocators",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Hanna")
    await page.locator(".form-control").nth(1).fill("Jasir")
    await page.locator("[placeholder='Username']").fill("hanna123")
    await page.locator("//input[@placeholder='City']").fill("Trivandrum")
    await page.getByPlaceholder("State").fill("kerala")
    await page.getByLabel("Zip").fill("000")
    const submitMessage=page.locator(".my-2") 
    await expect(submitMessage).not.toBeVisible() 
    await page.locator("#invalidCheck").click()
    await page.getByRole("button",{name:"Submit form"}).click() ;  //getByRole method for button etc
    //const submitMessage=page.locator(".my-2")                     
    const message =await submitMessage.textContent()          //text content method for printing output message in terminal
    console.log(message)
    await expect(submitMessage).toBeVisible()              //submitMessage-->locator
    await expect(submitMessage).toHaveText(message)         //to find the text in locator
    await expect(message).toContain("bee")               //to find a substring in a string


    await page.waitForTimeout(3000)
})

//locators are used to find elements on the page
test ("SimpleFormDemoLocators",async({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    await page.locator("#single-input-field").fill("This is a message")
    await page.getByRole("button",{name:"Show Message"}).click()
    await page.getByPlaceholder("Enter Value").first().fill("10")
    await page.getByPlaceholder("Enter Value").nth(1).fill("20")
    await page.getByRole("button",{name:"Get Total"}).click()

    await page.waitForTimeout(5000)
})

