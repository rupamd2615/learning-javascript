// Modern Syntax: String Interpolation

let name = "Rupam"
let repoCount = "40"
console.log(`My name is ${name}, my repo count is ${repoCount}`);

const gameName = new String('Rupam-rd-com')
// console.log(gameName);

console.log(gameName[5]);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('w')); // for impossible values, returns index -1
console.log(gameName);

// Substrings
console.log(gameName.substring(0,4)); // doesn't take negative values
console.log(gameName.slice(-8,4)); //takes negative values
// trim
const newStr = "    Rupam   "
console.log(newStr);
console.log(newStr.trim());
// replace
const url = "https:rupam.com/rupam%20das"
console.log(url.replace('%20','-'));
console.log(url.includes('das'));
// String to Array
console.log(gameName.split('-'));










