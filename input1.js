const readLine = require('readline-sync');
//1
let choice = readLine.question("want to hear a joke? y/n: ");
if (choice == "y"){
    console.log("Here's the joke...."``);
}
//2 and 3
let number = Number(readLine.question("Enter number: "));
if (number % 2 == 0){
    console.log("Divisble by 2");
} else {
    console.log("Not divisble by 2");
}
if (number % 3 == 0){
    console.log("Divisble by 3");
} else {
    console.log("Not divisble by 3");
}
if (number % 4 == 0){
    console.log("Divisble by 4");
} else {
    console.log("Not divisble by 4");
}
if (number % 5 == 0){
    console.log("Divisble by 5");
} else {
    console.log("Not divisble by 5");
}
if (number % 6 == 0){
    console.log("Divisble by 6");
} else {
    console.log("Not divisble by 6");
}
//4
let guess = Number(readLine.question("Enter number: "));
if (guess == 35){
    console.log("You won!")
} else if (guess < 35){
    console.log("Too small!")
} else if (guess > 35){
    console.log("Too big!")
} else {
    console.log("invalid");
}
//5 and 6
let cost = Number(readLine.question("Enter meal cost: "));
if (cost <= 0){
    console.log("invalid cost");
} else {
    let tax = cost * .08;
    let newCost = cost + tax
    console.log(`Your cost is ${newCost.toFixed(2)}`);
}
//7 and 8
let mealCost = Number(readLine.question("Enter meal cost: "));
if (mealCost <= 0){
    console.log("invalid cost")
} else {
    let service = readLine.question("Service was (great/good/average). Enter choice: ");
    let tip = 0;
    if (service == "great"){
        tip = mealCost * .20;
    } else if (service == "good"){
        tip = mealCost * .15;
    } else {
        tip = mealCost * .10;
    }
    let newTotal = mealCost + tip;
    console.log(`The tip should be $${newTotal.toFixed(2)}.`);
}
