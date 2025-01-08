// Primitive - call by value

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference type (Non primitive)

// Array, Objects, Functions;

const heros =["Shaktiman", "Nagraj", "Doga"];

let myObj = {
    name: "Rupam",
    surname: "Das",
    age: 21
}

const myFnc = function(){
    console.log("Hello world");
    
}

const bigN = 4856776895787688598598959498n;
console.log(typeof bigN);
console.log(typeof myObj);
console.log(typeof myFnc);
console.log(typeof heros);

