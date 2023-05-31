var readlineSync = require("readline-sync");
let a = readlineSync.question(" enter number  :  ");

a=parseInt(a)

if(a==1)
console.log("sunday");

else if(a==2)
console.log("monday");

else if(a==3)
console.log("tuesday");

else if(a==4)
console.log("wednesday");

else if(a==5)
console.log("thursday");

else if(a==6)
console.log("friday");

else if(a==7)
console.log("saturday");

else
console.log("Invalid Entry");