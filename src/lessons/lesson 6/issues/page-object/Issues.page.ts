import { ChainablePromiseElement } from 'webdriverio'
import { RepositoryModel } from '../model/repository.model'

import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { issuesData } from '../data/issues.data'



class IssuesPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/dDAdada111/Test/issues'


    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

//Add pictute
public async addPictureEditTask(filePath: string): Promise<void> {
    // await this.getTaskEdit().click()
    await this.getEditTaskMenu().click()
    // await this.showHiddenEdit(this.browser)
    await this.getEditButton().click()
    const file: string = await this.browser.uploadFile(filePath)
    await this.getInputFile().setValue(file)
   // await this.getEditField().setValue(testtask)
   await browser.pause(10000)

   await this.getUpdateComment().click()

    await this.getUpdateCommentField().waitForDisplayed({
        timeoutMsg: 'Edit task was not displayed',
    })

    await this.getIMG().waitForDisplayed({
        timeoutMsg: 'Edit task was not displayed',
    })

}

    public async blockCommentTask(): Promise<void> {
        await this.getLockConversation().click()

        await this.getSeletcReason().selectByIndex(1)

        await this.getLockConversationOnThis().waitForClickable({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
        await this.getLockConversationOnThis().click()
    }

    public checkCreateCommentary(): Promise<string> {
        return this.getCommentary().getText()
    }

    public checkIssueTitle(): Promise<string> {
        return this.getIssueTitle().getText()
    }

    public async clickNewIssueButton(): Promise<void> {
        await this.getNewIssueButton().waitForClickable({
            timeoutMsg: 'New issue button was not clickable',
        })
        await this.getNewIssueButton().click()
    }

    //close task
    public async closeTask(): Promise<void> {

        await this.getCloseIssueButtony().click()
        await this.openIssuesPage()


        await this.openIssuesPage()
        await this.getCloseIssuesList().click()

        await this.getCloseLabel().waitForDisplayed({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
    }
    //commentary
    public async createCommentary(issues: IssuesModel): Promise<void> {
        await this.getCommentaryField().setValue(issues.taskCommentary)
        await this.getCommentButton().click()
    }
    //create одна задача с тем именем которое передали в задаче
    public async createIssue(issues:string): Promise<void> {
        await this.clickNewIssueButton()
        await this.getIssueTitleField().setValue(issues)

        await this.getSubmitNewIssueButton().waitForClickable({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
        await this.getSubmitNewIssueButton().click()
    }

    public async deleteTask(): Promise<void> {
        await this.getDeleteButton().click()



        await this.confirmDeleteButton().waitForClickable({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
        await this.confirmDeleteButton().click()
    }

    //commentaryowner
    public async editTask(issues: IssuesModel): Promise<void> {
        // await this.getTaskEdit().click()
        await this.getEditTaskMenu().click()
        // await this.showHiddenEdit(this.browser)
        await this.getEditButton().click()
        await this.getEditField().setValue(issues.testTask)
        await this.getUpdateComment().click()

        await this.getUpdateCommentField().waitForDisplayed({
            timeoutMsg: 'Edit task was not displayed',
        })


    }

    //find label
    public async findByLabel(): Promise<void> {
        await this.getLabelsButton().click()
        await this.getDocumentationButton().click()
        await this.getLabelsButton().click()
        await this.openIssuesPage()
        await this.getlabelList().click()
        await this.getlabelListDocumentation().waitForDisplayed({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
        await this.getlabelListDocumentation().click()
        await this.getDocumentationLabelInList().waitForDisplayed({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
    }

    public getBlockLogo(): Promise<boolean> {

        return this.getOcticon().isDisplayed()
    }
    //delete

    public getCloseLabelCheck(): Promise<boolean> {
        return this.getCloseLabel().isDisplayed()
    }

    public getDocumentationLabelTask(): Promise<boolean> {

        return this.getDocumentationLabelInList().isDisplayed()
    }

    //block comment

public getImage(): Promise<boolean> {

    return this.getIMG().isDisplayed()
}

    public getMessegeAboutSuccessDelete1(): Promise<boolean> {

        return this.getMessegeAboutSuccessDelete().isDisplayed()
    }

    public getUpdateCommentFrom(): Promise<string> {
        return this.getUpdateCommentField().getText()

    }

    public async openCreateNewRepositoryPage(): Promise<void> {
        await this.browser.url(this.url)
    }

    public async openIssueUnlogin(): Promise<void> {

        await this.getTaskBlockCommentUnlogin().waitForClickable({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
        await this.getTaskBlockCommentUnlogin().click()

        await this.getOcticon().waitForDisplayed({
            timeoutMsg: 'Submit new issue button was not clickable',
        })
    }

    public async openIssuesPage(): Promise<void> {
        await this.browser.url(this.url)
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

    

    //div[@class="TimelineItem-badge color-fg-on-emphasis color-bg-emphasis"]//*[name()="path"]

    private getCloseIssueButtony(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@class="js-form-action-text"]')
    }

    private getCloseIssuesList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[@class="flex-auto d-none d-lg-block no-wrap"]//a[@class="btn-link "]')
    }

    private getCloseLabel(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@aria-label="Closed issue"]//*[name()="svg"]')
    }

    private getCommentButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-new-comment-form-actions"]/div/div[2]/button')
    }

    private getCommentary(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//p[@dir="auto"]')
    }

    private getCommentaryField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_comment_field"]')
    }

    private getCreateRepositoryButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_repository"]/div[5]/button')
    }

    private getDeleteButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//strong[normalize-space()="Delete issue"]')
    }

    private getDocumentationButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[normalize-space()="Improvements or additions to documentation"]')
    }

    private getDocumentationLabelInList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//span/a[@data-name="documentation"]')
    }

//*[@id="repo-content-pjax-container"]/div/div[2]/div[2]/a
    private getEditButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//details-menu/button[2]')
    }

    private getEditField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//form/div/div[1]/file-attachment/div/text-expander/slash-command-expander/textarea')
    }

    private getEditTaskMenu(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary/*[@class="Button-content"]//*[name()="svg"]')
    }

    private getIMG(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//img[@alt="placeimg_640_480_any"]')
    }

    //*[@id="issue_35"]/div/div[1]/span/svg

    private getInputFile(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('[type="file"]')
    }
//div[@class="flex-auto d-none d-lg-block no-wrap"]//a[@class="btn-link "]

    private getIssueTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="partial-discussion-header"]/div[1]/div/h1/bdi')
    }
//*[@id="partial-new-comment-form-actions"]/div/div[1]/close-reason-selector/div/button

    private getIssueTitleField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_title"]')
    }

    private getLabelsButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary[normalize-space()="Labels"]')
    }

    private getLockConversation(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//strong[normalize-space()="Lock conversation"]')
    }

    private getLockConversationOnThis(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//button[normalize-space()="Lock conversation on this issue"]')
    }

    private getMessegeAboutSuccessDelete(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="js-flash-container"]/div/div/div')
    }

    private getNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//span[@class="d-none d-md-block"]')
    }

    private getOcticon(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[@class="TimelineItem-badge color-fg-on-emphasis color-bg-emphasis"]//*[name()="path"]')
    }

    private getRepositoryNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="repository_name"]')
    }

    private getSeletcReason(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//select[@id="unlock-reason"]')
    }

    private getSubmitNewIssueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_issue"]/div/div/div[1]/div/div[1]/div/div[2]/button')
    }

    private getTaskBlockCommentUnlogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//a[text()="Task Block Comment"]')
    }

    private getTaskEdit(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="issue_2_link"]')
    }

    private getUpdateComment(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//form/div/div[2]/div/button[2]/span/span')
    }

    private getUpdateCommentField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('*//p[@dir="auto"]')
    }

    private getlabelList(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//summary[@title="Label"]//span[@class="dropdown-caret hide-sm"]')
    }

    private getlabelListDocumentation(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//div[normalize-space()="documentation"]')
    }


}

export {
    IssuesPage,
}