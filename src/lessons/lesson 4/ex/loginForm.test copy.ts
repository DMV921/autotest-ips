import { LOGIN, PASSWORD } from '../../credential'

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