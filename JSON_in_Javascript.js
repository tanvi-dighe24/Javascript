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

// let myPromise = new Promise((res,rej)=>{
//     let mock = true;

//     if(mock == true){
//         res("Thank you for attending the mock")
//     }
//     else{
//         rej("Do attend the mock without fail")
//     }
// })

// console.log(myPromise);

// // ! then() : will be executed whenever promise is in resolved state
// myPromise.then((msg)=>{console.log(msg);})

// // ! catch() : will be executed whenever promise is in rejected state
// myPromise.catch((err)=>{console.log(err);})

// // ! finally() : either resolved or rejected
// myPromise.finally(()=>{console.log("All the best...");})


// ! async : makes a function to return a promise
// async function demo(){
//     return "hello";
// }

// console.log(demo());

// ! await : makes the function to wait for promise settlement
// async function getData() {
//     let res = await fetch("https://fakestoreapi.com/products");
//     console.log(res);
//     let data = await res.json()
//     console.log(data);
//     console.log(data[0]);
//     console.log(data[0].title);
//     for(let obj of data){
//         // console.log(obj);
//         console.log(obj.title);

//         let title =  document.createElement("h2")
//         title.innerHTML = obj.title

//         let p =  document.createElement("p")
//         p.innerHTML = obj.description

//         let image = document.createElement('img')
//         image.src = obj.image

//         document.body.append(title,image,p)
//     }
// }

// getData()

// ! webstorage

// ! localStorage : store the data permenently

// ? setItem(key,val) : add data
// localStorage.setItem("developer1",'Rohit')
// localStorage.setItem("developer2","Manu")

// ? geteItem(key) : access the data
 document.writeln(localStorage.getItem("developer1"))
 document.writeln(localStorage.getItem("developer2"))

// ? removeItem(key) : delete a data
 localStorage.removeItem('developer1')

// ? clear() : clears the storage -- deletes all the data
 localStorage.clear()

// ! sessionStorage : stores the data not permenently

// ? setItem(key,val) : add data
 sessionStorage.setItem("developer1",'Rohit')
 sessionStorage.setItem("developer2","Manu")

// ? geteItem(key) : access the data
document.writeln(sessionStorage.getItem("developer1"))
document.writeln(sessionStorage.getItem("developer2"))

// ? removeItem(key) : delete a data
sessionStorage.removeItem('developer1')

// ? clear() : clears the storage -- deletes all the data
sessionStorage.clear() 
