Const
/*introduced in ES6 (2015)
cannot be Redeclared
cannot be reassigned:
*/
Example
const PI = 3.141592653589793;
//PI = 3.14; // This will give an error
//PI = PI + 10; // This will also give an error
//Must be Assigned

//const variables must be assigned a value when they are declared:
Correct
//const PI = 3.14159265359;
Incorrect
//const PI;
PI = 3.14159265359;


/*When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.
Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp
Constant Objects and Arrays
The keyword const is a little misleading.
It does not define a constant value. It defines a constant reference to a value.

 Because of this you can NOT:
Reassign a constant value Reassign a constant array Reassign a constant object But you CAN:
Change the elements of constant array
Change the properties of constant object Constant Arrays
You can change the elements of a constant array:
*/

Example
// You can create a constant array: const cars = ["Saab", "Volvo", "BMW"];
// You can change an element: cars[0] = "Toyota";
// You can add an element: cars.push("Audi");
//But you can NOT reassign the array:
Example
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // ERROR Constant Objects
//You can change the properties of a constant object:
Example
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property: car.color = "red";
// You can add a property:
car.owner = "Johnson";
//But you can NOT reassign the object:
Example
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"} 
 //Difference Between var, let and const

/* Scope Redeclare Reassign Hoisted var No Yes Yes Yes Yes
let Yes No Yes No No const Yes No No No No What is Good?
let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.
What is Not Good?
var does not have to be declared.
var is hoisted.
var binds to this.
// ERROR Binds this
Browser Support


Block Scope
Declaring a variable with const is similar to let when it comes to Block Scope.
The x declared in the block, in this example, is not the same as the x declared outside the block:
*/
//Redeclaring a JavaScript var variable is allowed anywhere in a program:
Example
var x = 2;
var x = 3;
x = 4;
//Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
Example
varx=2; // Allowed const x = 2; // Not allowed
{
let x = 2; // Allowed const x = 2; // Not allowed 
}
{
const b = 2; // Allowed
//const b = 2; // Not allowed
}
//Reassigning an existing const variable, in the same scope, is not allowed:

Example 
const x = 2; x = 2;
var x = 2; let x = 2; const x = 2;
// Allowed // Not allowed
// Not allowed // Not allowed
// Not allowed
{
const x = 2;
//x = 2;
var x = 2; //let x = 2; const x = 2;
// Allowed
// Allowed // Allowed
// Allowed // Not allowed
// Not allowed // Not allowed
// Not allowed
}

//Redeclaring a variable with const, in another scope, or in another block, is allowed:
Example 
const x = 2;
{ } {
const x = 3;
//const x = 4;
}
/*
Hoisting
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared:
*/
Example 
//This is OK:
carName = "Volvo";
var carName;

/*
If you want to learn more about hoisting, study the chapter JavaScript Hoisting.
Variables defined with const are also hoisted to the top, but not initialized.
Meaning: Using a const variable before it is declared will result in a ReferenceError:
*/
Example
alert (carName);
const carName = "Volvo";