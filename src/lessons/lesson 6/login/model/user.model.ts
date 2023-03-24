import { UserData } from "../data/user.data"

export type UserModel = {
    
    login: string
    password: string
    email: string
    nameField: string
    bioField: string
    emailList: string
    pronouns: string
    customPronouns: string
    srcWithoutAvatar: string
    longNameField: string
    longBioField: string
    filePath: string
    filePathBigSize: string
}

export function createUserModel(data: UserData): UserModel {
    return {  
       
        login: data.login,
        password: data.password,
        email: data.email,
        nameField: data.nameField,
        bioField: data.bioField,
        emailList: data.emailList,
        pronouns: data.pronouns,
        customPronouns: data.customPronouns,
        srcWithoutAvatar: data.srcWithoutAvatar,
        longNameField: data.longNameField,
        longBioField: data.longBioField,
        filePath: data.filePath,
        filePathBigSize: data.filePathBigSize
    }
}


