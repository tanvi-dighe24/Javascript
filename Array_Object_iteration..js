// // ! forEach(callback) : HOF : by executing this function for each element of the array it will iterate over array

// let stds = ['rohit','banu','tanvi','priya']

// stds.forEach((std,ind)=>{
//     console.log(`${ind}---${std}`);
// })

// // ! for of : to iterate over the array elements
// let nums = [1,2,3,4,5,6,7,8,9]
// for(let n of nums){
//     console.log(n);
// }

// // ! for in : to itearte over keys of an object
// let emp = {
//     ename : 'manu',
//     age : 22,
//     address : "banglore"
// } 

// for(let k in emp){
//     // console.log(k);
// //    console.log(emp[k]); //dot notation willnot work here
//     console.log(`${k}--${emp[k]}`);
// }

// ! Date object
let d = new Date()
// console.log(d);

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());

// ! 15th aug 1947
// d.setFullYear(1947)
// d.setMonth(7)
// d.setDate(15)
// console.log(d);

// // ! 01/02/2002
// d.setFullYear(2002)
// d.setMonth(1)
// d.setDate(1)
// console.log(d);

// ! Math object

// // ! pow(base,exp) : 
// console.log(Math.pow(2,4));

// // ! sqrt(num) 
// console.log(Math.sqrt(9));

// // ! cbrt(num)
// console.log(Math.cbrt(8));
// console.log(Math.cbrt(10));

// // ! round(num) : round up the num to nearest integer 
// console.log(Math.round(9.34));
// console.log(Math.round(34.89));
// console.log(Math.round(-14.78));
// console.log(Math.round(9.54));

// // ! floor(num) : round up the num to nearest lowest integer 
// console.log(Math.floor(9.3));
// console.log(Math.floor(9.8));
// console.log(Math.floor(-9.3));

// // ! ceil(num) : round up the num to nearest highest integer 
// console.log(Math.ceil(3.5));
// console.log(Math.ceil(5.21));
// console.log(Math.ceil(-5.21));

// // ! trunc(num) : returns only integer part
// console.log(Math.trunc(9.34));
// console.log(Math.trunc(20.94));
// console.log(Math.trunc(-20.94));

// // ! max(num1,num2,num3....) : returns maximum num amonng these nums
// console.log(Math.max(1,30,50,-89,-700,190));

// // ! min(num1,num2,num3....) : returns minimum num amonng these nums
// console.log(Math.min(1,30,50,-89,-700,190));

// // ! random() : generate the random numbers from 0-1
// console.log(Math.random());



// ! OTP generation
function generateOtp(){
    let text = "1234567890qwertyuioplkjhgfdsazxcvbnm"
    let otp = ''

    for(let i=1;i<=4;i++){
        otp += text[Math.floor(Math.random()*text.length)];  //3729
    }
    alert(`The OTP is ${otp}`)
}
