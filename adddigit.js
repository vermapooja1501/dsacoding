const readlinesync = require('readline-sync')
let n = readlinesync.questionInt("enter the number n ");
let sum = 0;
while(n>0){
    r = n%10;
    n = Math.floor(n/10)
    sum = sum+r
    
}
console.log(sum);
