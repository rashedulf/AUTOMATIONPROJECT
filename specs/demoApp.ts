import { browser, by, element } from "protractor";

describe("demoApp test", function(){

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");

    })

    it("launch url check", function(){
        expect(browser.getTitle()).toContain("Super")

    } )

    it("launch another url check", function(){
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("13");
        element(by.id("gobutton")).click();

        
    } )
})