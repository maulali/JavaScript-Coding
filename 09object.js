// // let ObjUser = {
// //     name: 'Ali',
// //     age:22,
// //     add:{
// //         city: 'Solapur',
// //         state:'Maharastra'
// //     }

// // }
// // console.log(ObjUser.name);
// // console.log(ObjUser);

// console.log("*************Self Program*************");

// const prompt = require("prompt-sync")();
// let UserDetail = {Name:prompt("Enter Here : "),age:22}//This brackets is specially use for the object
// console.log(UserDetail)

// let FamilyDetail = {
    
//     Name:prompt("Name")
//     ,Age:prompt(parseInt("Enter Here : ")),
//     add:{
//     Village : Prompt("Enter Here Villege Name : "),
//     City: Prompt("Enter Here city Name : "),
//     State :Prompt("Enter Here State Name : "),
//     Country: Prompt("Enter Here country Name : "),
//     code:prompt(parseInt("Enter Here"))
// }
// }

// console.log(FamilyDetail)

// /*

// const company = {
//     departments:[
//         {
//             hr: [
//                 {
//                     name: 'ali'
//                 },
//                 {
//                     name: 'shaikh'
//                 }
//             ]
//         },
//         {
//             dev:[
//                 {
//                     name: 'Raza'
//                 },
//                 {
//                     name:'Ali'
//                 }
//             ]
//         },
//     ]
// }

// */


let student ={
    student1:{
        name:'ali',
        age:22

    },
    student2:{
        name:"rijali",
        age:20
    }
}

console.log(student.student2.age)

let i = [12,3,4,5,6]
for(value in i ){
    console.log(value);
}




let obj = {
    name:['ali','juber'],
    age:[22,33]
}

console.log(obj.age[1]); 