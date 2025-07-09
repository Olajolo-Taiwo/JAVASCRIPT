/**
 * Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
 */
x = 5;
y = 6;
z = x + y;
//z stores 11

//x, y, and z are undeclared variables.They are automatically declared when first used

//It is considered good programming practice to always declare variables before use.

//var -Only use var if you MUST support old browsers.
var x = 5;
var y = 6;
var z = x + y;

//let -  Only use let if you can't use const

let x = 5;
let y = 6;
let z = x + y;

//const - Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)

const x = 5;
const y = 6;
const z = x + y;

//EXERCISE
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

//<p id="demo"></p>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;

let person = "John Doe",
catName = "Volvo",
price = 200;

//Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
//In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

//Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

