
//old methos 
console.log("Script loaded");
function function1(){
    console.log('Hello World');

}
function1();


//ES6 features
//arrow function
//you can put in variable
let NewFunct = ()=>{
    console.log("Latest method");
    
    // return a+b
}
// console.log(NewFunct(5,6));

//function in new function
console.log(NewFunct(()=>{
    console.log('This is new func in func call');
}));

console.log(NewFunct());


