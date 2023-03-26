import { IssuesData } from "../data/issues.data"

 type IssuesModel = {

    taskTitle: string
    commentaryEditFiled: string
    commentaryPublicField: string
    filePath: string
}

 function createIssuesModel(data: IssuesData): IssuesModel {
    return { 
        taskTitle: data.taskTitle,
        commentaryEditFiled: data.commentaryEditFiled,
        commentaryPublicField: data.commentaryPublicField,
        filePath: data.filePath
    }
}

export {
    IssuesData, IssuesModel, createIssuesModel
}
