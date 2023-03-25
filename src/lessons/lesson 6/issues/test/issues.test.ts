
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential2'
//import { EmailsSettingsPage } from '../page-object/EmailsSettings.page'
import { LoginPage } from '../../../lesson 5/login/page-object/Login.page'
//import { ProfileSettingsPage } from "../page-object/ProfileSettings.page"
import { NewRepositoryPage } from '../page-object/NewRespository.page'
import { createRepositoryModel, RepositoryModel } from '../model/repository.model'
import { repositoryData } from '../data/repository.data'
import { IssuesPage } from '../page-object/Issues.page'
import { createIssuesModel, IssuesModel } from '../model/issues.model'
import { issuesData } from '../data/issues.data'

const nameField = 'Дмитрий'
const bioField: string = 'Информация обо мне.'
const emailList: string = 'dmvltd1@gmail.com'
const pronouns: string = 'they/them'
const customPronouns: string = 'Custom'
const srcWithoutAvatar: string = 'https://avatars.githubusercontent.com/u/104264067?s=400&v=4'
const longNameField: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis do'
const longBioField: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
const filePath = 'src/files/placeimg_640_480_any.jpg'
const filePathBigSize = 'src/files/photo_visokogo_razresheniya.jpg'
const repository: RepositoryModel = createRepositoryModel(repositoryData)
const issues: IssuesModel = createIssuesModel(issuesData)
const task1: string = 'Task 1'
const taskEdit: string = 'Task Edit'
const testTask: string = 'Test task'
const taskCommentary: string = 'Commentary'
const closeTask: string = 'Close Task'
const taskLabel1: string = 'Task Label 1'
const taskDelete: string = 'Task Delete'
const taskBlockComment: string = 'Task Block Comment'
const taskAddPicture: string = 'Task add picrure'




describe('Issues test', () => {
    let loginPage: LoginPage
    // let profileSettingsPage: ProfileSettingsPage
    // let emailsSettingsPage: EmailsSettingsPage
    let newRepositoryPage: NewRepositoryPage
    let issuesPage: IssuesPage
    //
 let issue1 =Object.values(issues)[1]
 let issue2 =Object.values(issues)[2]
 let issue3 =Object.values(issues)[3]
 let issue4 =Object.values(issues)[4]
 let issue5 =Object.values(issues)[5]
 let issue6 =Object.values(issues)[6]
 let issue7 =Object.values(issues)[7]
 let issue8 =Object.values(issues)[8]
issues.closeTask

    before(async () => {
        loginPage = new LoginPage(browser)
        newRepositoryPage = new NewRepositoryPage(browser)
        issuesPage = new IssuesPage(browser)
        await loginPage.open()
        await loginPage.login(LOGIN, PASSWORD)
        // await newRepositoryPage.openCreateNewRepositoryPage()
        //     await newRepositoryPage.typeInRepositoryName(repository)
    })

    beforeEach(async () => {
        //  await profileSettingsPage.openProfilePage()
        await issuesPage.openIssuesPage()
    })

    it('Task should be created', async () => {
        await issuesPage.createIssue(issue1)
        expect(await issuesPage.checkIssueTitle()).toEqual(issues.task1)
    })

    it('Comment should be publish', async () => {
        await issuesPage.createIssue(issue2)
        await issuesPage.createCommentary(issues)
        expect(await issuesPage.checkCreateCommentary()).toEqual(issues.taskCommentary)
    })

    it('Task should be closed', async () => {
        await issuesPage.createIssue(issues.task1)
        await issuesPage.closeTask()
        expect(await issuesPage.getCloseLabelCheck()).toEqual(true)
    })




    it('Task should be edited', async () => {
        await issuesPage.createIssue(issue4)

        await issuesPage.editTask(issues)
        //expect(await issuesPage.checkIssueTitle()).toEqual(task1)

        expect(await issuesPage.getUpdateCommentFrom()).toEqual(issues.testTask)
    })
//for (let i  of Object.keys(object1)) {
 //   console.log(i)
  
 //   console.log(object1[i])
 // }

    it('Task should be finded by label', async () => {
        await issuesPage.createIssue(issue5)

        await issuesPage.findByLabel()
        //expect(await issuesPage.checkIssueTitle()).toEqual(task1)

        expect(await issuesPage.getDocumentationLabelTask()).toEqual(true)
    })

    it('Task should be deleted', async () => {
        await issuesPage.createIssue(issue6)
        await issuesPage.deleteTask()
        expect(await issuesPage.getMessegeAboutSuccessDelete1()).toEqual(true)
    })

    it('Picture should be add in task', async () => {
        await issuesPage.createIssue(issue7)

        // await issuesPage.addPictureEditTask(testTask)
        //expect(await issuesPage.checkIssueTitle()).toEqual(task1)
        await issuesPage.addPictureEditTask(filePath)
        expect(await issuesPage.getImage()).toEqual(true)
    })



    it('Commentary should be blocked', async () => {
        await issuesPage.createIssue(issue8)
        await issuesPage.blockCommentTask()
        await browser.reloadSession()
        await issuesPage.openIssuesPage()
        await issuesPage.openIssueUnlogin()
        expect(await issuesPage.getBlockLogo()).toEqual(true)
    })






})


/*
describe('Profile settings test', () => {
    let loginPage: LoginPage
    let profileSettingsPage: ProfileSettingsPage
    let emailsSettingsPage: EmailsSettingsPage

    before(async () => {
        loginPage = new LoginPage(browser)
        profileSettingsPage = new ProfileSettingsPage(browser)
        emailsSettingsPage = new EmailsSettingsPage(browser)
        await loginPage.open()
        await loginPage.login(LOGIN, PASSWORD)
    })

    beforeEach(async () => {
        await profileSettingsPage.openProfilePage()
    })

    describe('Profile settings test', () => {
        it('User name should be updated', async () => {
            await profileSettingsPage.updateNameField(nameField)
            expect(await profileSettingsPage.getUserNameText()).toEqual(nameField)
        })

        it('User biography should be updated', async () => {
            await profileSettingsPage.updateBioField(bioField)
            expect(await profileSettingsPage.getUserBioText()).toEqual(bioField)
        })
        
        it('User pronoun should be updated', async () => {
            await profileSettingsPage.updatePronounsList()
            expect(await profileSettingsPage.getUserPronouns()).toEqual(pronouns)
        })

        it('Custom user pronoun should be updated', async () => {
            await profileSettingsPage.updateCustomPronounsList(customPronouns)
            expect(await profileSettingsPage.getCustomUserPronouns()).toEqual(customPronouns)
        })

        it('Photo should be uploaded in profile', async () => {
            await profileSettingsPage.uploadFile(filePath)
            expect(await profileSettingsPage.getNewAvatar()).not.toEqual(srcWithoutAvatar)
        })
    })

    describe('Negative profile settings test', () => {
        it('A message  about the long name should be appear', async () => {
            await profileSettingsPage.updateNameField(longNameField)
            expect(await profileSettingsPage.isDisplayedMessegeLongName()).toEqual(true)
            expect(await profileSettingsPage.getUserNameText()).toEqual(nameField)
        })

        it('User biography should be limited 160 characters', async () => {
            await profileSettingsPage.updateBioField(longBioField)
            expect(await profileSettingsPage.getBioLength()).toHaveLength(160)
        })

        it('The message "Please upload a picture smaller than 1 MB" should appear.', async () => {
            await profileSettingsPage.uploadBigSizeFile(filePathBigSize)
            expect(await profileSettingsPage.isDisplayedMessegeTooBig()).toEqual(true)
        })
    })

    describe('Email of user', () => {
        before(async () => {
            await emailsSettingsPage.openEmailsSettingsPage()
            await emailsSettingsPage.checkcheckBox()
        })

        it('Should be updated', async () => {
            await profileSettingsPage.updateEmailList()
            expect(await profileSettingsPage.getUserEmail()).toEqual(emailList)
        })
    })
})

*/