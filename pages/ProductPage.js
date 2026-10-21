

export class ProductPage{
    constructor(page){
           this.productTitle=page.locator(".inventory_item_name")
           this.inventoryDescription=page.locator(".inventory_item_description")
           this.cartIcon=page.locator(".shopping_cart_link") 
           
           this.page=page
            }

        async product(myProduct){
             const productCount =await this.productTitle.count()
             const productList =await this.productTitle.allTextContents()

        console.log("Total Item:", productCount)
        console.log("Listed Products are:", productList)

               for(let i=0;i<productCount;i++){
                   if(await this.productTitle.nth(i).textContent()==myProduct)
                          {
                             //const inventoryDescription =this.inventoryDescription.nth(i)
                            const addtoCart=this.inventoryDescription.nth(i).getByText("Add to cart")
                            await addtoCart.click()
                            break
                              }
                                   }

                        }
        async navigatetoCart(){
                 
                 await this.cartIcon.click()
        } 



                    }
