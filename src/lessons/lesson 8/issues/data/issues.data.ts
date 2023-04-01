import { getRandomString, getRandomNumber, getTimeStamp } from "./generations.data"

type IssuesData = {
    issueTitle: string
    commentEditFiled: string
    commentPublicField: string
    filePath: string
}

function createIssuesData(mask: string): IssuesData {
    return {
        issueTitle: `${getRandomString(5)}-${getTimeStamp()}-${getRandomNumber(5)}`,
        commentEditFiled: `${getRandomString(5)}`,
        commentPublicField: `${getRandomString(5)}`,
        filePath: 'src/files/placeimg_640_480_any.jpg'
    }
}

let mask: string = 'Issue_Test'

export {
    createIssuesData,
    mask,
    IssuesData
}