import { ChainablePromiseElement } from 'webdriverio'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }
    public async login(userEmail: string, userPassword: string): Promise<void> {
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed',
        })
        await this.getLoginField().setValue(userEmail)
        await this.getPasswordField().setValue(userPassword)
        await this.getLoginButton().click()
    }

    public async errorMessege(): Promise<void> {
        await this.getErrorMessege().waitForDisplayed({
            timeoutMsg: 'Error messege was not displayed',
        })
       await this.getErrorMessege().isDisplayed()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }
    private getLoginField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }
    private getPasswordField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }
    private getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }
    private getErrorMessege(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div')
    }

}
export {
    LoginPage,
}