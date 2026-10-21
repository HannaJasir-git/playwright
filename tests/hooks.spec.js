import {test} from "@playwright/test"
test("hooks sample1",async({page})=>{
    console.log("1st test case started")
})

test("hooks sample2",async({page})=>{
    console.log("2nd test case started")
})

test("hooks sample3",async({page})=>{
    console.log("3rd test case started")
})

test.beforeAll(async()=>{                     //execute before all test cases
    console.log("Before all test case started")
})

test.afterAll(async()=>{                      
    console.log("After all test case started")
})

test.beforeEach(async()=>{                           //execute before each test cases
    console.log("Executed before each test case started")
})

test.afterEach(async()=>{
    console.log("Executed after each test case started")
})
