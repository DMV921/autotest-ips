{
    const prompt = require("prompt-sync")({ sigint: true });
    let agev = prompt('Введите возраст ', '')
    var ageverification = function (age: number) {
        if (age >= 18)
            console.log('Страница доступна')
        else
            console.log('Страница не доступна')
    };
    ageverification(agev)
}