
import { EmailsSettingsPage } from '../page-object/EmailsSettings.page'
import { LoginPage } from '../../login/page-object/Login.page'
import { ProfileSettingsPage } from "../page-object/ProfileSettings.page"
import { LONG_BIO, LONG_NAME, userData, CUSTOM_PRONOUNS, PronounsType, SRC_WITHOUT_AVATAR } from '../../login/data/user.data'
import { UserModel, createUserModel } from '../../login/model/user.model'
import { ProfileInfoPage } from '../page-object/ProfileInfo.page'

const user: UserModel = createUserModel(userData)

describe('Profile settings test', () => {
    let loginPage: LoginPage
    let profileSettingsPage: ProfileSettingsPage
    let emailsSettingsPage: EmailsSettingsPage
    let profileInfoPage: ProfileInfoPage

    before(async () => {
        loginPage = new LoginPage(browser)
        profileSettingsPage = new ProfileSettingsPage(browser)
        emailsSettingsPage = new EmailsSettingsPage(browser)
        profileInfoPage = new ProfileInfoPage(browser)
        await loginPage.open()
        await loginPage.login(user)
    })

    beforeEach(async () => {
        await profileSettingsPage.open()
    })

    describe('Profile settings test', () => {
        it('User name should be updated', async () => {
            await profileSettingsPage.updateNameField(user)
            expect(await profileSettingsPage.getUserNameText()).toEqual(user.name)
            await profileInfoPage.open()
            expect(await profileInfoPage.checkLoginName()).toEqual(user.name)
        })

        it('User biography should be updated', async () => {
            await profileSettingsPage.updateBioField(user)
            expect(await profileSettingsPage.getUserBioText()).toEqual(user.bio)
        })
    
        it('User pronoun should be updated', async () => {
            await profileSettingsPage.updatePronounsList(PronounsType.SHE)
            await profileSettingsPage.clickUpdateProfileButton()
            expect(await profileSettingsPage.getUserPronouns()).toEqual(PronounsType.SHE)
        })

        it('Custom user pronoun should be updated', async () => {
            await profileSettingsPage.updatePronounsList(PronounsType.CUSTOM)
            await profileSettingsPage.updateCustomPronounsField(CUSTOM_PRONOUNS)
            await profileSettingsPage.clickUpdateProfileButton()
            expect(await profileSettingsPage.getCustomUserPronouns()).toEqual(CUSTOM_PRONOUNS)
        })

        it('Photo should be uploaded in profile', async () => {
            await profileSettingsPage.uploadFile(user)
            expect(await profileSettingsPage.getNewAvatar()).not.toEqual(SRC_WITHOUT_AVATAR)
        })
    })

    describe('Negative profile settings test', () => {
        it('A message  about the long name should be appear', async () => {
            await profileSettingsPage.setValueNameField(LONG_NAME)
            await profileSettingsPage.clickUpdateProfileButton()
            expect(await profileSettingsPage.isDisplayedMessegeLongName()).toEqual(true)
            expect(await profileSettingsPage.getUserNameText()).toEqual(user.name)
        })

        it('User biography should be limited 160 characters', async () => {
            await profileSettingsPage.setValueBioField(LONG_BIO)
            await profileSettingsPage.clickUpdateProfileButton()
            expect(await profileSettingsPage.getBioLength()).toHaveLength(160)
        })

        it('The message "Please upload a picture smaller than 1 MB" should appear.', async () => {
            await profileSettingsPage.uploadBigSizeFile()
            expect(await profileSettingsPage.isDisplayedMessegeTooBig()).toEqual(true)
        })
    })

    describe('Email of user', () => {
        before(async () => {
            await emailsSettingsPage.open()
            await emailsSettingsPage.checkcheckBox()
        })

        it('Should be updated', async () => {
            await profileSettingsPage.updateEmailList()
            expect(await profileSettingsPage.getUserEmail()).toEqual(user.email)
        })
    })
})