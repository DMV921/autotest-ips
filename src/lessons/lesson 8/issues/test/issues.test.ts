import { NewRepositoryPage } from '../page-object/NewRespository.page'
import { createRepositoryModel, RepositoryModel } from '../model/repository.model'
import { repositoryData } from '../data/repository.data'
import { IssuesPage } from '../page-object/Issues.page'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { createIssuesData, mask } from '../data/issues.data'
import { userData } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { LoginPage } from '../../login/page-object/Login.page'

const repository: RepositoryModel = createRepositoryModel(repositoryData)
const user: UserModel = createUserModel(userData)
const issueCreate: IssuesModel = createIssuesModel(createIssuesData(mask))
const issuePublishComment: IssuesModel = createIssuesModel(createIssuesData(mask))
const issueCloseTask: IssuesModel = createIssuesModel(createIssuesData(mask))
const issueEditTask: IssuesModel = createIssuesModel(createIssuesData(mask))
const issueFindLabel: IssuesModel = createIssuesModel(createIssuesData(mask))
const issueDelete: IssuesModel = createIssuesModel(createIssuesData(mask))
const issueAddPicture: IssuesModel = createIssuesModel(createIssuesData(mask))
const issueBlockCommentary: IssuesModel = createIssuesModel(createIssuesData(mask))
const blockCommentaryIssue: IssuesModel = createIssuesModel(createIssuesData(mask))

describe('Issues test', () => {
    let loginPage: LoginPage
    let newRepositoryPage: NewRepositoryPage
    let issuesPage: IssuesPage

    before(async () => {
        loginPage = new LoginPage(browser)
        newRepositoryPage = new NewRepositoryPage(browser)
        issuesPage = new IssuesPage(browser)
        await loginPage.open()
        await loginPage.login(user)
        // await newRepositoryPage.openCreateNewRepositoryPage()
        // await newRepositoryPage.typeInRepositoryName(repository)
    })

    beforeEach(async () => {
        await issuesPage.openIssuesPage()//переименовать в open()
    })

    it('Task should be created', async () => {
        await issuesPage.createFirst(issueCreate)
        expect(await issuesPage.checkIssueTitle()).toEqual(issueCreate.taskTitle)
    })

    it('Comment should be publish', async () => {
        await issuesPage.createCommentary(issuePublishComment)
        expect(await issuesPage.checkCreateCommentary()).toEqual(issuePublishComment.commentaryPublicField)
    })

    it('Task should be closed', async () => {
        await issuesPage.closeTask(issueCloseTask)
        expect(await issuesPage.getCloseLabelCheck()).toEqual(true)
    })

    it('Task should be edited', async () => {
        await issuesPage.editTask(issueEditTask)
        expect(await issuesPage.getUpdateCommentFrom()).toEqual(issueEditTask.commentaryEditFiled)
    })

    it('Task should be finded by label', async () => {
        await issuesPage.findByLabel(issueFindLabel)
        expect(await issuesPage.getDocumentationLabelTask()).toEqual(true)
    })

    it('Task should be deleted', async () => {
        await issuesPage.deleteTask(issueDelete)
        expect(await issuesPage.getMessegeAboutSuccessDelete1()).toEqual(true)
    })

    it('Picture should be add in task', async () => {
        await issuesPage.addPictureEditTask(issueAddPicture)
        expect(await issuesPage.getImage()).toEqual(true)
    })

    it.only('Commentary should be blocked', async () => {
        await issuesPage.blockCommentTask(issueBlockCommentary)
        await browser.reloadSession()
        await issuesPage.openIssuesPage()
        await issuesPage.openIssueUnlogin(issueBlockCommentary)
        expect(await issuesPage.getBlockLogo()).toEqual(true)
    })
})