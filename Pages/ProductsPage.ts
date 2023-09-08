import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage{
    Locators = {
        Title: this.page.locator("//span[@class='title']"),
        ElementLabsBackpack: this.page.locator("//div[text()='Sauce Labs Backpack']"),
        LargeInventoryDetails: this.page.locator("//div[@class='inventory_details_name large_size']"),
        IсonCart: this.page.locator(".shopping_cart_link"),
    }

    Buttons = {
        AddToCartLabsBackpack: this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']"),
    }

}