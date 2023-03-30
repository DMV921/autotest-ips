import { UserData } from "../data/user.data"
//убрать лишние поля переименовать и переносы
 type UserModel = {   
    login: string
    password: string
    email: string
    name: string
    bio: string
    pronouns: string
    srcWithoutAvatar: string
    filePath: string   
}
//лишние переносы
 function createUserModel(data: UserData): UserModel {
    return {  
        login: data.login,
        password: data.password,
        email: data.email,
        name: data.name,
        bio: data.bio,
        pronouns: data.pronouns,
        srcWithoutAvatar: data.srcWithoutAvatar,  
        filePath: data.filePath,      
    }
}

export {
    UserData, UserModel, createUserModel
}