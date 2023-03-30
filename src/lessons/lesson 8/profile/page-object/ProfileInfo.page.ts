import { ChainablePromiseElement } from 'webdriverio'
import { LOGIN } from '../../../../../credential2'

class ProfileInfoPage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public checkLoginName(): Promise<string> {
        return this.getLoginName().getText()
    }

    public async openProfileInfoPage(): Promise<void> {
        await this.browser.url(this.url)
    }
    private getLoginName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@class="p-name vcard-fullname d-block overflow-hidden"]')
    }
}
export {
    ProfileInfoPage,
}