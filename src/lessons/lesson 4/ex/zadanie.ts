import { LOGIN, EMAIL, PASSWORD } from '../../../credential'
const badEmail: string = 'fefefe'
describe('Login from test', async () => {

    beforeEach(async () => {
        await browser.url('https://github.com/login') //await это пока не выполнится что в скобках
    })

    it('user should be log in', async () => {

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })

        await browser.$('//*[@id="login_field"]').setValue(LOGIN) //у этого элемента вызываем функцю setValue
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

    afterEach(async () => {
        await browser.reloadSession()

    })

})


describe('Login from test use email', async () => {

    beforeEach(async () => {
        await browser.url('https://github.com/login') //await это пока не выполнится что в скобках
    })

    it('user should be log in', async () => {

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })

        await browser.$('//*[@id="login_field"]').setValue(EMAIL) //у этого элемента вызываем функцю setValue
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


    afterEach(async () => {
        await browser.reloadSession()

    })


})


describe('Login from test use bad login', async () => {

    beforeEach(async () => {
        await browser.url('https://github.com/login') //await это пока не выполнится что в скобках
    })

    it.only('should be error messege', async () => {

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Login field was not displayed'
        })

        await browser.$('//*[@id="login_field"]').setValue(badEmail) //у этого элемента вызываем функцю setValue
        await browser.$('//*[@id="password"]').setValue(PASSWORD)
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'

        })
        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable'
        })
        //*[@id="js-flash-container"]
        await browser.$('//*[@type="submit"]').click()

        await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()

        expect(await browser.$('//*[@id="js-flash-container"]/div').isDisplayed()).toEqual(true)
    })


        afterEach(async () => {
            await browser.reloadSession()

        })


    })