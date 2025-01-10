// Singleton

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rupam",
    "fullName":"Rupam Das",
    [mySym]:"mykey1",
    age:"21",
    location: "Asansol",
    email: "rupam123@rediffmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "rupam651@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "suman4321@hotmail.com"
console.log(JsUser);

// Adding function to JavaScript Objects
JsUser.greeting = function(){
    console.log(`Hello ${JsUser.name}`);
    
}
// Using this keyword, referring to th same object
JsUser.greeting2 = function(){
    console.log(`Hello ${this.fullName}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
console.log(JsUser);

// Declaring objects using Constructors
const tinderUser = new Object() // ---> Singleton
console.log(tinderUser);

const tinderUser2 = new Object() // ---> Non-singleton
console.log(tinderUser2);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUSer = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Rupam",
            lastName: "Das"
        }
    }
}

console.log(regularUSer.fullName.userFullName.lastName);
// There's also something called Optional Chaining, simplifies the if-else task basically, if the nesting exist then go further, like that


// Merge two different objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {obj1,obj2}
console.log(obj3); // --> Unwanted nested objects

const obj4 = {...obj1,...obj2} // --> spread operator
console.log(obj4);

// Using Object.assign()
const obj5 = Object.assign({},obj1,obj2) //--> {} == target object, rest == source objects
console.log(obj5);


// Data from Databases come in the form of array of Objects

const users =[
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    },
    {
        id:3,
        email:"s@gmail.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser)); // returns an array of keys of the object that can be further used in several objects
console.log(Object.values(tinderUser)); // returns an array of values of the object that can be further used in several objects
console.log(Object.entries(tinderUser)); // returns array within array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Objects Destructuring - highly used in React
const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor:instructor} = course
console.log(instructor);

// JSON API
// Previously XML files were used for fetching the data from backend

// {
//     "name": "Hitesh",
//     "courseName": "Js in Hindi",  ///// ---->JSON format
//     "price": "free"
// }

// We can also get API values in forms of "array of objects"









