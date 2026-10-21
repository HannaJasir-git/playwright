import test from '@playwright/test'

test.only("excel",async({page})=>{
await page.goto("https://demoqa.com/upload-download")

const fileUpload=page.locator("#uploadFile")
await fileUpload.setInputFiles("C:\Users\Pictures\Screenshots\Screenshot (12).png")
})