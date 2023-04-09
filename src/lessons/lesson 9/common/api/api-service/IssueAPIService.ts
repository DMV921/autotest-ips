import { AxiosResponse } from 'axios'
import { UpdateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'
import { IssueAPIProvider } from '../api-provider/IssueAPIProvider'
import { IssueAPIDataProvider } from '../api-data-provider/IssueAPIDataProvider'
import { IssuesModel } from '../../../issues/model/issues.model'

type IssueResponse = {
    title: string,
}

class IssueAPIService {
    public static async createIssue(
        issue: IssuesModel,
    ): Promise<AxiosResponse<IssueResponse>> {
        try {
            const data: UpdateIssueRequest = IssueAPIDataProvider.getUpdatedIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<IssueResponse>
                = await issueAPIProvider.createIssue(data)
            return response
        } catch (error) {
            throw new Error(`Create issue by model failed ${error}`)
        }
    }
}

export {
    IssueAPIService
}