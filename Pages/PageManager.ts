import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { CartPage } from "./CartPage";
import { ProductsPage } from "./ProductsPage";

export class PageManager{
    page: Page;
    loginPage;
    cartPage;
    productsPage;

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.cartPage = new CartPage(page);
        this.productsPage = new ProductsPage(page);
    }
}