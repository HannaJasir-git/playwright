import test from "@playwright/test"
test.only("selectInput",async({page})=>{

    await page.goto("https://selenium.qabible.in/select-input.php")
    const dropdownBox=await page.getByRole("combobox",{name:"Select Color"})
    await dropdownBox.selectOption("Red")
    const optMessage=await page.locator("#message-one")
    const msg=await optMessage.textContent()
    console.log(msg)


})

