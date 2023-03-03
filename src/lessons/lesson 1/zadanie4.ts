{
    const prompt = require("prompt-sync")({ sigint: true });
    let legalAge: any
    let age: any = prompt('Введите возраст ', '')
    legalAge = age >= 18 ? console.log('Страница доступна') : console.log('Страница не доступна')

}
