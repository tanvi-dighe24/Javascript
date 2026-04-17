// ! conditional stmts

let bill = Number(prompt("Enter the bill amount"))  // "6000"
console.log(typeof bill);
if(bill>=500 && bill<=5000){
     let dis = 2/100*bill;
     alert(`Dear customer your payable amount is ${bill-dis}/-`);
 }
// else if(bill>=5001 && bill<=10000){
//     let dis = 5/100*bill;
//     alert(`Dear customer your payable amount is ${bill-dis}/-`);
// }
// else if(bill>=10001){
//     let dis = 10/100*bill;
//     alert(`Dear customer your payable amount is ${bill-dis}/-`);
// }
// else{
//     alert(`Dear customer, discount not applied so your payable amount is ${bill}/-`);
// }


// ! switch
// let n1 = 100
// let n2 = 10
// let op = prompt("Enter operator +,-,*,/")
// switch (op) {
//     case "+": document.writeln(`The result is ${n1+n2}`)
//         break;
//     case "-": document.writeln(`The result is ${n1-n2}`)
//         break;
//     case "*": document.writeln(`The result is ${n1*n2}`)
//         break;
//     case "/": document.writeln(`The result is ${n1/n2}`)
//         break;
//     default: document.writeln("Invalid input")
//         break;
// }

// ! loops -- initialization condition updation

// while : entry controlled loop
let a = 1
while(a<=10){
    document.writeln("Good evening✅");
    a++
}

// do while : exit conrolled loop
let x = 10
do{
    document.writeln("Today was the great day.😍")
    x--
}while(x>0)

// for
for(let i=1;i<=100;i++){
    document.writeln("Good Night💖")
} 

Apr 17 - 8:53 pm
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>
</head>
<body>
    

    <!-- 1.Internal JS -->
    <!-- <script>
        document.writeln("Hello user...!")
        console.log("Good evening")
    </script> -->

    <!-- 2.External JS -->
    <!-- <script src="./app.js"></script> -->
    <script src="./functions.js"></script>
</body>
</html> 
