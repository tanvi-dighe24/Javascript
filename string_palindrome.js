let word = "mam";

// Step 1: Reverse the word
let reversedWord = word.split('').reverse().join('');

// Step 2: Compare
if (word === reversedWord) {
    console.log(`${word} is a Palindrome`);
} else {
    console.log(`${word} is not a Palindrome`);
}
