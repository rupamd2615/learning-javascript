// Arrays
const myArr = [0,1,2,3,4,5] //can be of different types of elements also
console.log(myArr[1]);

// Shallow Copy & Deep Copy

// --> Shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result when you change either the source or the copy, you may also cause the other object to change too ---so unexpected changes to the source object occurs.

// --> Deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you make changes in the copy you can be sure that no unexpected changes occur in the original object.

// array-copy operations create shallow copies

const myHeroes = ["Batman","Flash"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[2]);

// Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join() //converts array values into string
console.log(typeof myArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log("B ", myArr);
console.log(myn1);
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

// Concatenation
const marvelHeros = ["Iron Man", "Captain America", "Spider Man"]
const dcHeros = ["Batman", "Flash", "Superman"]

// marvelHeros.push(dcHeros)
console.log(marvelHeros); // Array in array, not concatenation

// Concat op
const allHeros=marvelHeros.concat(dcHeros)
console.log(allHeros);

// Spread op
const all_new_heros = [...marvelHeros, ...dcHeros]
console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr = another_arr.flat(Infinity)
console.log(real_arr);

// Data Scrapping application: 
console.log(Array.isArray("Rupam"));
console.log(Array.from("Rupam"));
console.log(Array.from({name: "Rupam"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
















