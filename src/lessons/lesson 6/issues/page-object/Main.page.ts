import { ChainablePromiseElement } from 'webdriverio'

class MainPage {
    private browser: WebdriverIO.Browser
    private url = 'https://github.com/login'
    
    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public getUserLoginText(): Promise<string> {
        return this.getUserLogin().getText()
    }

    public async openUserMenu(): Promise<void> {
        await this.getUserAvatar().waitForClickable({
            timeoutMsg: 'User avatar was not clickable',
        })
        await this.getUserAvatar().click()
    }

    public async clickNewButton(): Promise<void> {
        await this.getNewButton().waitForClickable({
            timeoutMsg: 'Button New was not clickable',
        })
        await this.getNewButton().click()
    }

    private getUserAvatar(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary//*[contains(@class,"avatar")]')
    }

    private getUserLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="css-truncate-target"]')
    }

    private getNewButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('/html/body/div[1]/div[6]/div/aside/div/loading-context/div/div[1]/div/h2/a')
    }

}
export {
    MainPage,
}
