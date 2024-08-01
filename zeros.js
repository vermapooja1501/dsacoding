const readlinesync = require("readline-sync");
function trailingZeroes() {
    let n = readlinesync.questionInt("enter the number ")
let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count+= n;
    }
    return count

} 
console.log(count);

trailingZeroes()
