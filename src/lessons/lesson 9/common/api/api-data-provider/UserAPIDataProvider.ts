import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from 'axios'
import { UserModel } from '../../../login/model/user.model'
import { UserAPIProvider } from '../api-provider/UserAPIProvider'
import { PERSONAL_TOKEN } from '../../../../../../credential2'

type UpdateUserRequest = {
    blog: string,
    name: string,
    bio: string,
    email: string,
    avatar_url:string
}

class UserAPIDataProvider {

    public static getUpdatedUserData(user: UserModel): UpdateUserRequest {
        return {
            blog: 'https://github.com/a-mikhaylov-99',
            name: user.name,
            bio: user.bio,
            email: user.email,
            avatar_url: user.filePath
        }
    }

    public static getDeletedUserData(): UpdateUserRequest {
        return {
            blog: '',
            name: '',
            bio: '',
            email: '',
            avatar_url:''
        }
    }

}

export {
    UserAPIDataProvider,
    UpdateUserRequest,
}