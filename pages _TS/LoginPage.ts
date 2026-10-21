import {Locator,Page} from "@playwright/test"
export class LoginPage{  
    userName:Locator//type
    passWord:Locator
    loginButton:Locator
    page:Page
                   
    constructor(page:Page){ 
                  //constructor----we place all locators inside constructor-for REUSE
                                //here there is no page so we add page as a parameter of constructor
    this.userName=page.locator("#user-name")
    this.passWord=page.locator("#password")
    this.loginButton=page.getByRole("button",{name:"Login"})
    this.page=page
    }

    async gotoPage() {
    await this.page.goto("https://www.saucedemo.com/") 
    }
    
    async loginUser(uname:string,pwd:string)  {               //loginUser is a function, here we use async bcz await will not stand alone without async
    await this.userName.fill(uname)
    await this.passWord.fill(pwd)
    await this.loginButton.click()
    await this.page.waitForLoadState("networkidle") 
    }
    


    

}