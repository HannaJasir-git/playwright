import {expect,test} from '@playwright/test'

test("framesLocators",async({page})=>{
    await page.goto("https://demoqa.com/frames")
    const iFrame=page.frameLocator("#frame1")   //locator for Frame
    const heading=iFrame.locator("#sampleHeading")
    const content=await heading.textContent()
    console.log(content)
    await expect(heading).toHaveText(content)
})