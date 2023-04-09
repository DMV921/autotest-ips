import { AxiosResponse } from "axios"
import { LOGIN, REPO } from "../../../../../../../credential2"
import { MASK } from "../../../../../lesson 10/issues/data/issues.data"
import { createIssuesData } from "../../../data/issues.data"
import { IssuesModel, createIssuesModel } from "../../../model/issues.model"
import { CreateIssueResponse, GetIssueResponse, GetIssuesResponse, IssueAPIService, } from "../../../../common/api/api-service/IssueAPIService"

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
        
        const getResponseIssues: AxiosResponse<GetIssuesResponse[]> = await IssueAPIService.getIssues(
            LOGIN,
            REPO,
        )
        expect(getResponseIssues.data.find((element) => element.number === response.data.number)).not.toEqual(undefined)
        expect(getResponseIssues.data.find((element) => element.title === response.data.title)).not.toEqual(undefined)
        expect(getResponseIssues.data.find((element) => element.html_url === response.data.html_url)).not.toEqual(undefined)
        expect(getResponseIssues.data.find((element) => element.id === response.data.id)).not.toEqual(undefined)
        expect(getResponseIssues.data.find((element) => element.state === 'open')).not.toEqual(undefined)
    })

    it('issue should be not created (410 code)', async () => {
        const repOffIssues: string = 'offCreateIssues'
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(
            LOGIN,
            repOffIssues,
            issue
        )
        expect(response.status).toEqual(410)
    })

    it('issue should be not created (404 code)', async () => {
        const ownerPrivate: string = 'lokiju-test'
        const repoPrivate: string = 'private-repo'
        const response: AxiosResponse<CreateIssueResponse> = await IssueAPIService.createIssue(
            ownerPrivate,
            repoPrivate,
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