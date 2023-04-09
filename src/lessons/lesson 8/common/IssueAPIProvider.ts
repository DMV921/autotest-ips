import { AxiosRequestConfig, AxiosResponse } from "axios";
import { GitAPIProvider } from "../common/GitAPIProvider";
import { CreateIssueRequest } from "./IssueAPIDataProvider";

class IssueAPIProvider extends GitAPIProvider {
    public getIssue<T>(owner: string, repo: string, number: number): Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = IssueAPIProvider.configureRequest(
            `/repos/${owner}/${repo}/issues/${number}`,
            'GET',
            this.headers,
        )
        return this.sendRequest(apiRequest)
    }
    public create<T>(owner: string, repo: string, data:CreateIssueRequest): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = GitAPIProvider.configureRequest(

             `/repos/${owner}/${repo}/issues`,
             'POST',
            this.headers,
            JSON.stringify(data),
        )
return this.sendRequest(config)
    }

}

export {
    IssueAPIProvider,
}