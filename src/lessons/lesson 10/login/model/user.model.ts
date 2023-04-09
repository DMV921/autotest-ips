import { PronounsType, UserData } from "../data/user.data"

 type UserModel = {   
    login: string
    password: string
    email: string
    name: string
    bio: string
    pronouns: PronounsType,
    customPronounceValue?: string,
    filePath: string   
}

 function createUserModel(data: UserData): UserModel {
    return {  
        login: data.login,
        password: data.password,
        email: data.email,
        name: data.name,
        bio: data.bio,
        pronouns: data.pronouns,
        filePath: data.filePath,
        customPronounceValue: data.customPronounsValue,      
    }
}

export {
    UserData, 
    UserModel, 
    createUserModel
}