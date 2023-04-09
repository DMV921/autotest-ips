import { IssuesPage } from '../page-object/Issues.page'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { createIssuesData, MASK, ReasonForLocking } from '../data/issues.data'
import { userData } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { LoginPage } from '../../login/page-object/Login.page'
import { NewIssuePage } from '../page-object/NewIssue.page'
import { EditIssuePage } from '../page-object/EditIssue.page'
import { IssueAPIService } from '../../common/api/api-service/IssueAPIService'

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

    describe('Issue should be created', () => {
        before(async () => {
            await issuesPage.open()
            issue = createIssuesModel(createIssuesData(MASK))
            await issuesPage.createNewIssue()
            await newIssuePage.setIssueTitle(issue)
            await newIssuePage.clickSubmitNewIssue()
        })

        it('Should be updated', async () => {
            expect(await editIssuePage.getIssueTitle()).toEqual(issue.title)
        })
    })

    describe('Issues test', () => {
        beforeEach(async () => {
            await issuesPage.open()
            issue = createIssuesModel(createIssuesData(MASK))
            await IssueAPIService.createIssue(issue)
            await issuesPage.open()
            await issuesPage.openIssue(issue)
        })

        it('Comment should be publish', async () => {
            await editIssuePage.createComment(issue)
            expect(await editIssuePage.getTextCreateComment()).toEqual(issue.commentPublicField)
        })

        it.only('Issue should be closed', async () => {
            await editIssuePage.closeIssue()
            await issuesPage.open()
            await issuesPage.openClosedIssuesList()
            expect(await issuesPage.getCloseLabelCheck()).toEqual(true)
            expect(await issuesPage.isExistIssue(issue)).toEqual(true)
        })

        it('Issue should be edited', async () => {
            await editIssuePage.editIssue(issue)
            expect(await editIssuePage.getCommentText()).toEqual(issue.commentPrivateFiled)
        })

        it('Issue should be finded by label', async () => {
            await editIssuePage.setLabel()
            await issuesPage.open()
            await issuesPage.openLabelInList()
            expect(await issuesPage.getDocumentationLabelIssue()).toEqual(true)
            expect(await issuesPage.isExistIssue(issue)).toEqual(true)
        })

        it('Issue should be deleted', async () => {
            await editIssuePage.deleteIssue()
            expect(await issuesPage.isDisplayedMessegeAboutSuccessDelete()).toEqual(true)
            expect(await issuesPage.isExistIssue(issue)).toEqual(false)
        })

        it('Picture should be add in issue', async () => {
            await editIssuePage.addPictureEditIssue(issue)
            expect(await editIssuePage.getImage()).toEqual(true)
        })

        it('Comment should be blocked', async () => {
            await editIssuePage.blockCommentIssue(ReasonForLocking.SPAM)
            await browser.reloadSession()
            await issuesPage.open()
            await issuesPage.openIssue(issue)
            expect(await editIssuePage.getBlockLogo()).toEqual(true)
        })
    })
})