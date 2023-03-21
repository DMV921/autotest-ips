import { ChainablePromiseElement } from 'webdriverio'

class ProfileSettingsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }
    //Name
    public async nameField(userName: string): Promise<void> {
        await this.getNameField().waitForDisplayed({
            timeoutMsg: 'Name field was not displayed',
        })
        await this.getNameField().setValue(userName)
        await this.getUpdateProfileButton().click()
    }
    public getUserNameText(): Promise<string> {
        return this.getNameField().getValue()
    }
    //Bio
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
    //Email
    public async emailList(): Promise<void> {
        await this.getProfileEmailList().waitForClickable({
            timeoutMsg: 'Email list was not clickable',
        })
        await this.getProfileEmailList().selectByIndex(1)
        await this.getUpdateProfileButton().click()
    }
    public getUserEmail(): Promise<string> {
        return this.getProfileEmailList().getValue()
    }
    //Pronouns
    public async pronounsList(): Promise<void> {
        await this.getPronouns().waitForClickable({
            timeoutMsg: 'Pronouns list was not clickable',
        })
        await this.getPronouns().selectByIndex(1)
        await this.getUpdateProfileButton().click()
    }
    public getUserPronouns(): Promise<string> {
        return this.getPronouns().getValue()
    }
    //Custom pronoun
    public async customPronounsList(userCustomPronouns: string): Promise<void> {
        await this.getPronouns().waitForClickable({
            timeoutMsg: 'Pronouns list was not clickable',
        })
        await this.getPronouns().selectByIndex(4)
        await this.getPronounsCustom().setValue(userCustomPronouns)
        await this.getUpdateProfileButton().click()
    }
    public getCustomUserPronouns(): Promise<string> {
        return this.getPronounsCustom().getValue()
    }
    //Picture
    public async showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
        await browser.execute(() => {
            const htmlElement = document.querySelector('[type="file"]') as HTMLElement
            htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
        })
    }
    public async uploadFile(filePath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(filePath)
        await this.getInputFile().setValue(file)
        await this.getInputFileSetButton().waitForClickable({
            timeoutMsg: 'Set new profile picture button was not clickable',
        })
        await this.getInputFileSetButton().click()
        await this.getUpdateProfileButton().click()
    }
    public getNewAvatar(): Promise<string> {
        return this.getAvatarsrc().getAttribute('src')
    }
    //Negative
    //Name
    public messegeLongName(): Promise<boolean> {
        return this.getMessegeLongName().isDisplayed()
    }
    //Bio
    public getBioLength(): Promise<string> {
        return this.getBioField().getValue()
    }
    //Picture
    public async uploadBigSizeFile(filePath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(filePath)
        await this.getInputFile().setValue(file)
        await this.getMessegeTooBig().waitForDisplayed({
            timeoutMsg: 'The message "Please upload a picture smaller than 1 MB" was not displayed',
        })
    }
    public messegeTooBig(): Promise<boolean> {
        return this.getMessegeTooBig().isDisplayed()
    }
    //OpenProfilePage
    public async openProfilePage(): Promise<void> {
        await this.browser.url(this.url)
    }
    private getNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }
    private getBioField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }
    private getProfileEmailList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_email"]')
    }
    private getPronouns(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns_select"]')
    }
    private getPronounsCustom(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_pronouns"]')
    }
    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }
    private getInputFileSetButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="avatar-crop-form"]/div[2]/button/span')
    }
    private getAvatarsrc(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="settings-frame"]/div[2]/div[2]/dl/dd/div/details/summary/img')
    }
    private getMessegeLongName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div/div/div')
    }
    private getMessegeTooBig(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="settings-frame"]/div[2]/div[2]/dl/dd/form/file-attachment/div/div[2]')
    }
    private getUpdateProfileButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="edit_user_104264067"]/div/p[2]/button')
    }
}
export {
    ProfileSettingsPage,
}