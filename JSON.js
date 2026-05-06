// // ! JSON : Javascript object notation : popular format of storing and transporting the data

// let user = {
//     uname : 'Ram',
//     age : 30,
//     address : "Pune"
// }
// console.log(user);

// // ! stringify() : js object into json format
// let jsonObj = JSON.stringify(user)
// console.log(jsonObj);

// // ! parse() : json object into js object
// let newUser = JSON.parse(jsonObj)
// console.log(newUser);


// ! Asynchronous JS 

// ! setTimeOut(function,delay)

// console.log("Start....");

// setTimeout(function(){
//     document.writeln("Hello I am Function");
// },2000)

// console.log("End.....");

// ! setInterval(function,delay)

// console.log("Start....");

// setInterval(function(){
//     document.writeln("Hello I am Function");
// },2000)

// console.log("End.....");
// console.log("hello");

// ! clearTimeout()
// let greet = setTimeout(()=>{
//     document.getElementById('demo').innerText = "Good Evening..."
// },3000)

// let stopBtn = document.querySelector('button')
// stopBtn.addEventListener('click',()=>{
//     clearTimeout(greet)
// })

// ! clearInterval()

// let displayTime = setInterval(()=>{
//     let d = new Date();
//     document.getElementById('demo').innerText = d.toLocaleTimeString()
// },1000)

// let stopBtn = document.querySelector('button')
// stopBtn.addEventListener('click',()=>{
//     clearInterval(displayTime)
// })


// ! Promise : powerful way to work with asynchrounous task , it is used perform the tasks which may take an unknown amount of time to complete
// mock : pending state
// taken mock -- fulfilled
// didnot attend mock -- rejected

let myPromise = new Promise((res,rej)=>{
    let mock = true;

    if(mock == true){
        res("Thank you for attending the mock")
    }
    else{
        rej("Do attend the mock without fail")
    }
})

console.log(myPromise);

// ! then() : will be executed whenever promise is in resolved state
myPromise.then((msg)=>{console.log(msg);})

// ! catch() : will be executed whenever promise is in rejected state
myPromise.catch((err)=>{console.log(err);})

// ! finally() : either resolved or rejected
myPromise.finally(()=>{console.log("All the best...");})
