import { BasePage } from './BasePage';

export class CheckoutYourInformationPage extends BasePage{
    Locators = {
        TitleCheckout: this.page.locator("//span[text()='Checkout: Your Information']"),
    };

    InputFields = {
        FirstName: this.page.locator("//input[@id='first-name']"),
        LastName: this.page.locator("//input[@id='last-name']"),
        ZipPostalCode: this.page.locator("//input[@id='postal-code']"),
    };

    Buttons = {
        Continue: this.page.locator("//input[@id='continue']"),
    }

    async checkoutInfo(firstName, lastName, zipPostalCode){
        await this.InputFields.FirstName.fill(firstName);
        await this.InputFields.LastName.fill(lastName);
        await this.InputFields.ZipPostalCode.fill(zipPostalCode);
    };


}