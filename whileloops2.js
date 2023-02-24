const readLine = require('readline-sync');

let answer = readLine.question("do u want to to quit Y or N ");
while (answer !="Y" && answer !="N"){
    console.log("invalid choice");
    answer = readLine.question ("do u want to to quit Y or N:");
}

console.log(`you typed ${answer}`);