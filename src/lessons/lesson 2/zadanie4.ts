{
    type Students = {
        name: string,
        age: number
    }

    const arrayStudents = [

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
    interface arrayStudents {
        name: string;
        age: number;
        
      }
    console.log(arrayStudents)

   // function output(arrayStudents: Students): string {
 //       return `${arrayStudents.name}`
 //   }

  //  console.log(output(arrayStudents.name))

}