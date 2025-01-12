var c =300
let a =300
if(true){
    let a = 10
    const b =20
    var c =30
}

console.log(a);
// console.log(b);
console.log(c);

// Hoisting
addOne(5)
function addOne(num){
    return num+1
}

addTwo(5) // ------------> error cuz of expression, hoisting
const addTwo = function(num){
    return num+2
}

