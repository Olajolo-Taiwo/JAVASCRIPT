document.getElementById("demo").innerHTML = "Hello Dolly.";
//js statement

let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
//Semicolons separate JavaScript statements.

a = 5; b = 6; c = a + b;
//When separated by semicolons, multiple statements on one line are allowed:

let person = "Hege";
//let person="Hege";  //WHITE SPACE

//JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
//A good practice is to put spaces around operators ( = + - * / ):
let x = y + z;


//For best readability, programmers often like to avoid code lines longer than 80 characters.
//If a JavaScript statement does not fit on one line, the best place to break it is after an operator:
document.getElementById("demo").innerHTML =
"Hello Dolly!";

//JavaScript Code Blocks
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
//JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
//The purpose of code blocks is to define statements to be executed together.

//KEYWORDS
//var	//Declares a variable
//let	//Declares a block variable
//const	//Declares a block constant
//if	//Marks a block of statements to be executed on a condition
//switch	//Marks a block of statements to be executed in different cases
//for	//Marks a block of statements to be executed in a loop
//function	//Declares a function
//return	//Exits a function
//try	//Implements error handling to a block of statements
