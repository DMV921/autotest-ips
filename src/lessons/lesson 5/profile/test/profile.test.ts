
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'
import { LoginPage } from '../page-object/Login.page'
import { MainPage } from "../page-object/Main.page"
import { ProfileSettingsPage } from "../page-object/ProfileSettings.page"


const badEmail: string = 'fefefe'
const badPassword: string = '1'
const nameField: string = 'Дмитрий'
const bioField: string = 'Информация обо мне.'

describe('Profile settings test', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    let profileSettingsPage: ProfileSettingsPage
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





    /*

    it('User will login using login', async () => {
        await loginPage.login(LOGIN, PASSWORD)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('User will login using email', async () => {
        await loginPage.login(EMAIL, PASSWORD)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('Error message should be displayed by login with wrong email', async () => {
        await loginPage.login(badEmail, PASSWORD)
        await mainPage.openUserMenu()
        expect(await mainPage.getUserLoginText()).toEqual(LOGIN)
    })

    it('Error message should be displayed by login with wrong password', async () => {
        await loginPage.login(LOGIN, badPassword)

        await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()
        expect(await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()).toEqual(true)


       })
*/ 
  //  afterEach(async () => {
 //       await browser.reloadSession()

  //  })
})