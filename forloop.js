//For Loops
//for(let i = 0; i<=10; i++){
//    console.log("hi");
//}

 for (let i = 0; i<=10; i++){
     console.log("hi");
 }

for(let i = 0; i<1000; i++){
   console.log(i);
}

 for(let i = 100; i>12; i--){
     console.log(i);
 }

 for(let i = 100; i<=300; i++){
    if (i % 2 ==0){
        console.log(i);
     }

 }

 let sum = 0;
 for(let i = 100; i<=300; i++){
     sum +=i;
 }
 console.log(sum);

let sum = 0;
for(let i = 0; i<=100; i++){
    if (i % 2 ==0){
        sum +=i
    }

}
console.log(`sum: ${sum}`);