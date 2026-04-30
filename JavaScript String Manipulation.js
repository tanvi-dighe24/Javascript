// ! String
let str = "Hello good evening"
console.log(str);
console.log(str.length);

// ! string methods
// ! slice(start_index,end_index) : extract part of the string
console.log(str.slice(2,7));
console.log(str.slice(7));
console.log(str.slice(-3));

// ! substring(start_index,end_index) : extract part of the string  but here negative index willnot work
console.log(str.substring(2,7));
console.log(str.substring(7));
console.log(str.substring(-3));

// ! substr(start_index,leng_of_res_str) : extract part of the string
console.log(str.substr(2,10));

// ! replace(oldstr,newstr) : to replace part of string
console.log(str.replace('evening','Morning'));
console.log(str.replace('o','🏵️'));

// ! replaceAll(oldstr,newstr) : to replace part of string
console.log(str.replaceAll('o','🏵️'));

// ! trim(): to remove the strt and end space
// trimStart() and trimEnd()
let text = '    Have a good day   '
console.log(text);
console.log(text.trim());

// ! indexOf(char) : returns index num
console.log(str.indexOf('good'));
console.log(str.indexOf('o'));
console.log(str.indexOf('K'));

// ! lastIndexOf(char) : returns index num
console.log(str.lastIndexOf('o'));

// ! includes(char)
console.log(str.includes('even'));
console.log(str.includes('O'));

// ! repeat(num) : repeats original str
console.log(str.repeat(5)); 

// ! concat() : to merge multiple string
console.log(str.concat(text));

// ! charAt(index) : returns char present in tht index
console.log(str.charAt(4));
console.log(str.charAt(40));

// ! charCodeAt(index) : returns ASCII val of char present in tht index
console.log(str.charCodeAt(4));

// ! padStart(length_of_res_str,char) : to hide the char from starting -- XXXXXXXX56
let a = '56'
console.log(a.padStart(10,'X'));

// ! padEnd(length_of_res_str,char) : to hide the char from end -- 2345XXXXXXXX
let n = '2345'
console.log(n.padEnd(12,'X'));





