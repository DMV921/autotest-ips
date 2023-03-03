{
    const prompt = require("prompt-sync")({ sigint: true });
    let temperature: any = prompt('Введите температуру', '')

    if (temperature < -10) {
        console.log('Очень холодно')
    } else if (temperature >= -10 && temperature < 10) {
        console.log('Холодно')
    } else if (temperature >= 10 && temperature < 18) {
        console.log('Прохладно')
    } else if (temperature >= 18 && temperature < 25) {
        console.log('Тепло')
    } else if (temperature >= 25) {
        console.log('Жарко')
    }

}