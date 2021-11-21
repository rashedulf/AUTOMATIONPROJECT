"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProducts = void 0;
const protractor_1 = require("protractor");
class searchProducts {
    constructor() {
        this.textBox = (0, protractor_1.element)(protractor_1.by.id('search_query_top'));
        this.searchIcon = (0, protractor_1.element)(protractor_1.by.name('submit_search'));
    }
    typeProduct() {
        this.textBox.sendKeys("dress");
        this.searchIcon.click();
    }
}
exports.searchProducts = searchProducts;
