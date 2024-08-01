const readlineSync = require("readline-sync")
let n = readlineSync.questionInt("enter the number  ");
a = 0;
b = 1;
for(i=1;i<n; i++){
     c = a+b;
     a=b;
     b=c;

}console.log(c);
