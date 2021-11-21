"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItemToTheCart = void 0;
const protractor_1 = require("protractor");
class addItemToTheCart {
    constructor() {
        this.selectProduct = (0, protractor_1.element)(protractor_1.by.css('a[href="http://automationpractice.com/index.php?id_product=7&controller=product"]'));
        //addNumberofUnits= element(by.class('.icon-plus'));
        this.selectSize = (0, protractor_1.element)(protractor_1.by.id('group_1')).$('[value="M"]');
    }
    //color= element(by.name('Green'));
    //addToCart= element(by.name('Submit'));
    pickTheProduct() {
        this.selectProduct.click();
        //this.addNumberofUnits.click();
        this.selectSize.click();
        protractor_1.browser.sleep(20000);
        //this.color.click();
        //this.addToCart.click();
    }
}
exports.addItemToTheCart = addItemToTheCart;
