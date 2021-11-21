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

    it("Search the item", function(){
        
        let selectAnItem= new addItemToTheCart();
        selectAnItem.pickTheProduct();
        browser.sleep(20000);
        expect(browser.getTitle()).toContain("Printed Chiffon Dress - My Store")

 
     })

    

    } )

    //it("launch another url check", function(){
       //element(by.model("first")).sendKeys("12");
        //element(by.model("second")).sendKeys("13");
        //element(by.id("gobutton")).click();

        
   // } )
//})