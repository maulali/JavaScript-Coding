//what is spread :




const user1 = {bike: "hayabusa"};
const user2 = {car: "farrari", func: function name(params) {
    this.user1
}};
const user3 = {...user1, ...user2};

console.log(user3);


let ali = [1,2,3,4]
let ali2 = [5,6,7,8]
let ali3 = [...ali,...ali2]
console.log(ali3);
