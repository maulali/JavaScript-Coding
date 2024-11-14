//There are 5 types of loops
/*
1 . for
2 . while
3 . do while
4 . for in
5 . for of

*/

//for

// for(let i = 2;i<5;i++){
//     console.log("Hello ali");
// }
// console.log("**********************End For Loop**********************8");
// console.log("**********************End For Loop**********************8");

// //while
// let i = 5;
// while(i<6){
//     console.log("Hello SabirAli");
//     i++;
// }
// console.log("**********************End For Loop**********************8");

// //do while
// let ii= 5
// do{
//     console.log("This is do while")
//     ii++;
// }
// while(ii<5)
//     console.log("********End For Do While***********");

// // for in
// let obj2 = {x:1,y:2,z:3}
// for( value in obj2){
//     console.log(value,obj2[value]);
// }
// console.log("********End For in***********");
// for of
 let obj1 = [1,2,3,4,5]
 for( value of obj){
    console.log(value);
 }
 console.log("********End For of***********");

//Practice   : it's work on display index number of the element
console.log("*********Start OF  for in***********");
let User = ["ali","amir","shaikh","kardehalli","solapur","maharastra","india",413006,]
for(Value in User){
    console.log(User[Value]);
}

console.log("*********Start OF  while***********");
let User1 = ["ali","amir","shaikh","kardehalli","solapur","maharastra","india",413006,]
let i1 = User1;
while(i<66){
    console.log(i);
}

console.log("*********Start OF do while***********");
let User3 = ["ali","amir","shaikh","kardehalli","solapur","maharastra","india",413006,]
let i2 = User3
do{
    console.log(i2);
    i2++;
}
while(i2<55)


let obj = [1,2,3,4]
for(let i of obj)
{
    console.log(i);
}


let i = obj
do{
    console.log(i);
    i++
}
while(i<6)