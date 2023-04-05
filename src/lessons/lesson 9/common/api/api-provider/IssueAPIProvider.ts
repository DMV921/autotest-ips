import { LOGIN } from '../../../../../../credential2'
import { UpdateIssueRequest } from '../api-data-provider/IssueAPIDataProvider'
import { GitAPIProvider } from './GitAPIProvider'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

class IssueAPIProvider extends GitAPIProvider {
    
    public createIssue<T>(data: UpdateIssueRequest):
        Promise<AxiosResponse<T>> {
        const apiRequest: AxiosRequestConfig = IssueAPIProvider.configureRequest(
            `/repos/${LOGIN}/Test/issues`,
            'POST',
            this.headers,
            JSON.stringify(data)
        )
        return this.sendRequest(apiRequest)
    }
}

export {
    IssueAPIProvider,
}