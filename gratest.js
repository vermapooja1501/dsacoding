const readlineSync = require("readline-sync")
let n = readlineSync.questionInt("enter size array ")
let arr = [];
for (i = 0; i < n; i++) {
    arr[i] = readlineSync.questionInt("enter the element")
}
let max = arr[0]
let min = arr[0];
for (i = 0; i < n; i++) {
    if (max > arr[i]) {
        max = arr[i]
    } else {
        min = arr[i]
    }
    if (max > min) {
        num = max;
        den = min;
    } else {
        num = min;
        den = max;
    }
    while (den !== 0) {
        r = num % den;
        num = den;
        den = r;
    }
}
console.log(num);
