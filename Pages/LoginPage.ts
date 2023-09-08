import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    Locators = {
        UserName: this.page.locator("//input[@name='user-name']"),
        Password: this.page.locator("//input[@name='password']"),
        Error: this.page.locator("//div[@class='error-message-container error']/h3"),
    }

    Buttons = {
        Login: this.page.locator("//input[@name='login-button']"),
    }

    constructor(page){
        super(page)
    }
}