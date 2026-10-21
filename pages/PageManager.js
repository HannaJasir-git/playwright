import {LoginPage} from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import { CartPage } from "../pages/CartPage"
import {CheckoutPage} from "../pages/CheckoutPage"

export class PageManager{
    constructor(page){
        this.page=page
        this.loginPage=new LoginPage(page)          //objects we created in POM
        this.productPage=new ProductPage(page)
        this.cart=new CartPage(page)
        this.checkOut=new CheckoutPage(page)
    }
    async getLoginPage()
    {
        return this.loginPage
    }
    async getProductPage()
    {
        return this.productPage
    }
    async getcart()
    {
        return this.cart
    }
    async getcheckOut()
    {
        return this.checkOut
    }
}