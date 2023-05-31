var readlineSync = require("readline-sync");
let a = readlineSync.question(" number of elements  :  ");

let box= []

for(b=0;b<a;b++){
    box[b]= readlineSync.question(" element " , b , " :" );
}
console.log(box);

for(b=0;b<a;b++){
    if(box[b]%2==0)
    console.log(box[b]);
}