const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/pageLogin');

Given('I open the login page', async function () {

    this.loginPage = new LoginPage(this.page);

    await this.loginPage.openLoginPage();
});

When('I enter username {string}', async function (username) {

    await this.loginPage.enterUsername(username);
});

When('I enter password {string}', async function (password) {

    await this.loginPage.enterPassword(password);
});

When('I click on the Login button', async function () {

    await this.loginPage.clickLogin();
});

Then('I should see the Products page', async function () {

    await this.loginPage.verifyProductsPage();
});