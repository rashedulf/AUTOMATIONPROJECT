"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItemToTheCart = void 0;
const protractor_1 = require("protractor");
class addItemToTheCart {
    constructor() {
        this.selectProduct = (0, protractor_1.element)(protractor_1.by.css('a[href="http://automationpractice.com/index.php?id_product=7&controller=product"]'));
        this.addNumberofUnits = (0, protractor_1.element)(protractor_1.by.className('icon-plus'));
        //selectSize= element(by.name('group_1')).$('[value="M"]');
        this.color = (0, protractor_1.element)(protractor_1.by.name('Green'));
        this.addToCart = (0, protractor_1.element)(protractor_1.by.name('Submit'));
        this.selectSizeElm = (0, protractor_1.element)(protractor_1.by.id('group_1'));
    }
    selectSize(sizeNumber) {
        if (true) {
            var options = this.selectSizeElm.all(protractor_1.by.tagName('option'))
                .then(function (options) {
                options[sizeNumber].click();
            });
        }
    }
    pickTheProduct() {
        this.selectProduct.click();
        this.addNumberofUnits.click();
        protractor_1.browser.sleep(5000);
        this.selectSize(2);
        protractor_1.browser.sleep(5000);
        this.color.click();
        this.addToCart.click();
    }
}
exports.addItemToTheCart = addItemToTheCart;
