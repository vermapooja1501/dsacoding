const readlineSync = require("readline-sync")
let n = readlineSync.questionInt("enter the number n ")
let sum = 0;
for (i = 1; i < n; i++) {
    if (n % i == 0) {
        sum = sum + i
    }
}
if (sum == n) {
    console.log("yes")
} else {
    console.log("no");
}
