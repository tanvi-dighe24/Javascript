// console.log(window);

// console.log(window.location);
// console.log(location);
// console.log(navigator);
// console.log(screen);
// console.log(history)
// console.log(document);

// ! direct access
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.images);
console.log(document.links);
console.log(document.forms);
console.log(document.scripts);

// ! DOM Targetting methods
// ! getElementByid("id") : to target single element with unique id
console.log(document.getElementById('demo'));

// ! getElementsByClassName("classname") : to multiple element with specified classname
let boxes = document.getElementsByClassName("box")

console.log(boxes);

// returns HTML collection : Array like object
// Array.from() : convert htmlcollection into array
let arr = Array.from(boxes)
console.log(arr);     

// ! getElementsByTagName("tagname") : to multiple element with specified tagname
let btns = document.getElementsByTagName('button')
console.log(btns);

// ! querySelector('selector') : to target single element with specified css selector
console.log(document.querySelector('#demo'));
console.log(document.querySelector('.box'));

// ! querySelectorAll('selector') : to target multiple elements with specified css selector
console.log(document.querySelectorAll("#btn_blk button"));

// ! nodelist : array like object 
