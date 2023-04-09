import { AxiosResponse } from "axios"
import { LOGIN, REPO } from "../../../../../../../credential2"
import { MASK } from "../../../../../lesson 10/issues/data/issues.data"
import { createIssuesData } from "../../../data/issues.data"
import { IssuesModel, createIssuesModel } from "../../../model/issues.model"
import { CreateIssueResponse, GetIssueResponse, IssueAPIService } from "../../../../common/api/api-service/IssueAPIService"

const fetch = require('node-fetch')
describe(`/repos/${LOGIN}/${REPO}/issues`, () => {

    let issue: IssuesModel
    beforeEach(async () => {
        issue = createIssuesModel(createIssuesData(MASK))
    })

    it('issue should be created', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(
            LOGIN,
            REPO,
            issue,
        )
        expect(response.status).toEqual(201)
        expect(response.data.title).toEqual(issue.title)
        expect(response.data.state).toEqual('open')
        const responseUrl: Response = await fetch(response.data.html_url)
        expect(responseUrl.status).toEqual(200)
        const getResponse: AxiosResponse<GetIssueResponse> = await IssueAPIService.getIssue(
            LOGIN,
            REPO,
            response.data.number
        )
        expect(getResponse.status).toEqual(200)
        expect(getResponse.data.title).toEqual(issue.title)
        expect(getResponse.data.state).toEqual('open')
        expect(getResponse.data.html_url).toEqual(response.data.html_url)
        expect(getResponse.data.id).toEqual(response.data.id)
    })

    it('issue should be not created (410 code)', async () => {
        const owner: string = 'dDAdada111'
        const rep: string = 'offCreateIssues'
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(
            owner,
            rep,
            issue
        )
        expect(response.status).toEqual(410)
    })

    it('issue should be not created (404 code)', async () => {
        const owner3: string = 'lokiju-test'
        const private3: string = 'private-repo'
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(
            owner3,
            private3,
            issue,
        )
        expect(response.status).toEqual(404)
    })

    it('issue should be not created (422 code)', async () => {
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssueWithAssignees(
            LOGIN,
            REPO,
            issue,
        )
        expect(response.status).toEqual(422)
    })
})