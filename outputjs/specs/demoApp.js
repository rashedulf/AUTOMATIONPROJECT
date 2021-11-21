"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("demoApp test", function () {
    beforeEach(function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    });
    it("launch url check", function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
    });
    it("launch another url check", function () {
        (0, protractor_1.element)(protractor_1.by.model("first")).sendKeys("12");
        (0, protractor_1.element)(protractor_1.by.model("second")).sendKeys("13");
        (0, protractor_1.element)(protractor_1.by.id("gobutton")).click();
    });
});
