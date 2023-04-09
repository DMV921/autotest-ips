import { AxiosResponse } from "axios"
import { LOGIN, REPO } from "../../../../../../../credential2"
import { MASK } from "../../../../../lesson 9/issues/data/issues.data"
import { IssueAPIProvider } from "../../../../common/IssueAPIProvider"
import { createIssuesData } from "../../../data/issues.data"
import { IssuesModel, createIssuesModel } from "../../../model/issues.model"
import { CreateIssueResponse } from "../../../../common/IssuesAPIService"

const fetch = require('node-fetch')
describe(`/repos/${LOGIN}/${REPO}/issues`, () => {

    let issue: IssuesModel
    beforeEach(async () => {
        issue = createIssuesModel(createIssuesData(MASK))
    })

    it('issue should be created', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
        const response: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.create(

            LOGIN,
            REPO,
            {
                title: issue.title,
            },
        )
        const getResponse: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.getIssue(

            LOGIN,
            REPO,
            response.data.number
        )
        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual('open')
        const responseUrl: Response = await fetch(response.data.html_url)
        expect(responseUrl.status).toEqual(200)
        expect(response.status).toEqual(201)
        expect(getResponse.status).toEqual(200)
    })

    const owner: string = 'dDAdada111'    
    const rep:string = 'offCreateIssues'

    it('issue should be not created (410 code)', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)

        const response2: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.create(

            owner,
            rep,
            {
                title: issue.title,
            },
        )

        expect(response2.status).toEqual(410)
        // expect(response.data.title).toEqual(issue.title)
        // expect(response.data.state).toEqual('open')
        // const responseUrl: Response = await fetch(response.data.html_url)
        // expect(responseUrl.status).toEqual(200)
        // expect(response.status).toEqual(201)
    })

   let owner3: string = 'lokiju-test'  
   let  private3: string = 'private-repo'

    it('issue should be not created (404 code)', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)

        const response3: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.create(

            owner3,
            private3,
            {
                title: issue.title,
            },
        )

        expect(response3.status).toEqual(404)
        // expect(response.data.title).toEqual(issue.title)
        // expect(response.data.state).toEqual('open')
        // const responseUrl: Response = await fetch(response.data.html_url)
        // expect(responseUrl.status).toEqual(200)
        // expect(response.status).toEqual(201)
    })

    it('issue should be not created (422 code)', async () => {
        const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)

        const response7: AxiosResponse<CreateIssueResponse> = await issueAPIProvider.create(

            LOGIN,
            REPO,
            {
                title: '111',
                labels: ['аываы'],
                assignees: ["1"],
            },
        )

        expect(response7.status).toEqual(422)
        // expect(response.data.title).toEqual(issue.title)
        // expect(response.data.state).toEqual('open')
        // const responseUrl: Response = await fetch(response.data.html_url)
        // expect(responseUrl.status).toEqual(200)
        // expect(response.status).toEqual(201)
    })


})