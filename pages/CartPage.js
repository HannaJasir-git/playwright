
import { expect } from "@playwright/test"

export class CartPage{
    constructor(page){
        this.page=page
        this.cartItem=page.locator(".inventory_item_name")
       
    }

    async cartPage(myProduct){
    //console.log("My cart item is:", await this.cartItem.textContent())
    await expect(this.cartItem.filter({hasText:myProduct})).toHaveText(myProduct)
    await this.page.getByRole("button",{name:"Checkout"}).click()
    }

    
}