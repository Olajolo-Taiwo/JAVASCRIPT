//data types refer to the kinds of values you can work with.

//🔹 1. Primitive Data Types (These are basic types that store single values and are immutable.)
String	
"hello"	//Text enclosed in quotes.
Number	
42, 3.14	//Any numeric value (integer or float).
Boolean	
true, false	//Logical values.
Null	
null	//Intentionally empty value.
Undefined	
undefined	//Variable declared but not assigned a value.
Symbol	
Symbol("id")	//Unique and immutable identifier (ES6).
BigInt	
12345678901234567890n	//Large integers beyond Number limits (ES2020).

EXAMPLE// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


/*Exponential Notation
Extra large or extra small numbers can be written with scientific (exponential) notation:
*/
Example
let m = 123e5;    // 12300000
let n = 123e-5;   // 0.00123

/*
Most programming languages have many number types:

Whole numbers (integers):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).

Javascript numbers are always one type:
double (64-bit floating point).
*/

//All JavaScript numbers are stored in a 64-bit floating-point format.

//JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

Example
let z = BigInt("123456789012345678901234567890");

//BOOLEANS
let r = 5;
let s = 5;
let t = 6;
(r == s)       // Returns true
(r == t)       // Returns false
//Booleans are often used in conditional testing.



//🔹 2. Non-Primitive (Reference) Data Types - (These hold collections or more complex data.)

Object	
//{ name: "John", age: 30 }; //	A collection of key-value pairs.
Array	
[1, 2, 3, 4]	//An ordered list (special kind of object).
Function	
function greet() { }//	A reusable block of code (also an object).
Date	
new Date()	//Handles date and time values.
RegExp	 //Used for pattern matching with strings.


//🧠 Extra Notes
//TO CHECK THE DATA TYPE Use typeof to check the type of a value:
//typeof "hi" // "string"
//typeof 10   // "number"
//typeof null    // "object" (this is a known quirk in JavaScript)


/*JavaScript Types are Dynamic
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
*/
Example
let g;       // Now g is undefined
g = 5;       // Now g is a Number
g = "John";  // Now g is a String

//JavaScript objects are written with curly braces {}.
//Object properties are written as name:value pairs, separated by commas.
Example
const human = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

//In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

Example
let car;    // Value is undefined, type is undefined

//Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

Example
car = undefined;    // Value is undefined, type is undefined

//An empty value has nothing to do with undefined.
//An empty string has both a legal value and a type.

Example
let bus = "";    // The value is "", the typeof is "string"