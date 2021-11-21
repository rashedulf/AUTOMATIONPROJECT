import { browser, by, element } from "protractor";

export class searchProducts{

     textBox= element(by.id('search_query_top'));
     searchIcon= element(by.name('submit_search'));

     typeProduct(){
         this.textBox.sendKeys("dress");
         this.searchIcon.click();
         
     }

}