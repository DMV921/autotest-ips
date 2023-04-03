import { IssuesData } from "../data/issues.data"

 type IssuesModel = {
    title: string
    commentEditFiled: string
    commentPublicField: string
    filePath: string
}

 function createIssuesModel(data: IssuesData): IssuesModel {
    return { 
        title: data.title,
        commentEditFiled: data.commentEditFiled, 
        commentPublicField: data.commentPublicField,
        filePath: data.filePath
    }
}

export {
    IssuesModel, createIssuesModel
}
