class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.productsTitle = page.getByText('Products');
    }

    async openLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async verifyProductsPage() {
        await this.productsTitle.waitFor();
    }
}

module.exports = { LoginPage };