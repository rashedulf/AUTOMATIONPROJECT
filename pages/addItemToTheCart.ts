import { browser, by, element } from "protractor";

export class addItemToTheCart{

     selectProduct= element(by.css('a[href="http://automationpractice.com/index.php?id_product=7&controller=product"]'));
     addNumberofUnits= element(by.className('icon-plus'));
     //selectSize= element(by.name('group_1')).$('[value="M"]');
     color= element(by.name('Green'));
     addToCart= element(by.name('Submit'));

     
     pickTheProduct(){
         this.selectProduct.click();
         this.addNumberofUnits.click();
         browser.sleep(20000);
         //this.selectSize.click();
         //browser.sleep(20000);
         this.color.click();
         this.addToCart.click();
         
         
     }

}