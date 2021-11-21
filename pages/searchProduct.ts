import { browser, by, element } from "protractor";

export class searchProducts{

     textBox= element(by.id('search_query_top'));
     searchIcon= element(by.className('.btn btn-default.button-search'));

     typeProduct(){
         this.textBox.sendKeys("dress");
         this.searchIcon.click();
         browser.sleep(30000);
     }

}