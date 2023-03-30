
import { getRandomString, getRandomNumber, getTimeStamp } from "./generations.data"

type IssuesData = {
    taskTitle: string
    commentaryEditFiled: string
    commentaryPublicField: string
    filePath: string
}

function createIssuesData(mask: string): IssuesData {
    return {
        taskTitle: `${getRandomString(5)}-${getTimeStamp()}-${getRandomNumber(5)}`,
        commentaryEditFiled: `${getRandomString(5)}`,
        commentaryPublicField: `${getRandomString(5)}`,
        filePath: 'src/files/placeimg_640_480_any.jpg'
    }
}

let mask: string = 'Issue_Test'

export {// c новой строки
    createIssuesData, mask, IssuesData
}