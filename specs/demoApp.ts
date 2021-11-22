import { browser, by, element } from "protractor";
import { addItemToTheCart } from "../pages/addItemToTheCart";
import { searchProducts } from "../pages/searchProduct";

describe("Shop on Online", function(){

   beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get("http://automationpractice.com/");
   })

    it("Search the item", function(){
        
       let lookForAnItem= new searchProducts();
       lookForAnItem.typeProduct();

    }),

    it("Add the item to the cart", function(){
        
        let selectAnItem= new addItemToTheCart();
        selectAnItem.pickTheProduct();
        expect(browser.getTitle()).toContain("Printed Chiffon Dress - My Store");
        
     })

    

    });
