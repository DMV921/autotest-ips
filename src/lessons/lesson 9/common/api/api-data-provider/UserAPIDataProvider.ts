import { UserModel } from '../../../login/model/user.model'

type UpdateUserRequest = {
    blog: string,
    name: string,
    bio: string,
    email: string,
}

class UserAPIDataProvider {
    public static getUpdatedUserData(user: UserModel): UpdateUserRequest {
        return {
            blog: '',
            name: '',
            bio: '',
            email: '',
        }
    }
}

export {
    UserAPIDataProvider,
    UpdateUserRequest,
}