import {Locator,Page} from "@playwright/test"
import { expect } from "@playwright/test"

export class CartPage{
    cartItem:Locator
    page:Page
    constructor(page:Page){
        this.page=page
        this.cartItem=page.locator(".inventory_item_name")
       
    }

    async cartPage(myProduct:string){
    //console.log("My cart item is:", await this.cartItem.textContent())
    await expect(this.cartItem.filter({hasText:myProduct})).toHaveText(myProduct)
    await this.page.getByRole("button",{name:"Checkout"}).click()
    }

    
}