import { LOGIN, EMAIL, PASSWORD } from '../../../credential'
const badEmail: string = 'fefefe'
const badPassword: string = '1'

describe('Login from test', async () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login') 
    })

    it('User will login using login', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })

        await browser.$('//*[@id="login_field"]').setValue(LOGIN) 
        await browser.$('//*[@id="password"]').setValue(PASSWORD)
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()
        await browser.$('//summary//*[contains(@class,"avatar")]').waitForDisplayed({
            timeoutMsg: 'Avatar was not displyed'
        })

        await browser.$('//summary//*[contains(@class,"avatar")]').click()
        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN) //почему не xpath
    })

    it('User will login using email', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })

        await browser.$('//*[@id="login_field"]').setValue(EMAIL) 
        await browser.$('//*[@id="password"]').setValue(PASSWORD)
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()
        await browser.$('//summary//*[contains(@class,"avatar")]').waitForDisplayed({
            timeoutMsg: 'Avatar was not displyed'
        })

        await browser.$('//summary//*[contains(@class,"avatar")]').click()
        expect(await browser.$('//*[@class="css-truncate-target"]').getText()).toEqual(LOGIN)
    })

    // NEGATIVE
    it('Error message should be displayed by login with wrong email', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })

        await browser.$('//*[@id="login_field"]').setValue(badEmail) 
        await browser.$('//*[@id="password"]').setValue(PASSWORD)
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()
        await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()
        expect(await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()).toEqual(true)
    })

    it('Error message should be displayed by login with wrong password', async () => {
        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })

        await browser.$('//*[@id="login_field"]').setValue(LOGIN) 
        await browser.$('//*[@id="password"]').setValue(badPassword)
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })

        await browser.$('//*[@type="submit"]').click()
        await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()
        expect(await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})