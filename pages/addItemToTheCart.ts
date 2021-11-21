import { browser, by, element } from "protractor";

export class addItemToTheCart{

     selectProduct= element(by.css('a[href="http://automationpractice.com/index.php?id_product=7&controller=product"]'));
     
     pickTheProduct(){
         this.selectProduct.click();
         
     }

}