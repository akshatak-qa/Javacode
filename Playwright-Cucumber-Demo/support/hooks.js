const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
    await this.init();
});

After(async function (scenario) {

    const screenshotName =
        scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');

    if (scenario.result.status === 'PASSED') {

        await this.page.screenshot({
            path: `screenshots/passed/${screenshotName}.png`,
            fullPage: true
        });

    } else if (scenario.result.status === 'FAILED') {

        await this.page.screenshot({
            path: `screenshots/failed/${screenshotName}.png`,
            fullPage: true
        });
    }

    await this.close();
});