import { ChainablePromiseElement } from 'webdriverio'
import { IssuesModel } from '../model/issues.model'
import { LOGIN } from '../../../../../credential2'

class IssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = `https://github.com/${LOGIN}/Test/issues`

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

    public async clickNewIssueButton(): Promise<void> {
        await this.getNewIssueButton().waitForClickable({
            timeoutMsg: 'New issue button was not clickable',
        })
        await this.getNewIssueButton().click()
    }
   
    public async getCloseLabelCheck(): Promise<boolean> {
        await this.getCloseIssuesList().click()
        await this.getCloseLabel().waitForDisplayed({
            timeoutMsg: 'Label was not displayed',
        })
        return this.getCloseLabel().isDisplayed()
    }

    public async getDocumentationLabelIssue(): Promise<boolean> {
        await this.getlabelList().click()
        await this.getlabelListDocumentation().waitForDisplayed({
            timeoutMsg: 'Label lisl was not displayed',
        })
        await this.getlabelListDocumentation().click()
        await this.getDocumentationLabelInList().waitForDisplayed({
            timeoutMsg: 'Documentation label was not displayed',
        })
        return this.getDocumentationLabelInList().isDisplayed()
    }

    public async openIssueUnlogin(issueModel: IssuesModel): Promise<void> {
        await this.getIssueBlockCommentUnlogin(issueModel).waitForClickable({
            timeoutMsg: 'Open issue button was not clickable',
        })
        await this.getIssueBlockCommentUnlogin(issueModel).click()
    }

    public getMessegeAboutSuccessDelete1(): Promise<boolean> {
        return this.getMessegeAboutSuccessDelete().isDisplayed()
    }

    public async open(): Promise<void> {
        await this.browser.url(this.url)
    }

    private getNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@class="d-none d-md-block"]')
    }

    private getCloseLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@aria-label="Closed issue"]//*[name()="svg"]')
    }

    private getCloseIssuesList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[@class="flex-auto d-none d-lg-block no-wrap"]//a[@class="btn-link "]')
    }

    private getlabelList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary[@title="Label"]//span[@class="dropdown-caret hide-sm"]')
    }

    private getlabelListDocumentation(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[normalize-space()="documentation"]')
    }

    private getDocumentationLabelInList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//span/a[@data-name="documentation"]')
    }

    private getMessegeAboutSuccessDelete(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div/div/div')
    }

    private getIssueBlockCommentUnlogin(blockCommentaryIssue: IssuesModel): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$(`//a[text()="${blockCommentaryIssue.issueTitle}"]`)
    }
}

export {
    IssuesPage,
}