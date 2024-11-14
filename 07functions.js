// 1) higher order function-->You can take another 
// 2) callback function


// function getFilteredList(list) {
//     // Formal argument
  
//     // logic even numbers in list
  
//     const filteredList = [];
  
//     for (let num of list) {
//       if (num % 2 == 0) {
//         filteredList.push(num);
//       }
//     }
  
//     return filteredList;
//   }
  
//   const filteredList = getFilteredList(li); // li => actual argument
  
//   console.log("filteredList using custom function: ", filteredList);
  
//   // const li = [2, 4, 1, 6, 2, 3];
  
//   // callback function (func)
//   const func = (item) => {
//     return item % 2 == 0;
//   };
  
//   console.log(
//     "filteredList using builtin function: ",
//     li.filter((item) => item % 2 == 0) // higher order function
//   );
  


//arrow function 
//ES6 features

// let variable = () =>{
//     console.log('Hello Ali');
    
// }
// variable()



let arrowfunc = (a,b)=>{
    return a+b
}

console.log(arrowfunc(5,6))


//Function 
function funct(a,b){
    
    return a+b
}
console.log(funct(5,3))



let arrow = () =>{
console.log('this is arrow function ');

}
arrow()


function ali (){
    console.log("this is reguler function ");
}
ali()






//function
 let ali1 = ali = ()=>{
    console.log('this is arrow function');
}

let ali2 = ali();
console.log(ali2);