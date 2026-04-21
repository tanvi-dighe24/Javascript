// ! Array methods
// let flipkart = ['mobile','tv','laptop',"bottle",'shoes']
// console.log(flipkart);

// // ! push(val1,val2,....) : add multiple elements to the array at the end
// flipkart.push('shirt','fan','chair','crocks')
// console.log(flipkart);

// // ! unshift(val1,val2,....) : add multiple elements to the array at the beginning
// flipkart.unshift('watch','ladder','kurta')
// console.log(flipkart);

// // ! pop() : delete the last array element
// flipkart.pop()
// console.log(flipkart);

// // ! shift() : delete the first array element
// flipkart.shift()
// console.log(flipkart);

// // ! splice(start_index,delete_count,replacement_elements) : add and delete the multiple elements at the middle of the array
// //  ['ladder', 'kurta', 'mobile', 'tv', 'laptop,', 'bottle', 'shoes', 'shirt', 'fan', 'chair']
// // ! adding and deleteing
// // flipkart.splice(1,3,'jeans','book')
// // ! adding
// // flipkart.splice(2,0,'pen','paints','plant')
// // ! deleting
// // flipkart.splice(2,2)
// // console.log(flipkart);

// // ! slice(start_index,end_index) : to get the part of an array
// // ['ladder', 'kurta', 'mobile', 'tv', 'laptop,', 'bottle', 'shoes', 'shirt', 'fan', 'chair']
// // let arr = flipkart.slice(2,7)
// // let arr = flipkart.slice(5)
// // console.log(arr);
// // console.log(flipkart);

// // ! indexOf(element) : returns the index position of the specified element 
// console.log(flipkart.indexOf('book'));
// console.log(flipkart.indexOf('tv'));

// // ! at(index) : returns the element of the specified index position
// console.log(http://flipkart.at(6)); 
// console.log(http://flipkart.at(60)); 

// // ! includes(element) : it will check wether the element is present in the array or not
// console.log(flipkart.includes('kurta'));
// console.log(flipkart.includes('kurta'));

// // ! join() : It is used to join all elements of an array into a string.
// console.log(flipkart.join());
// console.log(flipkart.join(' '));
// console.log(flipkart.join('--'));
// console.log(flipkart.join(''));


// // ! toString() : It is used to join all elements of an array into a string.
// console.log(flipkart.toString());
// console.log(flipkart.toString(' '));
// console.log(flipkart.toString('--'));
// console.log(flipkart.toString(''));

// // ! concat() : to merge multiple arrays
// let amazon = ['book','pen','chair']
// console.log(flipkart.concat(amazon));

// // ! reverse() :  returns reversed array
// console.log(flipkart.reverse());

// // ! split() : to convert string into an array
// let str = "hello good evening"
// // let arr = str.split()
// // let arr = str.split('')
// // let arr = str.split('e')
// let arr = str.split(' ')
// console.log(arr);

// // ! Array.from() : to convert string into an array
// console.log(Array.from("hello"));

// ! filter(), map() and reduce() -- HOF
let nums = [1,2,3,4,5,6,7,8,9,10] 

// ! filter() : To filter the array elements based upon the condition
let evenNums = nums.filter(function(element,ind){
    if(element%2 === 0){
        return element
    }
})
console.log(evenNums);

// ! map() : used to map each array element
let mappedArr = http://nums.map((value,i)=>{
    return value*100
})
console.log(mappedArr);

// ! reduce() : used reduce entire array into single value
let sum = nums.reduce((res,value)=>{
    return res+value
},0)
console.log(sum);


let std = [111,'ram','ram123@gmail.com','8978657878']

// password -- first 4 char of mail id and last 4 digits of contact num(ram17878) 
