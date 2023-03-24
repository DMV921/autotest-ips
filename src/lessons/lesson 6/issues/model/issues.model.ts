import { IssuesData } from "../data/issues.data"

export type IssuesModel = {
    
    task1: string
    taskEdit: string
    testTask: string
    taskCommentary: string
    closeTask: string
    taskLabel1: string
    taskDelete: string
    taskBlockComment: string
    taskAddPicture: string
}

export function createIssuesModel(data: IssuesData): IssuesModel {
    return {  
        task1: data.task1,
        taskEdit: data.taskEdit,
        testTask: data.testTask,
        taskCommentary: data.taskCommentary,
        closeTask: data.closeTask,
        taskLabel1: data.taskLabel1,
        taskDelete: data.taskDelete,
        taskBlockComment: data.taskBlockComment,
        taskAddPicture: data.taskAddPicture
    }
}
