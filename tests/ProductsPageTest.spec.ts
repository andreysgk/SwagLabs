import { test, expect } from './BaseTest';

    test('Inventory_details_large_size', async({pageManager})=>{
        await pageManager.loginPage.Locators.UserName.fill("standard_user")
        await pageManager.loginPage.Locators.Password.fill("secret_sauce")
        await pageManager.loginPage.Buttons.Login.click()
        await expect(pageManager.productsPage.Locators.Title).toBeVisible()
        await pageManager.productsPage.Locators.ElementLabsBackpack.click()
        await expect(pageManager.productsPage.Locators.LargeInventoryDetails).toHaveText("Sauce Labs Backpack")
    })

    test('Сheck that the shopping cart page has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.Locators.UserName.fill("standard_user")
        await pageManager.loginPage.Locators.Password.fill("secret_sauce")
        await pageManager.loginPage.Buttons.Login.click()
        await expect(pageManager.productsPage.Locators.Title).toBeVisible()
        await pageManager.productsPage.Locators.IсonCart.click()
        await expect(pageManager.cartPage.Locators.YourCart).toBeVisible()
    })

    test('Items to cart', async({pageManager})=>{
        await pageManager.loginPage.Locators.UserName.fill("standard_user")
        await pageManager.loginPage.Locators.Password.fill("secret_sauce")
        await pageManager.loginPage.Buttons.Login.click()
        await expect(pageManager.productsPage.Locators.Title).toBeVisible()
    })