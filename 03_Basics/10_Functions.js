

function sayMyName(){
    console.log("R");
    console.log("U");
    console.log("P");
    console.log("A");
    console.log("M");
}

sayMyName()

// ------------------------------------

function add2nums(num1, num2){  // num1, num 2 ---> Paramters
    console.log(num1+num2);
}

add2nums(2,3)           //---------
add2nums(2,"3")         //---------
add2nums(2,"a")         //--------- Arguments
add2nums(2,null)        //---------

const result = add2nums(3,5)
console.log(`Result: ${result}`); // ----undefined

// Rewrite the code for return statement

function add3nums(num1,num2, num3){
    let result = num1+num2+num3
    return result
    console.log("Rupam"); //nothing gets executed after return statemnet
    
}
const result2=add3nums(2,3,4)
console.log(`Result: ${result2}`);


// Login

function loginUserMsg(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg())

// Calculate cart price
function calculateCartPrice(...num1){ // rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500));

// Objects in function
const user = {
    username: "rupam",
    price: 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
    
}

handleObject(user)

// Arrays in functions

const myNewArr =[200,600,900, 8776]

function return2ndValue(getArr){
    return getArr[1]
}

console.log(return2ndValue(myNewArr));
