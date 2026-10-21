import test from "@playwright/test"
test("jsAlertHandling @tag",async({page})=>{

    await page.goto("https://selenium.qabible.in/javascript-alert.php")
   //handling js alert
    page.on('dialog',async(dialog)=>{
       // await dialog.accept()           //handling dialog box
       await page.waitForTimeout(3000)
       await dialog.dismiss()
       
    })
    await page.locator(".btn.btn-warning").click()
    await page.waitForTimeout(3000)

})


//tsk ist click