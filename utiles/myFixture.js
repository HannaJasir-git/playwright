import {test as base} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
const customtest=base.extend({
    loggedin:async({page},use)=>{
const loginpage=new LoginPage(page)
await loginpage.gotoPage()
await loginpage.loginUser("standard_user","secret_sauce")
await use(LoginPage) 

    }
})
export {customtest}