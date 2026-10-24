import test from '@playwright/test'
test("annotation test",async({page})=>{
    console.log("TEST STARTED")
})

/*test.only("annotation for only",async({page})=>{
    console.log("ONLY TEST STARTED")
})
*/
test.skip("annotation for skip",async({page})=>{
    console.log("SKIP TEST STARTED")
})

/*test("annotation for fail",async({page})=>{
    console.log("FAIL TEST STARTED")
    test.fail()
})*/

test("annotation for slow",async({page})=>{
    console.log("SLOW TEST STARTED")
    test.slow()
})

test.fixme("annotation for fix to mark",async({page})=>{   //like skip annotation
    console.log("FIX ME TEST STARTED")
    
})
