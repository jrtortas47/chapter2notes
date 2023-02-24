const readline = require('readLine-sync')

//1
let num1 = Number(readLine.question("Enter first number: "));
let num2 = Number(readLine.question("Enter first number: "));
let sum = num1 + num2;
console.log(`${num1} +${num2} = {sum}`);

//2
let num1 = Number(readLine.question("Enter first number: "));
let num2 = Number(readLine.question("Enter first number: "));
let sum = num1 - num2;
console.log(`${num1} - ${num2} = {sum}`);
