// ! Array : It is used to store multiple values

// ? 1.Array literal
// syntax : var/let/const arrayname = [val1,val2,val3,val4,......]
const nums = [1,2,3,4,5,6,7,8,9,10]
// console.log(nums);

// let emp = [111,"tarun",56748.89,true]
// console.log(emp);

// // ! access - arrayname[index]
// console.log(nums[3]);

// // ! update - arrayname[index] = val
// nums[1] = 20
// console.log(nums);

// // ! add - arrayname[index] = val
// nums[10] = 1000
// console.log(nums);

// // ! delete - delete arrayname[index]
// delete nums[2]
// console.log(nums);

// // ? 2.Array constructor
// // let arr = new Array(102,40,30,50,60)
// let arr = new Array(3)
// arr[0] = 10
// arr[1] = 90
// arr[2] = 100
// arr[3] = 800
// arr[4] = 890
// console.log(arr);

// ! Array methods
let flipkart = ['mobile','tv','laptop,',"bottle",'shoes']
console.log(flipkart);

// ! push(val1,val2,....) : add multiple elements to the array at the end
flipkart.push('shirt','fan','chair','crocks')
console.log(flipkart);

// ! unshift(val1,val2,....) : add multiple elements to the array at the beginning
flipkart.unshift('watch','ladder','kurta')
console.log(flipkart);

// ! pop() : delete the last array element
flipkart.pop()
console.log(flipkart);

// ! shift() : delete the first array element
flipkart.shift()
console.log(flipkart);

// ! splice(start_index,delete_count,replacement_elements) : add and delete the multiple elements at the middle of the array
//  ['ladder', 'kurta', 'mobile', 'tv', 'laptop,', 'bottle', 'shoes', 'shirt', 'fan', 'chair']
// ! adding and deleteing
// flipkart.splice(1,3,'jeans','book')
// ! adding
// flipkart.splice(2,0,'pen','paints','plant')
// ! deleting
// flipkart.splice(2,2)
// console.log(flipkart);

// ! slice(start_index,end_index) : to get the part of an array
// ['ladder', 'kurta', 'mobile', 'tv', 'laptop,', 'bottle', 'shoes', 'shirt', 'fan', 'chair']
// let arr = flipkart.slice(2,7)
let arr = flipkart.slice(5)
console.log(arr);
console.log(flipkart);
