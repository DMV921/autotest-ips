import { ChainablePromiseElement } from 'webdriverio'

class EmailsSettingsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/emails'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }
    //Keep my email addresses private
    public async checkBox(): Promise<void> {
        if (await this.getCheckbox().isSelected()) {
            await this.getCheckbox().waitForClickable({
                timeoutMsg: 'Checkbox "Keep my email addresses private" was not clickable',
            })
            await this.getCheckbox().click()
        }
    }
    public async openEmailsSettingsPage(): Promise<void> {
        await this.browser.url(this.url)
    }
    private getCheckbox(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="toggle_visibility"]')
    }
}
export {
    EmailsSettingsPage,
}