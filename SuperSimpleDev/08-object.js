//OBJECT - JS VALUE - it groups related values together
const product = {
name: 'socks', 
price: 1090}
console.log(product);
//{name: 'socks', price: 1090} (OUTPUT)

//js object
//name and price are the properties of product (OBJECT). The property of an object is used to access specific value in the object.

//e.g
const product1 = {
name: 'socks', 
price: 1090}
console.log(product1.name);
//socks (OUTPUT)

//the property can be also used to change a value in the object

//eg
const product2 = {
name: 'socks', 
price: 1090}

product2.name = 'MacBook'
console.log(product2);
//{name: 'MacBook', price: 1090} (OUTPUT

//socks and 1090 are called the value of object property

// name: 'socks' - A property-value pair
//product1.name - Dot Notation
//product1['name'] - Bracket Notation
//product1.notExist - undefined output

//product1.newProperty - used to add new property to an object
//delete product1.name - used to delete property

///eg
const product3 = {
name: 'socks', 
price: 1090};

product3.name = 'MacBook'
product3.newProperty = 'Bag'
delete product3.price;
console.log(product3);
//{name: 'MacBook', newProperty: 'Bag'} (OUTPUT)

//WHY OBJECT IS USED
//organize codes more - avoid creating bunch of variables
//used of multiple values together

//BRACKET NOTATION IS SIMILAR TO DOT NOTATION BUT UTS IS ANOTHER METHOD
//why it is important is :
const product4 = {
name: 'socks', 
'delivery-time': '1 day'//adding a property to the object using bracket notation
}
console.log(product4['delivery-time']);
console.log(product4.name);
console.log(product4);
//OUTPUT
//1 day
//socks
//{name: 'socks', delivery-time: '1 day'}

//INSIDE THE OBJECT WE CAN SAVE ANOTHER VALUE EVEN OBJECT
//An object inside another object - nested object

const product5 = {
name: 'socks', 
'delivery-time': '1 day',
rating: {
stars: 4.5 
},
fun: function myFunction (){ alert('Hello World!');}
}
console.log(product5.rating.stars);
product5.fun()
//FUNCTION INSIDE AN OBJECT = Method


//built in object
/* JavaScript Object Notation
- a syntax (all property and strings must be double quote and json does not support function
- similar to JavaScript object
- but has less features
*/
//why json?
//JS OBJECT only makes sense in Js but Json is more universal, it can be used for any programming language

//therefore, JSON is used when we send data between computers
// it's used to store data

// built in JSON object
//it convert js object to json

//let's convert product3 object to json
JSON.stringify()
console.log(JSON.stringify(product3));
//{"name":"MacBook","newProperty":"Bag"} (OUTPUT)

// stringify result in a string

//after converting js object to json
// the result can be store or send out to a computer

//to convert json to js object
JSON.parse()
const jsonString = JSON.stringify(product3);
console.log(JSON.parse(jsonString));
// {name: 'MacBook', newProperty: 'Bag'} (OUTPUT) 

//BUILT IN OBJECT 2
/*
localStorage
-save values more permanently
*/
//e.g - to save variable permanently
//Variables are temporary - when the page is refresh or close all variables are deleted
localStorage.setItem()
//to save items in a local storage
//local storage only support string
localStorage.getItem();
//it gets items out  of the saved local storage

e.g
localStorage.setItem('message', 'hello');
console.log(localStorage.getItem('items'));
hello //OUTPUT


localStorage.removeItem() // to reset local storage
// remember JSON supports strings - to use in js - you have to convert it to js object

//null is similar to null
// difference
//null is intentionally used, it we want something to be empty
e.g
function myFunction(parameter = 'default'){console.log(parameter);}
myFunction(); //default
myFunction(undefined); //default
myFunction(null); 


//other values also has properties
e.g //string
console.log('hello'.length);
//it tells use the number of the string character
5 //OUTPUT

console.log('hello'.toUpperCase());
HELLO //OUTPUT 

//why is this possible?
//because js has a special features called Auto-Boxing (a special object)
//auto boxing also works with other values expect null and undefined


//REFERENCING 

const object2 = {name: 'Timilehin'};
//const prevent us of changing value but referencing it can be used

const object1 = object2;
//js doesn't automatically copy the object1 to 2 but instead reference object1 in object2

object2.name = 'Janet';
console.log(object2);
{name: 'Janet'} //(OUTPUT)

console.log(object1);
{name: 'Janet'} // (OUTPUT)

const object3 = {name: 'Timilehin'};

object2 !== object3
object2 === object1

//OBJECT SHORTCUTS
//instead of
const object4 = {name: 'Timilehin'};
//const message = object4.message
use
const { name } = object4; - destructuring
//it will take the message property out of an object then save in a message variable

const object5 = {name1: 'Timilehin', gender: 'female'};
//const message = object4.message
use
const { name1, gender } = object4;

//short hand property
const object6 = {
//name: name SINCE the property and variable name is the same you can use name1
name1
};
console.log(object1);
{name: 'Timilehin'} //OUTPUT

//short hand method
instead //of
const object7 = {
name1,
method: function myFunction(){console.log('method')}
};
console.log(object1);
object5.method();
//use
const object8 = {
name1,
method(){console.log('method')}
};

//