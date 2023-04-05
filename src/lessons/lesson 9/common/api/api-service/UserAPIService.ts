import { AxiosResponse } from 'axios'
import { UserModel } from '../../../login/model/user.model'
import { UpdateUserRequest, UserAPIDataProvider } from '../api-data-provider/UserAPIDataProvider'
import { UserAPIProvider } from '../api-provider/UserAPIProvider'

class UserAPIService {

    public static async updateAuthenticatedUser(
        user: UserModel,
    ): Promise<AxiosResponse<Response>> {
        try {

            const data: UpdateUserRequest = UserAPIDataProvider.getUpdatedUserData(user)
            const userAPIProvider: UserAPIProvider = new UserAPIProvider()
            const response: AxiosResponse<Response>
                = await userAPIProvider.updateAuthenticatedUser(data)
            return response
        } catch (error) {
            throw new Error(`Update user by model failed ${error}`)
        }
    }

    public static async deleteAuthenticatedUserData(    
    ): Promise<AxiosResponse<Response>> {
        try {
            const data: UpdateUserRequest = UserAPIDataProvider.getDeletedUserData()
            const userAPIProvider: UserAPIProvider = new UserAPIProvider()
            const response: AxiosResponse<Response>
                = await userAPIProvider.updateAuthenticatedUser(data)
            return response
        } catch (error) {
            throw new Error(`Update user by model failed ${error}`)
        }
    }
}

export {
    UserAPIService
}