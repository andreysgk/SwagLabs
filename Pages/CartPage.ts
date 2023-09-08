import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    Locators = {
        YourCart: this.page.locator(".title")
    }


    constructor(page){
        super(page)
    }

}