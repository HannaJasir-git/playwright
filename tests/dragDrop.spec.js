import test from "@playwright/test"

test("dragDropLocators",async({page})=>{
    await page.goto("https://selenium.qabible.in/drag-drop.php")
   const targetBox= await page.getByText("Draggable n°1")
    const destinationBox=await page.locator("#mydropzone")
    await targetBox.dragTo(destinationBox)   //drag and drop


})


test.only("multipledragDrop",async({page})=>{
    await page.goto("https://selenium.qabible.in/drag-drop.php")
   const targetBox= await page.locator('[draggable="true"]')
    const destinationBox=await page.locator("#mydropzone")
    
    const count=await targetBox.count
    console.log(count)
    for(let i=0;i<count;i++){
        await targetBox.nth(0).dragTo(destinationBox)
    }
  

    
})