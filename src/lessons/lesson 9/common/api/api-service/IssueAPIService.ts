import { AxiosResponse } from 'axios'
import { UpdateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'
import { IssueAPIProvider } from '../api-provider/IssueAPIProvider'
import { IssueAPIDataProvider } from '../api-data-provider/IssueAPIDataProvider'
import { IssuesModel } from '../../../issues/model/issues.model'

class IssueAPIService {
    
    public static async createIssue(
        issue: IssuesModel,
    ): Promise<AxiosResponse<Response>> {
        try {
            const data: UpdateIssueRequest = IssueAPIDataProvider.getUpdatedIssueData(issue)
            const issueAPIProvider: IssueAPIProvider = new IssueAPIProvider()
            const response: AxiosResponse<Response>
                = await issueAPIProvider.createIssue(data)
            return response
        } catch (error) {
            throw new Error(`Update Issue by model failed ${error}`)
        }
    }
}

export {
    IssueAPIService
}