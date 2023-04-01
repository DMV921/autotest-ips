import { ChainablePromiseElement } from 'webdriverio'
import { IssuesModel } from '../model/issues.model'
import { LOGIN } from '../../../../../credential'

class EditIssuePage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}/Test/issues`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async addPictureEditIssue(issues: IssuesModel): Promise<void> {
        await this.getEditIssueMenu().click()
        await this.getEditButton().click()
        const file: string = await this.browser.uploadFile(issues.filePath)
        await this.getInputFile().setValue(file)
        await browser.pause(8000)//Посмотреть можно ли избавиться от паузы, паузу нужно сделать меньше
        await this.getUpdateComment().click()
        await this.getUpdateCommentField().waitForDisplayed({
            timeoutMsg: 'Comment field was not displayed',
        })
        await this.getIMG().waitForDisplayed({
            timeoutMsg: 'Image was not displayed',
        })
    }

    public async blockCommentIssue(issues: IssuesModel): Promise<void> { // таски переименовать в issue
        await this.getLockConversation().click()
        await this.getSeletcReason().selectByIndex(1)// подумать над использованием enum
        await this.getLockConversationOnThis().waitForClickable({
            timeoutMsg: 'Lock conversation button was not clickable',
        })
        await this.getLockConversationOnThis().click()
    }

    public checkCreateComment(): Promise<string> {
        return this.getComment().getText()
    }

    public checkIssueTitle(): Promise<string> {
        return this.getIssueTitle().getText()
    }

    public async closeIssue(): Promise<void> {
        await this.getCloseIssueButtony().click()
    }

    public async createComment(issues: IssuesModel): Promise<void> {
        await this.getCommentField().setValue(issues.commentPublicField)
        await this.getCommentButton().click()
    }

    public async deleteIssue(): Promise<void> {
        await this.getDeleteButton().click()
        await this.confirmDeleteButton().waitForClickable({
            timeoutMsg: 'Confirm delete button was not clickable',
        })
        await this.confirmDeleteButton().click()
    }

    public async editIssue(issues: IssuesModel): Promise<void> {
        await this.getEditIssueMenu().click()
        await this.getEditButton().click()
        await this.getEditField().setValue(issues.commentEditFiled)
        await this.getUpdateComment().click()
    }

    public async findByLabel(): Promise<void> {
        await this.getLabelsButton().click()
        await this.getDocumentationButton().click()
        await this.getLabelsButton().click()
    }

    public async getBlockLogo(): Promise<boolean> {
        await this.getOcticon().waitForDisplayed({
            timeoutMsg: 'Block comments label was not displayed',
        })
        return this.getOcticon().isDisplayed()
    }

    public getImage(): Promise<boolean> {
        return this.getIMG().isDisplayed()
    }

    public async getUpdateCommentFrom(): Promise<string> {
        await this.getUpdateCommentField().waitForDisplayed({
            timeoutMsg: 'Edit issue was not displayed',
        })
        return this.getUpdateCommentField().getText()
    }

    public async uploadFile(filePath: string): Promise<void> {
        await this.getInputFile().waitForExist({
            timeoutMsg: 'File input field was not exist',
        })
        const file: string = await this.browser.uploadFile(filePath)
        await this.getInputFile().setValue(file)
    }

    private confirmDeleteButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//button[@name="verify_delete"]')
    }

    private getCloseIssueButtony(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@class="js-form-action-text"]')
    }

    private getCommentButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-new-comment-form-actions"]//*[@class="btn-primary btn"]')
    }

    private getComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//p[@dir="auto"]')
    }

    private getCommentField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_comment_field"]')
    }

    private getDeleteButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//strong[normalize-space()="Delete issue"]')
    }

    private getDocumentationButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[normalize-space()="Improvements or additions to documentation"]') //посмотреть другой xpath убрать цифры
    }

    private getEditButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//details-menu/button[2]')//посмотреть другой xpath
    }

    private getEditField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//form/div/div[1]/file-attachment/div/text-expander/slash-command-expander/textarea')
    }

    private getEditIssueMenu(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary/*[@class="Button-content"]//*[name()="svg"]')
    }

    private getIMG(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//img[@alt="placeimg_640_480_any"]')//посмотреть другой xpath, то есть передавать имя в метод
    }

    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }

    private getIssueTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-discussion-header"]/div[1]/div/h1/bdi')//посмотреть другой xpath
    }

    private getLabelsButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary[normalize-space()="Labels"]')
    }

    private getLockConversation(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//strong[normalize-space()="Lock conversation"]')//посмотреть другой xpath
    }

    private getLockConversationOnThis(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//button[normalize-space()="Lock conversation on this issue"]')//посмотреть другой xpath
    }

    private getOcticon(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[@class="TimelineItem-badge color-fg-on-emphasis color-bg-emphasis"]//*[name()="path"]')
    }

    private getSeletcReason(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//select[@id="unlock-reason"]')
    }

    private getUpdateComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//form/div/div[2]/div/button[2]/span/span')
    }

    private getUpdateCommentField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//p[@dir="auto"]')
    }
}

export {
    EditIssuePage,
}

//отдельные пейдж обж