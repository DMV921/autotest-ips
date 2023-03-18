
import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential'
import { LoginPage } from '../page-object/Login.page'
import { MainPage } from "../page-object/Main.page"
const badEmail: string = 'fefefe'
const badPassword: string = '1'

describe('Login from', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
    })
    beforeEach(async () => {
        await loginPage.open()
    })

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
        expect(await loginPage.errorMessegeisDisplayed()).toEqual(true)
    })

    it('Error message should be displayed by login with wrong password', async () => {
        await loginPage.login(LOGIN, badPassword)
        expect(await loginPage.errorMessegeisDisplayed()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})