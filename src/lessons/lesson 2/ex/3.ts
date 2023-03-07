/*{
type Cat = {
    name: string,
    age: number,
    isExistTail: boolean
}


const cat: Cat = { name: 'Barsik', age: 11, isExistTail: true }
console.log(cat.age)
console.log(cat.isExistTail)
console.log(cat.name)

}
*/
{
    type Students = {
        name: string,
        age: number
    }

    const arrayStudents: Students[] = []

    arrayStudents[0] = {
        name: 'Petr',
        age: 18,
    }

    arrayStudents[1] =
    {
        name: 'Vasya',
        age: 19,
    }
    arrayStudents[2] =
    {
        name: 'Kolya',
        age: 20,
    }
    arrayStudents[3] =
    {
        name: 'Masha',
        age: 21,
    }


    //console.log(arrayStudents.name)

    function output(arrayStudents: Students): string {
        return `${arrayStudents.name}`
    }

    //console.log(output(arrayStudents[1]))

    //console.log(output(forEach(arrayStudents)))

//for (const names of arrayStudents) {}
//console.log(arrayStudents)
//arrayStudents.forEach(elarr => console.log(elarr))
arrayStudents.forEach(names => console.log(output(names)))


}
