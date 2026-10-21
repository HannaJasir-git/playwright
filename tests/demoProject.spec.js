import test, { expect } from "@playwright/test"
import {customtest} from "../utiles/myFixture.js"
test.skip("demoLocators",async({page})=>{

    await page.goto("https://www.saucedemo.com/")

    const userName=await page.locator("#user-name")
    await userName.fill("standard_user")
    const passWord=await page.locator("#password")
    await passWord.fill("secret_sauce")
    const loginButton=await page.getByRole("button",{name:"Login"})
    await loginButton.click()

    await page.waitForLoadState("networkidle")                 //used for loading the site fully

    const productTitle=page.locator(".inventory_item_name")
    const productCount=await productTitle.count()             //to find the count using product title
    console.log("Total Item:",productCount)

    const productList=await productTitle.allTextContents()   //to get products,fetch multiple texts-alltextcontent
    console.log("Listed Products are:",productList)

    const myProduct="Sauce Labs Backpack"                   //we choosed a product

    
    for(let i=0;i<productCount;i++){                        //creating loop for searching this item in list
        if(await productTitle.nth(i).textContent()==myProduct)
            {

            const inventoryDescription=page.locator(".inventory_item_description").nth(i)
            const addtoCart=inventoryDescription.getByText("Add to cart")
            await addtoCart.click()
            break
        }
        
    }
    
     const cartIcon=await page.locator(".shopping_cart_link")
     await cartIcon.click()
     
     const cartItem=await page.locator(".inventory_item_name")
     console.log("My cart item is:", await cartItem.textContent())
    await expect(cartItem).toHaveText(myProduct)

   const checkoutButton = page.locator("#checkout")
   await checkoutButton.click()

   const firstName=await page.locator("#first-name")
   await firstName.fill("Hanna")
   const lastName=await page.locator("#last-name")
   await lastName.fill("Jasir")
   const zipCode=await page.locator("#postal-code")
   await zipCode.fill("00000")
   
   const continueButton=await page.locator("#continue")
   await continueButton.click()

   
   
    //const addtoCart=await page.getByText("Add to cart")

    //Page Object Model -PO MODEL------------->
    

    await page.waitForTimeout(2000)
})


customtest("demoproject with fixture", async({page,loggedin})=>{       

   
    const productTitle=page.locator(".inventory_item_name")
    const productCount=await productTitle.count()             //to find the count using product title
    console.log("Total Item:",productCount)

    const productList=await productTitle.allTextContents()   //to get products,fetch multiple texts-alltextcontent
    console.log("Listed Products are:",productList)

    const myProduct="Sauce Labs Backpack"                   //we choosed a product

    
    for(let i=0;i<productCount;i++){                        //creating loop for searching this item in list
        if(await productTitle.nth(i).textContent()==myProduct)
            {

            const inventoryDescription=page.locator(".inventory_item_description").nth(i)
            const addtoCart=inventoryDescription.getByText("Add to cart")
            await addtoCart.click()
            break
        }
        
    }
    
     const cartIcon=await page.locator(".shopping_cart_link")
     await cartIcon.click()
     
     const cartItem=await page.locator(".inventory_item_name")
     console.log("My cart item is:", await cartItem.textContent())
    await expect(cartItem).toHaveText(myProduct)

   const checkoutButton = page.locator("#checkout")
   await checkoutButton.click()

   const firstName=await page.locator("#first-name")
   await firstName.fill("Hanna")
   const lastName=await page.locator("#last-name")
   await lastName.fill("Jasir")
   const zipCode=await page.locator("#postal-code")
   await zipCode.fill("00000")
   
   const continueButton=await page.locator("#continue")
   await continueButton.click()

   
   
    //const addtoCart=await page.getByText("Add to cart")

    //Page Object Model -PO MODEL------------->
    

    await page.waitForTimeout(2000)


})




/*ANNOTATIONS ----test.only like

.only
.skip
.fail
.slow

*/
