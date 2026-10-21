import test from '@playwright/test'
test("dwnld @web",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const downloadButton=page.getByRole("button",{name:"Download"})
    //for wait download event
    const downloadPromise=page.waitForEvent("download")
    await downloadButton.click()

    const download=await downloadPromise
    await  download.saveAs("C:\\Users\\user\\Desktop\\OBSQURE\\Playwright\\utiles\\imge.jpeg")

})


//code gen ---npx playwright codegen url 