
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'
import { LoginPage } from '../page-object/Login.page'
import { MainPage } from "../page-object/Main.page"
import { ProfileSettingsPage } from "../page-object/ProfileSettings.page"

const nameField: string = 'Дмитрий'
const bioField: string = 'Информация обо мне.'
const emailList: string = 'dmvltd1@gmail.com'
const pronouns: string = 'they/them'
const customPronouns: string = 'Custom'
const srcWithoutAvatar: string = 'https://avatars.githubusercontent.com/u/104264067?s=400&v=4'
const longNameField: string ='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis do'
const longBioField: string ='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'

describe('Profile settings test', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    let profileSettingsPage: ProfileSettingsPage
    const filePath = 'src/files/placeimg_640_480_any.jpg'
    const filePathBigSize = 'src/files/photo_visokogo_razresheniya.jpg'
    
    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
        profileSettingsPage = new ProfileSettingsPage(browser)
        await loginPage.open()
        await loginPage.login(LOGIN, PASSWORD)
    })

    beforeEach(async () => {
        await profileSettingsPage.openProfilePage()
    })

    it('Name of user saved into name field', async () => {
        await profileSettingsPage.nameField(nameField)
        //await profileSettingsPage.clicknameField()
        expect(await profileSettingsPage.getUserNameText()).toEqual(nameField)
    })

    it('Biography of user saved into Bio field', async () => {
        await profileSettingsPage.bioField(bioField)
        expect(await profileSettingsPage.getUserBioText()).toEqual(bioField)
    })

    it('Email of user saved into Public email list', async () => {
        await profileSettingsPage.emailList()
        expect(await profileSettingsPage.getUserEmail()).toEqual(emailList)
    })

    it('Pronoun of user saved into Pronouns list', async () => {
        await profileSettingsPage.pronounsList()
        expect(await profileSettingsPage.getUserPronouns()).toEqual(pronouns)
    })

    it('Pronoun of user saved into custom field', async () => {
        await profileSettingsPage.customPronounsList(customPronouns)
        expect(await profileSettingsPage.getCustomUserPronouns()).toEqual(customPronouns)
    })

    it('Photo should be uploaded in profile', async () => {
        await profileSettingsPage.uploadFile(filePath)
        expect(await profileSettingsPage.getNewAvatar()).not.toEqual(srcWithoutAvatar)
    })
    //NEGATIVE
    it('A message about the long name will appear', async () => {
        await profileSettingsPage.nameField(longNameField)
    
        expect(await profileSettingsPage.messegeLongName()).toEqual(true)
        expect(await profileSettingsPage.getUserNameText()).toEqual(nameField)
    })

    it('Biography field limited to 160 characters', async () => {
        await profileSettingsPage.bioField(longBioField)
        expect(await profileSettingsPage.getBioLength()).toHaveLength(160)
    })

    it.only('The message "Please upload a picture smaller than 1 MB" should appear.', async () => {
        await profileSettingsPage.uploadBigSizeFile(filePathBigSize)
        expect(await profileSettingsPage.messegeTooBig()).toEqual(true)
    })

})