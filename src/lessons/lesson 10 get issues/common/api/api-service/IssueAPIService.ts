import { AxiosResponse } from 'axios'
import { CreateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'
import { IssueAPIProvider } from '../api-provider/IssueAPIProvider'
import { IssueAPIDataProvider } from '../api-data-provider/IssueAPIDataProvider'
import { IssuesModel } from '../../../issues/model/issues.model'

type CreateIssueResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string
    number: number
}

type GetIssueResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string,
    number: number
}

type GetIssuesResponse = {
    id: number,
    title: string,
    state: string,
    html_url: string,
    number: number
}

class IssueAPIService {
    public static async getIssue(
        login: string,
        repo: string,
        number: number
    ): Promise<AxiosResponse<GetIssueResponse>> {
        try {
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
            const response: AxiosResponse<GetIssueResponse>
                = await issueAPIProvider.getIssue(
                    login,
                    repo,
                    number
                )
            return response
        } catch (error) {
            throw new Error(`Create issue by model failed ${error}`)
        }
    }

    public static async createIssue(
        login: string,
        repo: string,
        issue: IssuesModel,
    ): Promise<AxiosResponse<CreateIssueResponse>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.getUpdatedIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
            const response: AxiosResponse<CreateIssueResponse>
                = await issueAPIProvider.createIssue(
                    login,
                    repo,
                    data,
                )
            return response
        } catch (error) {
            throw new Error(`Create issue by model failed ${error}`)
        }
    }

    public static async createIssueWithAssignees(
        login: string,
        repo: string,
        issue: IssuesModel,
    ): Promise<AxiosResponse<CreateIssueResponse>> {
        try {
            const data: CreateIssueRequest = IssueAPIDataProvider.getUpdatedCustomIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
            const response: AxiosResponse<CreateIssueResponse>
                = await issueAPIProvider.createIssue(
                    login,
                    repo,
                    data,
                )
            return response
        } catch (error) {
            throw new Error(`Create issue by model failed ${error}`)
        }
    }

    public static async getIssues(
        login: string,
        repo: string,
    ): Promise<AxiosResponse<GetIssuesResponse[]>> {
        try {
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider(false)
            const response: AxiosResponse<GetIssuesResponse[]>
                = await issueAPIProvider.getIssues(
                    login,
                    repo,
                )
            return response
        } catch (error) {
            throw new Error(`Create issue by model failed ${error}`)
        }
    }
}

export {
    IssueAPIService,
    CreateIssueResponse,
    GetIssueResponse,
    GetIssuesResponse
}