"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItemToTheCart = void 0;
const protractor_1 = require("protractor");
class addItemToTheCart {
    constructor() {
        this.selectProduct = (0, protractor_1.element)(protractor_1.by.css('a[href="http://automationpractice.com/index.php?id_product=7&controller=product"]'));
    }
    pickTheProduct() {
        this.selectProduct.click();
    }
}
exports.addItemToTheCart = addItemToTheCart;
