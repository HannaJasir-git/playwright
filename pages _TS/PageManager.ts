import {LoginPage} from "../pages _TS/LoginPage"
import { ProductPage } from "../pages _TS/ProductPage"
import { CartPage } from "../pages _TS/CartPage"
import {CheckoutPage} from "../pages _TS/CheckoutPage"
import {Page} from "@playwright/test"

export class PageManager{
    loginPage:LoginPage
    productPage:ProductPage
    cart:CartPage
    checkOut:CheckoutPage
    page:Page
    constructor(page:Page){
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