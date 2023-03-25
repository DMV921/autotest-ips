import { ChainablePromiseElement } from 'webdriverio'
import { RepositoryModel } from '../model/repository.model'

class NewRepositoryPage {
    protected browser: WebdriverIO.Browser
    protected url = 'https://github.com/new'

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }





    public async openCreateNewRepositoryPage(): Promise<void> {
        await this.browser.url(this.url)
    }

   


    public async typeInRepositoryName(repositoy: RepositoryModel): Promise<void> {
        await this.getRepositoryNameField().waitForDisplayed({
            timeoutMsg: 'Name field was not displayed',
        })
        await this.getRepositoryNameField().setValue(repositoy.repositoryname)

        await this.getCreateRepositoryButton().waitForClickable({
            timeoutMsg: 'Button create repository button was not clickable',
        })
        await this.getCreateRepositoryButton().click()
    }

    private getCreateRepositoryButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="new_repository"]/div[5]/button')
    }

    private getRepositoryNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="repository_name"]')
    }


}

export {
    NewRepositoryPage,
}