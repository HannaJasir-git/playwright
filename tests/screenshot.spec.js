import test from "@playwright/test"

test("screenshotLocator",async({page})=>
{
    await page.goto("https://www.saucedemo.com/cart.html")
    await page.screenshot({path:"Screen.png",fullPage:true})      //Full page screenshot

    const loginButton=page.getByRole("button",{name:"Login"})
    await loginButton.screenshot({path:"Screen1.png"})           //screenshot for specific element






})