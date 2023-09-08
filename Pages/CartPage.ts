import { BasePage } from './BasePage';

export class CartPage extends BasePage{
    Locators = {
        YourCart: this.page.locator('.title'),
        LabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
    };

    Buttons = {
        Checkout: this.page.locator("//button[@id='checkout']"),
    }

    constructor(page){
        super(page)
    }
}