"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItemToTheCart = void 0;
const protractor_1 = require("protractor");
class addItemToTheCart {
    constructor() {
        this.selectProduct = (0, protractor_1.element)(protractor_1.by.css('a[href="http://automationpractice.com/index.php?id_product=7&controller=product"]'));
        this.addNumberofUnits = (0, protractor_1.element)(protractor_1.by.class('icon-plus'));
        //selectSize= element(by.name('group_1')).$('[value="M"]');
        this.color = (0, protractor_1.element)(protractor_1.by.name('Green'));
        this.addToCart = (0, protractor_1.element)(protractor_1.by.name('Submit'));
    }
    pickTheProduct() {
        this.selectProduct.click();
        this.addNumberofUnits.click();
        protractor_1.browser.sleep(20000);
        //this.selectSize.click();
        //browser.sleep(20000);
        this.color.click();
        this.addToCart.click();
    }
}
exports.addItemToTheCart = addItemToTheCart;
