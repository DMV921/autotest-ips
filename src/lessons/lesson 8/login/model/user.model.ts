import { UserData } from "../data/user.data"

 type UserModel = {
    
    login: string
    password: string
    email: string
    nameField: string
    bioField: string
    emailList: string
    pronouns: string
    customPronouns: string
    srcWithoutAvatar: string
    filePath: string
    
}

 function createUserModel(data: UserData): UserModel {
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
        filePath: data.filePath,
       
    }
}

export {
    UserData, UserModel, createUserModel
}