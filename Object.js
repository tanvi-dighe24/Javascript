// ? 1.Object literal
// syntax : var/let/const objectname = {
    // key1 : val1,
    // key2 : val2,
    // ......
    // ......
// }
// const user = {
//     uname : 'Snehal',
//     age : 20,
//     userid : 111
// }
// console.log(user);

// // dot(.) notation / Bracket([]) notation
// // ! access  - objectname.keyname / objectname["keyname"]
// console.log(user.uname);
// console.log(user["userid"]);

// // ! update - objectname.keyname  / objectname["keyname"]  =  newVal 
// // user.age = 21
// user["age"] = 21
// console.log(user);

// // ! add -- objectname.keyname  / objectname["keyname"] = val
// http://user.contact = 6785656544
// user['emailid'] = 'snehal@gmail.com'
// console.log(user);

// // ! delete - delete objectname.keyname  / objectname["keyname"]
// delete user.age
// delete user['contact']
// console.log(user);

// // ? 2.Object constructor
// // var/let/const objectname = new Object()
// let car = new Object()
// car.model = 'Audi'
// car.color = 'black'
// car.engine = 'petrol'
// console.log(car);

// // ? 3.Constructor function
// function student(sname,sid,address){
//     this.sid = sid;
//     this.sname = sname;
//     this.address = address
// }

// let std1 = new student('manu',11,'bng')
// console.log(std1);

// let std2 = new student('aman',12,'hyd')
// console.log(std2);

// ! Object methods
let person = {
    pname : 'Manvith',
    age : 24,
    address : "Bng"
}

// ! freeze() : to freeze the object -- cannot add,delete and update
Object.freeze(person)

// ! isFrozen() : to verify the object is freezed or not
console.log(Object.isFrozen(person));

// ? add
person.salary = 68000

// ? delete
delete person.address
console.log(person);

// ? update
person.age = 25
console.log(person);

// access
console.log(person.pname);

// ! seal() : to seal the obejct --- cannot add and delete
Object.seal(person)

// ! isSealed() : to verify the object is sealed or not
console.log(Object.isSealed(person));

// ? add
person.salary = 68000

// ? delete
delete person.address
console.log(person);

// update
person.age = 25
console.log(person);

// access
console.log(person.pname);


// // ! keys() : returns array of keys of an object
// console.log(Object.keys(person));

// // ! values() : returns array of values of an object
// console.log(Object.values(person));
 
// // ! entries() : nested array -- key an value
// console.log(Object.entries(person));

// // ! hasOwn(objectname,"keyname") : check the specified keyname is present in the object or not
// console.log(Object.hasOwn(person,"age"));
// console.log(Object.hasOwn(person,"phone"));

// // ! assign(targetObj,obj1,obj2,....) : to merge multiple objects
// let work = {
//     company : 'Qsp',
//     salary : 60000,
//     isdev : true
// }

// // Object.assign(person,work)
// // console.log(person);

// let newObj = Object.assign({},person,work)
// console.log(newObj);
// console.log(person);
// console.log(work); 

