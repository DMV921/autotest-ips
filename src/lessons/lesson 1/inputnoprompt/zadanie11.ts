/*{
    const prompt = require("prompt-sync")({ sigint: true });
    let param: any = prompt('Введите матиматический оператор ', '')


    let callback = function (paramt: string) {

        if (paramt = '*') {
            callback = *
        }


    }

    callback(param)

    function calc(callback, a: number, b: number) {

        a b
    }
    calc()
}

*/

{
    const prompt = require("prompt-sync")({ sigint: true });
    const a = Number(prompt('Введите 1 число ', ''));
    const b = Number(prompt('Введите 2 число ', ''));
    const сallback = (a: number, b: number) => a + b

    function calc(callback: Function, a: number, b: number) {
        return callback(a, b);
    }


    console.log(calc(callback, ))
}
