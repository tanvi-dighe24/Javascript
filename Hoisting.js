// ! Hoisting : js default behaviour of moving all the declarations to the top of the current scope
// var user   let age    const address

// console.log(user);  //undefined
// // console.log(age);  //ref err
// // console.log(address);  //ref err

// var user = 'ram'
// let age = 28
// const address = "bng"

// document.writeln("Have a great sleep")
// console.log("hiiiiiii");

// // Decalartion
// var a
// // Initialization
 a = 100
// // Re-initialization
 a = 800
// //  Re-declaration
 var a 
 console.log(a);

// // Decalartion
// let b
// // Initialization
b = 700
// // Re-initialization
b = 8000
// //  Re-declaration
let b
console.log(b);

// // Decalartion and Initialization
const c = 90
// // Re-initialization
c = 20
// //  Re-declaration
const c = 80
console.log(c);
