import { BasePage } from './BasePage';

export class CartPage extends BasePage{
    Locators = {
        TitleYourCart: this.page.locator('"Your Cart"'),
        LabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
    };

    Buttons = {
        Checkout: this.page.locator("//button[@id='checkout']"),
    };

    constructor(page){
        super(page)
    };
}