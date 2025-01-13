const user ={
    username: "Rupam",
    price: 199,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMsg()
user.username = "Sam"
user.welcomeMsg()

console.log(this);
// node environment mein this refers to an empty object, but browser mein this refers to the browser's global object, i.e.window object

// +++++++++++++++++++++++++++++

function chai(){
    let username = "Rupam"
    console.log(this);
    
}

chai()

// +++++++++++++++++++++++++++++

const chai2 = () => {
    let username = "Rupam"
    console.log(this);
}

chai2()

// () => {} ------Arrow Function

// Normal arrow function
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

// Implicit return
const add2 = (num1,num2) => (num1 + num2)
console.log(add2(3,4));

// return a object
const obj = () => ({username:"Hitesh"})
console.log(obj());

