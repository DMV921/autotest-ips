import { IssuesPage } from '../page-object/Issues.page'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { createIssuesData, mask } from '../data/issues.data'
import { userData } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { LoginPage } from '../../login/page-object/Login.page'
import { NewIssuePage } from '../page-object/NewIssue.page'
import { EditIssuePage } from '../page-object/EditIssue.page'

const user: UserModel = createUserModel(userData)

describe('Issues test', () => {
    let loginPage: LoginPage
    let issuesPage: IssuesPage
    let issue: IssuesModel
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
        issue = createIssuesModel(createIssuesData(mask))
    })

    it('Issue should be created', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        expect(await editIssuePage.checkIssueTitle()).toEqual(issue.issueTitle)
    })

    it('Comment should be publish', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        await editIssuePage.createComment(issue)
        expect(await editIssuePage.checkCreateComment()).toEqual(issue.commentPublicField)
    })

    it('Issue should be closed', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        await editIssuePage.closeIssue()
        await issuesPage.open()
        expect(await issuesPage.getCloseLabelCheck()).toEqual(true)
    })

    it('Issue should be edited', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        await editIssuePage.editIssue(issue)
        expect(await editIssuePage.getUpdateCommentFrom()).toEqual(issue.commentEditFiled)
    })

    it('Issue should be finded by label', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        await editIssuePage.findByLabel()
        await issuesPage.open()
        expect(await issuesPage.getDocumentationLabelIssue()).toEqual(true)
    })

    it('Issue should be deleted', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        await editIssuePage.deleteIssue()
        expect(await issuesPage.getMessegeAboutSuccessDelete1()).toEqual(true)
    })

    it('Picture should be add in issue', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        await editIssuePage.addPictureEditIssue(issue)
        expect(await editIssuePage.getImage()).toEqual(true)
    })

    it('Comment should be blocked', async () => {
        await issuesPage.clickNewIssueButton()
        await newIssuePage.createIssue(issue)
        await editIssuePage.blockCommentIssue(issue)
        await browser.reloadSession()
        await issuesPage.open()
        await issuesPage.openIssueUnlogin(issue)
        expect(await editIssuePage.getBlockLogo()).toEqual(true)
    })
})