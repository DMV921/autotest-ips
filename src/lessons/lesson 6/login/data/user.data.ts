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
    longNameField: string
    longBioField: string
    filePath: string
    filePathBigSize: string

}

const userData: UserData = {

    login: 'DMV921',
    password: 'Gameplay92121',
    email: 'dmvltd1@gmail.com',
    nameField: 'Дмитрий',
    bioField: 'Информация обо мне.',
    emailList: 'dmvltd1@gmail.com',
    pronouns: 'they/them',
    customPronouns: 'Custom',
    srcWithoutAvatar: 'https://avatars.githubusercontent.com/u/104264067?s=400&v=4',
    longNameField: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis do',
    longBioField: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    filePath: 'src/files/placeimg_640_480_any.jpg',
    filePathBigSize: 'src/files/photo_visokogo_razresheniya.jpg'

}

export const badEmail: string = 'fefefe'
export const badPassword: string = '1'

export {
    UserData, userData
}


