import { IssuesPage } from '../page-object/Issues.page'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { createIssuesData, MASK, ReasonForLocking } from '../data/issues.data'
import { userData } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { LoginPage } from '../../login/page-object/Login.page'
import { NewIssuePage } from '../page-object/NewIssue.page'
import { EditIssuePage } from '../page-object/EditIssue.page'

const user: UserModel = createUserModel(userData)

describe('Issues test', () => {
    let issue: IssuesModel
    let loginPage: LoginPage
    let issuesPage: IssuesPage
    let newIssuePage: NewIssuePage
    let editIssuePage: EditIssuePage

    before(async () => {
        loginPage = new LoginPage(browser)
        issuesPage = new IssuesPage(browser)
        newIssuePage = new NewIssuePage(browser)
        editIssuePage = new EditIssuePage(browser)
        await loginPage.open()
        await loginPage.login(user)
    })

    beforeEach(async () => {
        await issuesPage.open()
        issue = createIssuesModel(createIssuesData(MASK))
        await issuesPage.createNewIssue()
        await newIssuePage.setIssueTitle(issue)
        await newIssuePage.clickSubmitNewIssue()
    })

    it('Issue should be created', async () => {
        await issuesPage.createNewIssue()
        await newIssuePage.setIssueTitle(issue)
        await newIssuePage.clickSubmitNewIssue()
        expect(await editIssuePage.getIssueTitle()).toEqual(issue.title)
    })

    it('Comment should be publish', async () => {
        await issuesPage.createNewIssue()
        await newIssuePage.setIssueTitle(issue)
        await newIssuePage.clickSubmitNewIssue()
        await editIssuePage.createComment(issue)
        expect(await editIssuePage.checkCreateComment()).toEqual(issue.commentPublicField)
    })

    it('Issue should be closed', async () => {
        await issuesPage.createNewIssue()
        await newIssuePage.setIssueTitle(issue)
        await newIssuePage.clickSubmitNewIssue()
        await editIssuePage.closeIssue()
        await issuesPage.open()
        expect(await issuesPage.getCloseLabelCheck()).toEqual(true)
    })

    it('Issue should be edited', async () => {
        await issuesPage.createNewIssue()
        await newIssuePage.setIssueTitle(issue)
        await newIssuePage.clickSubmitNewIssue()
        await editIssuePage.editIssue(issue)
        expect(await editIssuePage.getCommentText()).toEqual(issue.commentPrivateFiled)
    })

    it('Issue should be finded by label', async () => {
        await issuesPage.createNewIssue()
        await newIssuePage.setIssueTitle(issue)
        await newIssuePage.clickSubmitNewIssue()
        // найти задачу
        await editIssuePage.findByLabel()
        await issuesPage.open()
        expect(await issuesPage.getDocumentationLabelIssue()).toEqual(true)
    })

    it('Issue should be deleted', async () => {
        await issuesPage.createNewIssue()
        await newIssuePage.setIssueTitle(issue)
        await newIssuePage.clickSubmitNewIssue()
        await editIssuePage.deleteIssue()
        expect(await issuesPage.isDisplayedMessegeAboutSuccessDelete()).toEqual(true)
        // можно проверить наличие в списке
    })

    it.only('Picture should be add in issue', async () => {
        await editIssuePage.addPictureEditIssue(issue)
        expect(await editIssuePage.getImage()).toEqual(true)
    })

    it.only('Comment should be blocked', async () => {
        
        //await issuesPage.openIssue(issue)
        await editIssuePage.blockCommentIssue(ReasonForLocking.SPAM)
        await browser.reloadSession()
        await issuesPage.open()
        await issuesPage.openIssueUnlogin(issue)
        expect(await editIssuePage.getBlockLogo()).toEqual(true)
    })
})