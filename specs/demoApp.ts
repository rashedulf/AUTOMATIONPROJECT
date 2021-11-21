import { browser, by, element } from "protractor";

describe("demoApp test", function(){

    it("launch url check", function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://automationpractice.com/");
        browser.sleep(3000);

    })

    

    } )

    //it("launch another url check", function(){
       //element(by.model("first")).sendKeys("12");
        //element(by.model("second")).sendKeys("13");
        //element(by.id("gobutton")).click();

        
   // } )
//})