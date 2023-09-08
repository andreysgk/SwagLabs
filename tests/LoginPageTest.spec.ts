import { test, expect } from './BaseTest';

    test('Log In, standard_user', async({pageManager})=>{
        await pageManager.loginPage.Locators.UserName.fill("standard_user")
        await pageManager.loginPage.Locators.Password.fill("secret_sauce")
        await pageManager.loginPage.Buttons.Login.click()
        await expect(pageManager.productsPage.Locators.Title).toBeVisible()
    })

    test('Log In, unknown user', async({pageManager})=>{
        await pageManager.loginPage.Locators.UserName.fill("standard_user")
        await pageManager.loginPage.Locators.Password.fill("abrakadabra")
        await pageManager.loginPage.Buttons.Login.click()
        await expect(pageManager.loginPage.Locators.Error).toBeVisible()
        await expect(pageManager.loginPage.Locators.Error).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })

    test('Log In, locked_out_user', async({pageManager})=>{
        await pageManager.loginPage.Locators.UserName.fill("locked_out_user")
        await pageManager.loginPage.Locators.Password.fill("secret_sauce")
        await pageManager.loginPage.Buttons.Login.click()
        await expect(pageManager.loginPage.Locators.Error).toBeVisible()
        await expect(pageManager.loginPage.Locators.Error).toHaveText("Epic sadface: Sorry, this user has been locked out.")
    })