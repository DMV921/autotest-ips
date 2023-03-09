{
    type Students = {
        name: string,
        age: number
    }

    const students: Students[] = [
        {
            name: 'Petr',
            age: 18,
        },

        {
            name: 'Vasya',
            age: 19,
        },

        {
            name: 'Kolya',
            age: 20,
        },

        {
            name: 'Masha',
            age: 21,
        }
    ]

    students.forEach(student => console.log(`${student.name}, ${student.age}`))
}