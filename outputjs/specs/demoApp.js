"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const addItemToTheCart_1 = require("../pages/addItemToTheCart");
const searchProduct_1 = require("../pages/searchProduct");
describe("Shop on Online", function () {
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("http://automationpractice.com/");
    });
    it("Search the item", function () {
        let lookForAnItem = new searchProduct_1.searchProducts();
        lookForAnItem.typeProduct();
    }),
        it("Search the item", function () {
            let selectAnItem = new addItemToTheCart_1.addItemToTheCart();
            selectAnItem.pickTheProduct();
            protractor_1.browser.sleep(20000);
            expect(protractor_1.browser.getTitle()).toContain("Product successfully added to your shopping cart");
        });
});
//it("launch another url check", function(){
//element(by.model("first")).sendKeys("12");
//element(by.model("second")).sendKeys("13");
//element(by.id("gobutton")).click();
// } )
//})
