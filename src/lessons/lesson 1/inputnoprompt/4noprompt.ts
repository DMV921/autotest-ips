import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const temperature: any = await rl.question('Введите температуру ');


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

rl.close();


