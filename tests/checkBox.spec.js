import {test,expect} from "@playwright/test"

test("checkBox",async({page})=>{
    await page.goto("https://selenium.qabible.in/check-box-demo.php")
    const inputForm=page.getByRole("link",{name:"Input Form"})
    await inputForm.click()
    const checkboxDemo=page.getByRole("link",{name:"Checkbox Demo"})
    await checkboxDemo.click()
    //await page.pause()
    const singleCheckbox=page.getByRole("checkbox",{name:"Click on this check box"})
    await singleCheckbox.click()

    //await page.locator("#gridCheck").click()
    const checkBox1=page.locator(".my-2")
    await expect(checkBox1).toBeVisible()  
    const message =await checkBox1.textContent()          //text content method for printing output message in terminal
    console.log(message)
    const result=await singleCheckbox.isChecked()
    console.log(result)
    await expect(singleCheckbox).toBeChecked()
    await expect(result).toBeTruthy()                //checking the value of the result variable must be true
   // await expect(result).toBeFalsy()               //checking the value must be false
   


   // await page.locator("#check-box-one").check()
   // await page.locator("#check-box-twe").check()
    //await page.locator("#check-box-three").check()
    //await page.locator("#check-box-four").check()

    //await page.getByRole("button",{name:"Select All"}).click()

      await page.waitForTimeout(3000)
})


    