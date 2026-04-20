// ! Function : block of code used to perform particular task and it will be executed when we call it 

// console.log("Hello Functions");
// let a = 10

// // parameters : variables declared at the time of function declaration
// function demo(n1,n2){
//     // console.log(n1+n2);
//     return n1+n2;
// }

// demo(2,4)
// console.log(demo(10,30));
// console.log(demo(90,70));
// arguments : values passed to the function parameters at the time of function calling


// ! Types of functions

// ! Named function/function declaration : The function with name
// function task(){
//     console.log("Hello I am function");
// }

// task()

// ! Anonymous function : The function without name
// ! Function with expression/functional expression : Passing whole anonymous function as a value to a variable is known as function with expression.
// first-class function/first-citizen function : function as avlue to a variable
// let greet = function (user){
//     console.log(`Hello ${user}`);
// }

// greet("Tanvi")

// ! Immediate invoking function (IIF) : The function which shd be called immediately after the declaration
// (function(){
//     console.log("Hello I am IIF");
// })()

// ! Nested function : The function inside one more function
// function parent(){
//     let pland = 30
//     let phouse = 10
//     console.log(`Parent properties : ${pland} acers land and ${phouse} houses`);
//     function child(){
//         let cland = 10
//         let chouse = 2
//         console.log(`Child properties : ${cland+pland} acers land and ${chouse} houses`);
//         // lexical scoping / scope chaining : ability of js to access a variable in outer scope whenever it is not there in the current scope
//         // closure : stores only required data
//     }
//     // child() 
//     return child
// }
// parent()()     //javascript currying : Calling nested function along with parent by using one more paranthesis


// ! Arrow function : reduces syntax
// syntax : (parameters)=>{code}

// let add = (x,y) =>  x+y 
// console.log(add(2,4));

// let task = () => {
//     let uname = 'ram'
//     let address = "bng"
//     return `Hello I am ${uname} from ${address}`
// }

// console.log(task());

// ! Higher order function(HOF) : The function which takes one more function as a value to its parameter or returns new function
// using HOF we can perform multiple tasks

// ! Callback function : The function which is passed as an argument to one more function

// function operation(a,b,task){
//     let res = task(a,b)
//     return res;
// }

// let add = operation(2,3,function(x,y){return x+y})
// console.log(add);

// let mul = operation(4,6,(p,q)=> p*q )
// console.log(mul);

// ! Generator function : to generate the values using yield keyword
// function* generate(){
//     yield 122;
//     yield "manu";
//     yield true;
//     yield 5683.89;
//     yield 357
// }

// let res = generate()
// // console.log(http://res.next().value);
// // console.log(http://res.next().value);
// // console.log(http://res.next().value);
// // console.log(http://res.next().value);
// // console.log(http://res.next().value);

// for(let i=1;i<=5;i++){
//     console.log(http://res.next().value);
// }

// ! Design a function with two parameters -- username and address
// print : Hello I am username from address
// take user input
