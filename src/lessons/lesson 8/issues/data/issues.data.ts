type IssuesData = {

    taskTitle: string
    commentaryEditFiled: string
    commentaryPublicField: string
    filePath: string
}

const createIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}


const publishCommentIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}

const closeTaskIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}

const editTaskIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}


const findByLabelIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}


const deleteIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}

const addPictureIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}

const blockCommentaryIssueData: IssuesData = {

    taskTitle: `${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    commentaryEditFiled: `${getRandomString(5)}`,
    commentaryPublicField: `${getRandomString(5)}`,
    filePath: 'src/files/placeimg_640_480_any.jpg'
}



export {
    IssuesData, createIssueData, publishCommentIssueData, closeTaskIssueData, editTaskIssueData, findByLabelIssueData, deleteIssueData, addPictureIssueData, blockCommentaryIssueData
}



function getRandomString(a: number) {
    let chrs: string = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789'
    var str = ''
    for (var i = 0; i < a; i++) {
        var pos = Math.floor(Math.random() * chrs.length)
        str += chrs.substring(pos, pos + 1)
    }
    return str
}

function getStringTimeStamp() {
    var date = Date.now().toString()
    return date
}


function getRandomNumber(a: number) {
    let chrs: string = '123456789'
    var str = ''
    for (var i = 0; i < a; i++) {
        var pos = Math.floor(Math.random() * chrs.length)
        str += chrs.substring(pos, pos + 1)
    }
    return str
}