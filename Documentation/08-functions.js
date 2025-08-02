FUNCTIONS
/*
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
*/
Example
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

//Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

//The parentheses may include parameter names separated by commas:
(parameter1, parameter2);

//The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

/*
Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.
*/


/*
Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:
1. When an event occurs (when a user clicks a button)
2. When it is invoked (called) from JavaScript code
3. Automatically (self invoked)
*/


FUNCTIONS //RETURN
/*
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":
*/

Example
//Calculate the product of two numbers, and return the result:

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

//Why Functions?
//To reuse code
//To write code that can be used many times.
//To use the same code with different arguments, to produce different results.



//The () Operator
//The () operator invokes (calls) the function:

Example
//Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);

//Accessing a function with incorrect parameters can return an incorrect answer:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let output = toCelsius();

//Accessing a function without () returns the function and not the function result:

Example
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let final = toCelsius;

//toCelsius refers to the function object, and toCelsius() refers to the function result.

/*
Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
*/

Example
//Instead of using a variable to store the return value of a function:
let a = toCelsius(77);
let message = "The temperature is " + a + " Celsius";
//You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";
/*
Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.
*/
Example
// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

/*
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.
*/


//FUNCTION DECLARATION
function greet(){
  console.log("Hello!");
} //not defined yet
greet(); //run the function (that it invoke it)

function add(a, b){
  return a + b;
}
let result = add(3,4);
console.log(result);
//PARAMETERS ARE LIKE VARIABLES INSIDE FUNCTIONS
//RETURNS SENDS A VALUE BACK TO WHERE THE FUNCTION WAS CALLED

//FUNCTIONS EXPRESSION
const sayHi = function(){
  console.log('Hi There!')
};
sayHi();
//Using a variable to store the function
//It can also be anonymous // not necessarily it has a name

function userName(name) {console.log(name);} 
userName('Timilehin');