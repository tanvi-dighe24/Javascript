// ! Operators

// // ! Arithmatic operators - +,-,*,/,%,++,--
// console.log(30+90);
// console.log("hello"+"hiii");
// console.log(30+'90');
// console.log(60-45);
// console.log(5*4);
// console.log(40/2);
// console.log(50%3);

// let a = 10  //10
// // a++ , ++a , --a , a--
// // console.log(a++);
// // console.log(++a);
// // console.log(a--);
// // console.log(--a);

// console.log(a-- + ++a + a++ + --a);
//          10   + 10 + 10  + 10

// ! Assignment operators - =,+=,-=,*=,/=,%=
// let x = 100

// x += 10  // x=x+10
// console.log(x);

// x += "10"  // x=x+"10"
// console.log(x);

// x -= 10  // x=x-10
// console.log(x);

// x *= 10  // x=x*10
// console.log(x);

// x /= 10  // x=x/10
// console.log(x);

// x %= 10  // x=x%10
// console.log(x);

// ! comparison operators - >,<,>=,<=,!=,==,===
console.log(4>12);
console.log(3<56);
console.log(2>=10);
console.log(4<=4);
console.log(2!=20);

// == -- compares only values 
console.log( 40 == 40 );
console.log( 40 == '40' );

// === -- compares both datatype and values
console.log( 40 === 40 );
console.log( 40 === '40' ); 


// ! logical operators -- &&,||,!

// // && - all the conditions are true -- true
// console.log(5<30 && 300>=90 && 1<10);

// // || - any one condition is true -- true  
// console.log(4<9 || 30>=100 || 300<=200 || 20==20);

// // ! -- true - false
// console.log(!(20>10));

// ! ternery operator - (condition) ? true stmt : false stmt
let age = 12
let res = (age>=18) ? console.log(`You are eligible to vote`) : console.log('Your are not eligible');
