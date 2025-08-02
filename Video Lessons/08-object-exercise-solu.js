//8a
const product1 = {
name: 'basketball',
price: 2095
};
console.log(product1);
//{name: 'basketball', price: 2095} (OUTPUT)

//8b
const product2 = {
name: 'basketball',
price: 2095
};
product2.price += 500
console.log(product2);
//{name: 'basketball', price: 2595} (OUTPUT)

//8c
const product3 = {
name: 'basketball',
price: 2095
};
product3.price += 500
product3['delivery-time'] = 2050;
console.log(product2);
//{name: 'basketball', price: 2595, delivery-time: 2050} (OUTPUT)

//8d
function comparePrice(product7, product8){
if (product7.price > product8.price) { return product8; }
else{return product7;}
}
const product7 = {name:'basketball', price: 1000};
const product8 = {name:'socks', price: 2000};
console.log(comparePrice(product7, product8));
// {name: 'basketball', price: 1000} (OUTPUT)

//8e
function isSameProduct (productC, productD){
if(productC === productD){
return true;
} else {return false}
}
const productC = {name:'basketball', price: 1000};
const productD = {name:'socks', price: 2000};

console.log(isSameProduct(productC, productD));

//8f
const textMe= 'Good Morning';
console.log(textMe.toLowerCase());

//8g
console.log(textMe.repeat(4));

