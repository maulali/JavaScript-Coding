let users = ['sabirali','ali ','rijali']
console.log(users);

const activeUsers = [...users,'Ganesh','Yash',...users]
console.log(activeUsers);

const product = {
    productId : '23',
    title:'samsung',
    price:120000,
    discount:45
}


let newProduct = {
    ...product,
    live:false,
    category : 'trending'
}

console.log(newProduct);