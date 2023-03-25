import { ChainablePromiseElement } from 'webdriverio'
import { UserModel } from '../../login/model/user.model'

class ProfileSettingsPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }
    
    public async clickUpdateProfileButton(): Promise<void> {
        await this.getUpdateProfileButton().waitForClickable({
            timeoutMsg: 'Update profile button was not clickable'
        })
        await this.getUpdateProfileButton().click()
    }
  
    public getBioLength(): Promise<string> {
        return this.getBioField().getValue()
    }

    public getCustomUserPronouns(): Promise<string> {
        return this.getPronounsCustom().getValue()
    }
    
    public getNewAvatar(): Promise<string> {
        return this.getAvatarsrc().getAttribute('src')
    }

    public getUserBioText(): Promise<string> {
        return this.getBioField().getValue()
    }
    
    public getUserEmail(): Promise<string> {
        return this.getProfileEmailList().getValue()
    }

    public getUserNameText(): Promise<string> {
        return this.getNameField().getValue()
    }
    
    public getUserPronouns(): Promise<string> {
        return this.getPronouns().getValue()
    }
    
    public isDisplayedMessegeLongName(): Promise<boolean> {
        return this.getMessegeLongName().isDisplayed()
    }

    public isDisplayedMessegeTooBig(): Promise<boolean> {
        return this.getMessegeTooBig().isDisplayed()
    }

    public async openProfilePage(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async showHiddenFileInput(browser: WebdriverIO.Browser): Promise<void> {
        await browser.execute(() => {
            const htmlElement = document.querySelector('[type="file"]') as HTMLElement
            htmlElement.style.cssText = 'display:block !important; opacity: 1; position: inherit;'
        })
    }

    public async updateBioField(userBio: UserModel): Promise<void> {
        await this.setValueBioField(userBio.bioField)
        await this.clickUpdateProfileButton()
    }

    public async setValueBioField(userBio: string): Promise<void> {
        await this.getBioField().waitForDisplayed({
            timeoutMsg: 'Bio field was not displayed',
        })
        await this.getBioField().setValue(userBio)
    }
    
    public async updateCustomPronounsList(userCustomPronouns: UserModel): Promise<void> {
        await this.getPronouns().waitForClickable({
            timeoutMsg: 'Pronouns list was not clickable',
        })
        await this.getPronouns().selectByIndex(4)
        await this.getPronounsCustom().setValue(userCustomPronouns.customPronouns)
        await this.clickUpdateProfileButton()
    }
    
    public async updateEmailList(): Promise<void> {
        await this.getProfileEmailList().waitForClickable({
            timeoutMsg: 'Email list was not clickable',
        })
        await this.getProfileEmailList().selectByIndex(1)
        await this.clickUpdateProfileButton()
    }
//дописать функцию button click с wait
    public async updateNameField(userName: UserModel): Promise<void> {
        await this.getNameField().waitForDisplayed({
            timeoutMsg: 'Name field was not displayed',
        })
        await this.getNameField().setValue(userName.nameField)
        await this.clickUpdateProfileButton()
    }

    public async setValueNameField(userName: string): Promise<void> {
        await this.getNameField().waitForDisplayed({
            timeoutMsg: 'Name field was not displayed',
        })
        await this.getNameField().setValue(userName)
    }

    public async updatePronounsList(): Promise<void> {
        await this.getPronouns().waitForClickable({
            timeoutMsg: 'Pronouns list was not clickable',
        })
        await this.getPronouns().selectByIndex(1)
        await this.clickUpdateProfileButton()
    }
    
    public async uploadBigSizeFile(filePath: UserModel): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(filePath.filePathBigSize)
        await this.getInputFile().setValue(file)
        await this.getMessegeTooBig().waitForDisplayed({
            timeoutMsg: 'The message "Please upload a picture smaller than 1 MB" was not displayed',
        })
    }

    public async uploadFile(filePath: UserModel): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        await this.showHiddenFileInput(this.browser)
        const file: string = await this.browser.uploadFile(filePath.filePath)
        await this.getInputFile().setValue(file)
        await this.getInputFileSetButton().waitForClickable({
            timeoutMsg: 'Set new profile picture button was not clickable',
        })
        await this.getInputFileSetButton().click()
        await this.clickUpdateProfileButton()
    }

    private getAvatarsrc(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="settings-frame"]/div[2]/div[2]/dl/dd/div/details/summary/img')
    }

    private getBioField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_bio"]')
    }

    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }

    private getInputFileSetButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="avatar-crop-form"]/div[2]/button/span')
    }

    private getMessegeLongName(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div/div/div')
    }

    private getMessegeTooBig(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="settings-frame"]/div[2]/div[2]/dl/dd/form/file-attachment/div/div[2]')
    }

    private getNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
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

    private getUpdateProfileButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@class="Button-label"]')
    }
}

export {
    ProfileSettingsPage,
}