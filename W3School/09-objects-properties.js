/*Search field
Search...
HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP HOW TO W3.CSS C C++ C# BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SASS VUE GEN AI SCIPY CYBERSECURITY DATA SCIENCE INTRO TO PROGRAMMING BASH RUST 
JavaScript Object Properties
An Object is an Unordered Collection of Properties
Properties are the most important part of JavaScript objects.

Properties can be changed, added, deleted, and some are read only.

Accessing JavaScript Properties
The syntax for accessing the property of an object is:

// objectName.property
let age = person.age;
or

//objectName["property"]
let age = person["age"];
or

//objectName[expression]
let age = person[x];
Examples
person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";
let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old.";
Adding New Properties
You can add new properties to an existing object by simply giving it a value:

Example
person.nationality = "English";
Deleting Properties
The delete keyword deletes a property from an object:

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
or delete person["age"];

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
Note:
The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

Nested Objects
Property values in an object can be other objects:

Example
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
You can access nested objects using the dot notation or the bracket notation:

Examples
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
Complete Object Reference
For a complete reference, go to our:

Complete JavaScript Object Reference.

The reference contains descriptions and examples of all Object Properties and Methods.

Get Certified
COLOR PICKER
colorpicker
     
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