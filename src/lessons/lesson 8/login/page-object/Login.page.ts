import { ChainablePromiseElement } from 'webdriverio'
import { UserModel } from '../model/user.model'

class LoginPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/login'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async clickLoginButton(): Promise<void> {
        await this.getLoginButton().waitForClickable({
            timeoutMsg: 'Login button was not clickable',
        })
        await this.getLoginButton().click()
    }
// isDisplayed
    public isDisplayedErrorMessege(): Promise<boolean> {
       return this.getErrorMessege().isDisplayed()
    }

    public async login(user: UserModel): Promise<void> {
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed',
        })
        await this.setValueUsernameField(user.login)
        await this.setValuePasswordField(user.password)
        await this.clickLoginButton()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async setValuePasswordField(password: string): Promise<void> {
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Password field was not displayed',
        })
        await this.getPasswordField().setValue(password)
    }

    public async setValueUsernameField(user: string): Promise<void> {
        await this.getLoginField().waitForDisplayed({
            timeoutMsg: 'Login field was not displayed',
        })
        await this.getLoginField().setValue(user)
    }

    private getErrorMessege(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div')
    }

    private getLoginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@type="submit"]')
    }

    private getLoginField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="login_field"]')
    }

    private getPasswordField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="password"]')
    }
}
export {
    LoginPage,
}