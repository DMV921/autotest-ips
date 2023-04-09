import { IssuesModel } from '../../../issues/model/issues.model'

type CreateIssueRequest = {
    title: string,
    body?: string,
    assignee?: string,
    milestone?: string,
    labels?: string[],
    assignees?: string[],
}

class IssueAPIDataProvider {
    public static getUpdatedIssueData(issue: IssuesModel): CreateIssueRequest {
        return {
            title: issue.title,
        }
    }

    public static getUpdatedCustomIssueData(issue: IssuesModel): CreateIssueRequest {
        return {
            title: issue.title,
            assignees: ["1"]
        }
    }
}

export {
    IssueAPIDataProvider,
    CreateIssueRequest,
}