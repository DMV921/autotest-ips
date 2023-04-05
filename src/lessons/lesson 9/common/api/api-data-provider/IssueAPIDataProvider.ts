import { IssuesModel } from '../../../issues/model/issues.model'

type UpdateIssueRequest = {
    title: string,
    body?: string,
    assignee?: string,
    milestone?: string,
    labels?: Array<any>,
    assignees?: string,
}

class IssueAPIDataProvider {
    
    public static getUpdatedIssueData(issue: IssuesModel): UpdateIssueRequest {
        return {
            title: issue.title,
        }
    }
}

export {
    IssueAPIDataProvider,
    UpdateIssueRequest,
}