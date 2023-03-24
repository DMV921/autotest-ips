function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
/*
const abs="abcdefghijklmnopqrstuvwxyz"
 rs = ""
function getRandomString(length: number): string{

 while (rs.length < length) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    console.log(rs);

}
*/

console.log(pass_gen(6))
console.log(pass_gen(12))
console.log(pass_gen(32))
let len: number = 5
function pass_gen(len:number) {
    let chrs : string= 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
    var str = '';
    for (var i = 0; i < len; i++) {
        var pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos,pos+1);
    }
    return str;
}
