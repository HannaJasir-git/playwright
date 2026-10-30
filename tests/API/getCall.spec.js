import test from "@playwright/test"
test("getCall",async({request})=>{   //request -to handle http method
const Response=await request.get("https://jsonplaceholder.typicode.com/posts/1")//url from postman
//console.log(Response)
const jsonresp=await Response.json()  //API IN PLAYWRIGHT
console.log(jsonresp)
})
