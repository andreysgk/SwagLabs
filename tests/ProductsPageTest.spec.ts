import { test, expect } from './BaseTest';

    test('Inventory details large size', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.Title).toBeVisible();
        await pageManager.productsPage.Locators.ElementLabsBackpack.click();
        await expect(pageManager.productsPage.Locators.LargeInventoryDetails).toHaveText('Sauce Labs Backpack');
    })

    test('Сheck that the shopping cart page has opened successfully', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.Title).toBeVisible();
        await pageManager.productsPage.Locators.IсonCart.click();
        await expect(pageManager.cartPage.Locators.YourCart).toBeVisible();
    })

    test.only('Labs Backpack to cart and checkout', async({pageManager})=>{
        await pageManager.loginPage.logIn('standard_user', 'secret_sauce');
        await expect(pageManager.productsPage.Locators.Title).toBeVisible();
        await pageManager.productsPage.Buttons.AddToCartLabsBackpack.click();
        await expect(pageManager.productsPage.Buttons.Remove).toHaveText('Remove');
        await pageManager.productsPage.Locators.IсonCart.click();
        await expect(pageManager.cartPage.Locators.YourCart).toHaveText('Your Cart')
        await expect(pageManager.cartPage.Locators.LabsBackpack).toHaveText('Sauce Labs Backpack');
        await pageManager.cartPage.Buttons.Checkout.click();
        await expect(pageManager.checkoutYourInformationPage.Locators.TitleCheckout).toHaveText('Checkout: Your Information');
        await pageManager.checkoutYourInformationPage.checkoutInfo('Andrew', 'Zaits', '212013');
        await pageManager.checkoutYourInformationPage.Buttons.Continue.click();
        await expect(pageManager.checkoutOverviewPage.Locators.Tittle).toHaveText('Checkout: Overview');
        //not finished
    })