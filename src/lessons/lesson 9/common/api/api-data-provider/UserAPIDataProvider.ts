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
            blog: 'https://github.com/',
            name: user.name,
            bio: user.bio,
            email: user.email,
        }
    }

    public static getDeletedUserData(): UpdateUserRequest {
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