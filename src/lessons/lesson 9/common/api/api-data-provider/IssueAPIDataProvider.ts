import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from 'axios'
import { UserModel } from '../../../login/model/user.model'
import { UserAPIProvider } from '../api-provider/UserAPIProvider'
import { PERSONAL_TOKEN } from '../../../../../../credential2'
import { getRandomString } from '../../generations.data'
import { IssuesModel } from '../../../issues/model/issues.model'

type UpdateIssueRequest = {
    title: string,
    body?: string,
    assignee?: string,
    milestone?: string,
    labels?: Array<any>,
    assignees?:string,
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