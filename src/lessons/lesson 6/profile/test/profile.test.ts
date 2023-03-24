
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'
import { EmailsSettingsPage } from '../page-object/EmailsSettings.page'
import { LoginPage } from '../../login/page-object/Login.page'
import { ProfileSettingsPage } from "../page-object/ProfileSettings.page"

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

        it.only('The message "Please upload a picture smaller than 1 MB" should appear.', async () => {
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