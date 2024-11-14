//Templates Literals


let price = 120000
let discont = 2000
let para = `javascript is very beautiful lanaguage price of product is ${price} ,
discount is ${discont}`;

console.log(para);

//urls making method
const baseUrl = `http://localhost:8080`;

console.log(`${baseUrl}/api/v1/courses`);


let elementList = [2,1,3,4,5]
//destructure 
let [el1,el2,...el3] = elementList
console.log(`This element sequence is wrong ${elementList}`);
console.log(`this is write element sequence ${el2},${el1},${el3} `);