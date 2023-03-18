import { ChainablePromiseElement } from 'webdriverio'

class ProfileSettingsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }


    public async nameField(userName: string): Promise<void> {
        await this.getNameField().waitForDisplayed({
            timeoutMsg: 'Name field was not displayed',
        })
        await this.getNameField().setValue(userName)
        await this.getUpdateProfileButton().click()
    }
    public async clicknameField(): Promise<void> {
        await (await this.getNameField()).waitForClickable({
            timeoutMsg: 'Name field was not clickable',
        })
        await this.getNameField().click()
    }
    public getUserNameText(): Promise<string> {
        return this.getNameField().getValue()
    }


    public async bioField(userBio: string): Promise<void> {
        await this.getBioField().waitForDisplayed({
            timeoutMsg: 'Bio field was not displayed',
        })
        await this.getBioField().setValue(userBio)
        await this.getUpdateProfileButton().click()
    }
    public getUserBioText(): Promise<string> {
        return this.getBioField().getValue()
    }


    public async openProfilePage(): Promise<void> {
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

    private getNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }

    private getBioField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }

    private getUpdateProfileButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="edit_user_104264067"]/div/p[2]/button')
    }





}
export {
    ProfileSettingsPage,
}