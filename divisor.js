const readlinesync = require('readline-sync')
function threedivisor () {
    let n = readlinesync.questionInt("enter the number n ")
    let count = 1;
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            count += 1
        }
    }
    if (count!== 3) {
        console.log("true");
    } else {
        console.log("false");
    }

}
threedivisor()