import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential2'
import { NewRepositoryPage } from '../page-object/NewRespository.page'
import { createRepositoryModel, RepositoryModel } from '../model/repository.model'
import { repositoryData } from '../data/repository.data'
import { IssuesPage } from '../page-object/Issues.page'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { addPictureIssueData, blockCommentaryIssueData, closeTaskIssueData, createIssueData, deleteIssueData, editTaskIssueData, findByLabelIssueData, publishCommentIssueData } from '../data/issues.data'
import { userData } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { LoginPage } from '../../login/page-object/Login.page'

const repository: RepositoryModel = createRepositoryModel(repositoryData)
const user: UserModel = createUserModel(userData)
const issueCreate: IssuesModel = createIssuesModel(createIssueData)
const issuePublishComment: IssuesModel = createIssuesModel(publishCommentIssueData)
const issueCloseTask: IssuesModel = createIssuesModel(closeTaskIssueData)
const issueEditTask: IssuesModel = createIssuesModel(editTaskIssueData)
const issueFindLabel: IssuesModel = createIssuesModel(findByLabelIssueData)
const issueDelete: IssuesModel = createIssuesModel(deleteIssueData)
const issueAddPicture: IssuesModel = createIssuesModel(addPictureIssueData)
const issueBlockCommentary: IssuesModel = createIssuesModel(blockCommentaryIssueData)

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
        await issuesPage.openIssuesPage()
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

    it('Commentary should be blocked', async () => {
        await issuesPage.blockCommentTask(issueBlockCommentary)
        await browser.reloadSession()
        await issuesPage.openIssuesPage()
        await issuesPage.openIssueUnlogin()
        expect(await issuesPage.getBlockLogo()).toEqual(true)
    })
})