import test from "@playwright/test"
test.only("promptDialogHandling",async({page})=>{

    await page.goto("https://selenium.qabible.in/javascript-alert.php")
   
   page.on('dialog',async(promptBox)=>{
    console.log(promptBox.type())
    console.log(promptBox.message())
    await promptBox.accept('Hanna')           
    //await page.waitForTimeout(3000)

   })
    await page.locator(".btn.btn-danger").click()
   await page.waitForTimeout(3000)
})

//date picker
//click button task