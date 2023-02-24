const readline= require('readline-sync');

let answer =readline.question("what day is it\nYour answer:");
console.log(answer);

let username = realine.question("enter username: ");
let password = readline.question("enter password: ");
if (password == "abc"){
    console.log('welcome ${username}');
}else{
    console.log("invalid");
}

let curremtprice = readline.question("Enter current price: ");
let originalPrice = readline.question("Enter original price: ");
let diff=originalPrice-currentPrice;
let discount = (diff/originalPrice).toFixed(2);
console.log('discount: ${discount}');

//Exponents
let base = Number(readline.question("Enter the base: "));
let exp = Number(readline.question("Enter the exponent: "));
let answer2 = base ** exp;
console.log(`${base} to the power of ${exp} = ${answer}`);

//Rounding
console.log(5.7);
console.log(Math.round(5.7));
console.log(5.3);
console.log(Math.round(5.3));
console.log(-5.3);
console.log(Math.round(-5.3));