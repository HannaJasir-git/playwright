import { expect } from "@playwright/test"
export class CheckoutPage{
    constructor(page){
        this.page=page
        this.firstName=page.locator("#first-name")
        this.lastName=page.locator("#last-name")
        this.zipCode=page.locator("#postal-code")

        this.continueButton=page.locator("#continue")

        this.finishButton=page.locator("#finish")
        
    }

    async checkoutFill(firstName,lastName,zipCode)
         {
         await this.firstName.fill(firstName)
         await this.lastName.fill(lastName)
         await this.zipCode.fill(zipCode)

         await this.continueButton.click()

         await this.finishButton.click()
         const msg=await this.page.locator(".complete-header").textContent()
         await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
         console.log(msg)
         expect(msg).toContain("Thank you for your order")

    }
}




  
   