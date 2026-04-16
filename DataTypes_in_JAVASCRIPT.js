// ! Datatypes
// primitive datatypes
// ! string
 let std = 'saloni'
 let address = "hyd"
 let course = `JFD`

// // typeof : to check datatype of variable
console.log(typeof std);
console.log(typeof address);
console.log(typeof course);

// // ! `${varname}` -- templete literal : output stmt 

console.log("Hello I am "+std+" from "+address);
console.log(`Hello I am ${std} from ${address} and I am doing ${course} course`);

// // ! number
let age = 22
let fees = 56756.89
console.log(typeof age);
console.log(typeof fees);

// // ! boolean
// let isMarried = false
// let isDev = true
// console.log(typeof isDev);
// console.log(typeof isMarried);

// // ! bigint : large amount of data
let data = 678456789098980876543567n
console.log(typeof data);

// // ! undefined : un-initialized variable
let company 
console.log(typeof company);

// // ! null : empty object for future use
let project = null
console.log(typeof project);

// // ! symbol : creates empty function for future use
const work = Symbol
console.log(typeof work);

