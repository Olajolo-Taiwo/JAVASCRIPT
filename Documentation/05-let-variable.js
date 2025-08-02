/*
LET was introduced in ES6 (2015)
let have Block Scope
It must be Declared before use
let cannot be Redeclared in the same scope
*/

/*
Before ES6 (2015), JavaScript did not have Block Scope.
JavaScript had Global Scope and Function Scope.
ES6 introduced the two new JavaScript keywords: let and const.
These two keywords provided Block Scope in JavaScript:
Example
Variables declared inside a { } block cannot be accessed from outside the block:
*/
{
  let x = 2;
}
/* x can NOT be used here
Global Scope
var always have Global Scope.
var keyword can NOT have block scope:
Example
Variables declared with varinside a { } block can be accessed from outside the block:
*/
{
  var x = 2;
}
/*
x CAN be used here
Cannot be Redeclared
Variables defined with let can not be redeclared.
You can not accidentally redeclare a variable declared with let.
With let you can not do this:
*/

let x = "John Doe";

let x = 0;
//Variables defined with var can be redeclared.
//With var you can do this:

var x = "John Doe";

var x = 0;
//Redeclaring Variables
//Redeclaring a variable using the var keyword can impose problems.
//Redeclaring a variable inside a block will also redeclare the variable outside the block:
Example
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
//Redeclaring a variable using the let keyword can solve this problem.
//Redeclaring a variable inside a block will not redeclare the variable outside the block:
Example
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

//Redeclaring a JavaScript variable with var is allowed anywhere in a program:

Example
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
//With let, redeclaring a variable in the same block is NOT allowed:

Example
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
//let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
//Redeclaring a variable with let, in another block, IS allowed:

Example
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}
//Let Hoisting
//Variables defined with var are hoisted to the top and can be initialized at any time.Meaning: You can use the variable before it is declared:

Example
//This is OK:
carName = "Volvo";
var carName;
//If you want to learn more about hoisting, study the chapter JavaScript Hoisting.
//Variables defined with let are also hoisted to the top of the block, but not initialized.Meaning: Using a let variable before it is declared will result in a ReferenceError:

Example
carName = "Saab";
let carName = "Volvo";


/*Exercise
What is a correct use of the let keyword?

let x = 5;
x let 5;
let 5 into x;
x = 5(let);
*/