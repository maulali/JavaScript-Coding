const user = ['ali','amir','shaikh']
const [name1,name2,name3] = user
console.log(name1);
console.log(name2);
console.log(name3);

console.log('********************************');
const detailObject = {
    name:'ali',
    age:22,
    village:'kardehalli',
    city:'solapur',
    state:'maharastra',
    country:'india'
}

const {name,age,village,city,state,country} = detailObject

console.log(name);
console.log(age);
console.log(village);
console.log(city);
console.log(state);
console.log(country);

console.log('********************************');

const product = {
    productId : '23',
    title:'samsung',
    price:120000,
    discount:45
}

const {productId,title,price,discount} = product

console.log(productId);
console.log(title);
console.log(price);
console.log(discount);

/*function test({productId,title,price,discount}){
    console.log(productId);
}
test()

function test(product){
    product.productId
}
*/
