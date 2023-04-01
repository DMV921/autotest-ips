import { IssuesData } from "../data/issues.data"

 type IssuesModel = {
    issueTitle: string
    commentEditFiled: string
    commentPublicField: string
    filePath: string
}

 function createIssuesModel(data: IssuesData): IssuesModel {
    return { 
        issueTitle: data.issueTitle,// переименовать в title
        commentEditFiled: data.commentEditFiled, //commentEditFiled
        commentPublicField: data.commentPublicField,
        filePath: data.filePath
    }
}

export {// c новой сроки
    IssuesModel, createIssuesModel //IssueData не должен экспортится здесь
}
