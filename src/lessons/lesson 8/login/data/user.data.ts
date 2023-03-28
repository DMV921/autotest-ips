import { LOGIN, EMAIL, PASSWORD } from '../../../../../credential2'

type UserData = {

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

const userData: UserData = {

    login: `${LOGIN}`,
    password: `${PASSWORD}`,
    email: 'ds8054296@gmail.com',
    nameField: `nameField-${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    bioField: `bioField-${getRandomString(5)}-${getStringTimeStamp()}-${getRandomNumber(5)}`,
    emailList: 'dmvltd1@gmail.com',
    pronouns: 'they/them',
    customPronouns: 'Custom',
    srcWithoutAvatar: 'https://avatars.githubusercontent.com/u/104264067?s=400&v=4',
    filePath: 'src/files/placeimg_640_480_any.jpg',

}

export const badPassword: string = '1'
export const badEmail: string = 'fefefe'
export const longNameField: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis do'
export const longBioField: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
export const filePathBigSize: string = '/src/files/photo_visokogo_razresheniya.jpg'

export {
    UserData, userData
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