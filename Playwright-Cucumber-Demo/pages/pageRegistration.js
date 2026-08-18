class RegistrationPage {

    constructor(page) {
        this.page = page;

        this.firstname = page.getByPlaceholder('First Name');
        this.lastname = page.getByPlaceholder('Last Name');
        this.email = page.getByPlaceholder('Email');
        this.password = page.getByPlaceholder('Password');
        this.confirmPassword = page.getByPlaceholder('Confirm Password');
        this.termsCheckbox = page.getByRole('checkbox', { name: 'I accept the terms and conditions' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.confirmationMessage = page.getByText('Registration successful');
        this.errorMessage = page.locator('[class*="error"]');
    }

    async openRegistrationPage() {
        await this.page.goto('https://www.saucedemo.com/register');
    }

    async enterFirstname(firstname) {
        await this.firstname.fill(firstname);
    }

    async enterLastname(lastname) {
        await this.lastname.fill(lastname);
    }

    async enterEmail(email) {
        await this.email.fill(email);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async confirmPasswordField(password) {
        await this.confirmPassword.fill(password);
    }

    async acceptTermsAndConditions() {
        await this.termsCheckbox.check();
    }

    async rejectTermsAndConditions() {
        await this.termsCheckbox.uncheck();
    }

    async clickRegister() {
        await this.registerButton.click();
    }

    async verifyConfirmationMessage() {
        await this.confirmationMessage.waitFor();
    }

    async getErrorMessage() {
        await this.errorMessage.waitFor();
        return await this.errorMessage.textContent();
    }

    async verifyErrorMessage(expectedMessage) {
        const errorText = await this.getErrorMessage();
        return errorText.includes(expectedMessage);
    }

    async isRegistrationPageDisplayed() {
        await this.registerButton.waitFor();
    }
}

module.exports = { RegistrationPage };
