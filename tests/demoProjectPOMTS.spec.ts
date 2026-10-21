import test, { expect } from "@playwright/test"

import {PageManager} from "../pages _TS/PageManager"
import Data from "../utiles/Data.json"
//const testData=JSON.parse(JSON.stringify(Data)) //to change to normal string----->js object

for (const testData of Data){
test(`demoproject ${testData.myProduct}`,async({page})=>{   //Concatenate the product name, myProduct is the unique identifier
 
    
     const pom=new PageManager(page) //constructor,the value of the page is going to POM Page
     const loginPage=await pom.getLoginPage()
     const productpage=await pom.getProductPage()
      const cart=await pom.getcart()
      const checkOut=await pom.getcheckOut()


    await loginPage.gotoPage()  
        //function call for go to page
        
    await loginPage.loginUser(testData.uname,testData.pwd)    //await bcz of asyn in POM page, function call for loginuser

      //used for loading the site fully


    
    
    await productpage.product(testData.myProduct)
    await productpage.navigatetoCart()
    
    
    await cart.cartPage(testData.myProduct)
    
     
     await checkOut.checkoutFill(testData.firstName,testData.lastName,testData.zipCode)
   
   
    //const addtoCart=await page.getByText("Add to cart")

    //Page Object Model -PO MODEL------------->
    

    await page.waitForTimeout(2000)
})}