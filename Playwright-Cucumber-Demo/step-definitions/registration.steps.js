const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/pageLogin');

Given('I open the registration page', async function(){
    await this.page.goto("url");
})

When('I enter firstname {String}', async function(firstname){

await this.enterFirstname(firstname);
})

And('I enter lastname {String}',async function(lastanme){
    await this.enterLastName(lastname);


})
And('And I enter email {String}', async function(email){
await this.enetremail(email);

})