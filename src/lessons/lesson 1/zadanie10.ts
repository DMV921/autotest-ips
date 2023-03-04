{
    const prompt = require("prompt-sync")({ sigint: true });
    let agev: any = prompt('Введите возраст ', '')
    let ageverification = (age:number) => {
        if (age >= 18)
            console.log('Страница доступна')
        else
            console.log('Страница не доступна')
    };
    ageverification(agev)
}