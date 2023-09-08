import { expect, test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { ProductsPage } from "../Pages/ProductsPage";
let page;
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage();
        await page.goto('https://www.saucedemo.com/');
    });

    test('Log In, standard_user', async()=>{
        let loginPage = new LoginPage(page);
        let productsPage = new ProductsPage(page);
        await loginPage.Locators.UserName.fill("standard_user")
        await loginPage.Locators.Password.fill("secret_sauce")
        await loginPage.Button.Login.click()
        await expect(productsPage.Locators.Title).toBeVisible()
    })

    test.only('Log In, unknown user', async()=>{
        let loginPage = new LoginPage(page);
        await loginPage.Locators.UserName.fill("standard_user")
        await loginPage.Locators.Password.fill("abrakadabra")
        await loginPage.Button.Login.click()
        await expect(loginPage.Locators.Error).toBeVisible()
        await expect(loginPage.Locators.Error).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })

    test('Log In, locked_out_user', async()=>{
        let loginPage = new LoginPage(page);
        await loginPage.Locators.UserName.fill("locked_out_user")
        await loginPage.Locators.Password.fill("secret_sauce")
        await loginPage.Button.Login.click()
        await expect(loginPage.Locators.Error).toBeVisible()
        await expect(loginPage.Locators.Error).toHaveText("Epic sadface: Sorry, this user has been locked out.")
    })

