"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("demoApp test", function () {
    it("launch url check", function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("http://automationpractice.com/");
        protractor_1.browser.sleep(3000);
    });
});
//it("launch another url check", function(){
//element(by.model("first")).sendKeys("12");
//element(by.model("second")).sendKeys("13");
//element(by.id("gobutton")).click();
// } )
//})
