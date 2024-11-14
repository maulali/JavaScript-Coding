// // //what is closures : a closures is a function that captures the variables from its surrounding lexical envirnoment




// // //Closure  -> kucj New  Tarike se sikhe hai
// // //learn by : Technical Suneja

// // //anonymous function is called as without name function
// // // let sum = function(a){
// // //     //lexsical scope

// // //     console.log("Live Viewers"+a);
// // //     var c = 4;
// // //     return function(b){
// // //         return a+b+c
// // //     }
// // // }

// // // var store = sum(200)//calling
// // // console.log(store(5))
// // // //value will be not lost


// // var sum = function(a,b,c){


// //     return {
// //         getSumTwo:function(){
// //             return a+b;
// //         },
// //         getSumThree:function(){
// //             return a+b+c;
// //         }
// //     }

// // }

// // var store = sum(3,4,5)//calling
// // console.log(store.getSumTwo());
// // console.log(store.getSumThree());


// // console.log('*********************');

// // var store1 = sum(7,8,9)//calling
// // console.log(store1.getSumTwo());
// // console.log(store1.getSumThree());















// // //learn by : learn code with Durgesh

// // // let counter = 0
// // // const count = () =>{
// // //     counter = counter + 1
// // // }

// // // count()
// // // console.log(counter)//This is using for the print of counter value

// // // console.log('script3 loaded');

// // // let count = () =>{
// // //     counter = 0 ;

// // //     let increment =()=>{
// // //     counter = counter + 1
// // //     return counter
// // // }
// // // return increment
// // // };

// // // const funcStore = count()

// // // console.log(funcStore());
// // // console.log(funcStore());
// // // console.log(funcStore());
// // // console.log(funcStore());


// // //self practice


// // const incfunction = () =>{
// //     let counter = 0;

// //     let incCounter = () =>{
// //         counter++
// //         ++counter
// //         return counter
// //     }
// //     return incCounter
// // }

// // let functstore = incfunction()

// // console.log(functstore());
// // console.log(functstore());
// // console.log(functstore());
// // console.log(functstore());
// // console.log(functstore());

// function counterfunc(){
//     let counter = 0 ;
//     return incfunc = () =>{
//         counter = counter+1
//         return counter
//     }
// return incfunc
    
// }

// let store = counterfunc()
// console.log(store())
// console.log(store())
// console.log(store())
// console.log(store())


let maincounterfunction = () =>{
    let counter = 0 
 return inc = ()=>{
    counter = counter+1
    return counter
 }   
 return inc
}

let store = maincounterfunction()

console.log(store());
console.log(store());
console.log(store());
console.log(store());
console.log(store());
console.log("Our closure concept is clear");
console.log('This is live loading with the help of live server extension');
// Closure means function return in function