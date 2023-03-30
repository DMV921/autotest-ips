import { IssuesData } from "../data/issues.data"

 type IssuesModel = {
    taskTitle: string
    commentaryEditFiled: string
    commentaryPublicField: string
    filePath: string
}

 function createIssuesModel(data: IssuesData): IssuesModel {
    return { 
        taskTitle: data.taskTitle,// переименовать в title
        commentaryEditFiled: data.commentaryEditFiled, //commentEditFiled
        commentaryPublicField: data.commentaryPublicField,
        filePath: data.filePath
    }
}

export {// c новой сроки
    IssuesData, IssuesModel, createIssuesModel //IssueData не должен экспортится здесь
}
