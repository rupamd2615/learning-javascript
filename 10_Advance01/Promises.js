// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// [A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.]

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// fetch('https://rupamd.framer.wiki').then().catch().finally()

const promise1 = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promise1.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved");
    
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Rupam", email: "drupam2003@gmail.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
    
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Ritesh", password: "Genelia"})
        }else{
            reject('Error! Something went wrong')
        }
    },1000)
    
})

promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
    
})
.finally(()=> console.log("Promise is either resolved or rejected")
);

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: "Chai aur code"})
        }else{
            reject('Error! JS went wrong')
        }
    },1000)
})

// Async Await
async function consumePromise5(){

    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromise5()

// placeholder json
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
        
    }
    
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {return response.json()})
.then((data)=>{console.log(data)})
.catch((error)=> console.log(error))