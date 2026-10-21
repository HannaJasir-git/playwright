import test from "@playwright/test";

test("keyboard",async({page})=>
{
   /* await page.goto('https://practice.expandtesting.com/autocomplete')
    const firstNameInput=page.locator("#validationCustom01")
    await expect(firstNameInput).toBeVisible()
    //await firstNameInput.click()
    //await firstNameInput.fill("anu")
   // await page.keyboard.type("anu")
    await firstNameInput.pressSequentially("anu")
    await firstNameInput.click()
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")

    const lastNameInput=page.locator("#validationCustom02")
    await lastNameInput.click()
    
     await page.keyboard.press("Control+V")
      await expect(firstNameInput).toHaveValue(er/i,{timeout:10000})*/

      //Mouse hover Actions
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
      //Mouse hover Actions
    const inputFormLink=page.getByRole("link",{name:"Input Form"})
    const colorAfterHover=await inputFormLink.evaluate((el)=>{        //inbuild method to get color
        return window.getComputedStyle(el).color
    })
    await inputFormLink.hover()
    const colorBeforeHover=await inputFormLink.evaluate((el)=>{
        return window.getComputedStyle(el).color 
    })
    console.log(colorAfterHover)
    console.log(colorBeforeHover)

    await expect(colorAfterHover).not.toEqual(colorBeforeHover)
}) 