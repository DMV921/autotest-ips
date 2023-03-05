{
    const prompt = require("prompt-sync")({ sigint: true });
    const a = Number(prompt('Введите 1 число ', ''));
    const b = Number(prompt('Введите 2 число ', ''));
    //let c = String(prompt('Введите операцию (sum, multip, substraction, division)', ''));
    const sum = (a: number, b: number) => a + b
    const multip = (a: number, b: number) => a * b
    const subtraction = (a: number, b: number) => a - b
    const division = (a: number, b: number) => a / b

    function calc(c: number, d: number, callback: Function) {
        console.log(callback(c, d));
    }
    calc(a, b, division)
    // console.log(calc(division, a, b))
}