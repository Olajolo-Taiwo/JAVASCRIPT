/*Search field
Search...
HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP HOW TO W3.CSS C C++ C# BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SASS VUE GEN AI SCIPY CYBERSECURITY DATA SCIENCE INTRO TO PROGRAMMING BASH RUST 

JavaScript Object Constructors
Object Constructor Functions
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter.

Object Type Person
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Note:
In the constructor function, this has no value.

The value of this will become the new object when a new object is created.

See Also:
The JavaScript this Tutorial

Now we can use new Person() to create many new Person objects:

Example
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
Property Default Values
A value given to a property will be a default value for all objects created by the constructor:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
Adding a Property to an Object
Adding a property to a created object is easy:

Example
myFather.nationality = "English";
Note:
The new property will be added to myFather. Not to any other Person Objects.

Adding a Property to a Constructor
You can NOT add a new property to an object constructor:

Example
Person.nationality = "English";
To add a new property, you must add it to the constructor function prototype:

Example
Person.prototype.nationality = "English";
Constructor Function Methods
A constructor function can also have methods:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
Adding a Method to an Object
Adding a method to a created object is easy:

Example
myMother.changeName = function (name) {
  this.lastName = name;
}
Note:
The new method will be added to myMother. Not to any other Person Objects.

Adding a Method to a Constructor
You cannot add a new method to an object constructor function.

This code will produce a TypeError:

Example
Person.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
 TypeError: myMother.changeName is not a function

Adding a new method must be done to the constructor function prototype:

Example
Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
Note:
The changeName() function assigns the value of name to the person's lastName property, substituting this with myMother.

Built-in JavaScript Constructors
JavaScript has built-in constructors for all native objects:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
Note:
The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

Did You Know?
Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().

Example
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function
Complete Object Reference
For a complete reference, go to our:

Complete JavaScript Object Reference.

The reference contains descriptions and examples of all Object Properties and Methods.

ADVERTISEMENT
Get Certified
COLOR PICKER
colorpicker
     
ADVERTISEMENT

PLUS
SPACES
GET CERTIFIED
FOR TEACHERS
FOR BUSINESS
CONTACT US
Top Tutorials
HTML Tutorial
CSS Tutorial
JavaScript Tutorial
How To Tutorial
SQL Tutorial
Python Tutorial
W3.CSS Tutorial
Bootstrap Tutorial
PHP Tutorial
Java Tutorial
C++ Tutorial
jQuery Tutorial
Top References
HTML Reference
CSS Reference
JavaScript Reference
SQL Reference
Python Reference
W3.CSS Reference
Bootstrap Reference
PHP Reference
HTML Colors
Java Reference
Angular Reference
jQuery Reference
Top Examples
HTML Examples
CSS Examples
JavaScript Examples
How To Examples
SQL Examples
Python Examples
W3.CSS Examples
Bootstrap Examples
PHP Examples
Java Examples
XML Examples
jQuery Examples
Get Certified
HTML Certificate
CSS Certificate
JavaScript Certificate
Front End Certificate
SQL Certificate
Python Certificate
PHP Certificate
jQuery Certificate
Java Certificate
C++ Certificate
C# Certificate
XML Certificate
    
FORUM ABOUT ACADEMY
W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.

Copyright 1999-2025 by Refsnes Data. All Rights Reserved. W3Schools is Powered by W3.CSS.


*/