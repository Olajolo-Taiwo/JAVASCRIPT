/**
 * Search field
Search...
HTML CSS JAVASCRIPT SQL PYTHON JAVA PHP HOW TO W3.CSS C C++ C# BOOTSTRAP REACT MYSQL JQUERY EXCEL XML DJANGO NUMPY PANDAS NODEJS DSA TYPESCRIPT ANGULAR GIT POSTGRESQL MONGODB ASP AI R GO KOTLIN SASS VUE GEN AI SCIPY CYBERSECURITY DATA SCIENCE INTRO TO PROGRAMMING BASH RUST 

JavaScript Array Search
Array Search Methods
Array indexOf()
Array lastIndexOf()
Array includes()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()
See Also:
Array Tutorial
Array Basic Methods
Array Sort Methods
Array Iteration Methods
Array Reference
JavaScript Array indexOf()
The indexOf() method searches an array for an element value and returns its position.

Note: The first item has position 0, the second item has position 1, and so on.

Example
Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
Syntax
array.indexOf(item, start)
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

JavaScript Array lastIndexOf()
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

Example
Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
Syntax
array.lastIndexOf(item, start)
item	Required. The item to search for
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
JavaScript Array includes()
ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
Syntax
array.includes(search-item)
Array.includes() allows to check for NaN values. Unlike Array.indexOf().

Browser Support
includes() is an ECMAScript 2016 feature.

ES 2016 is fully supported in all modern browsers since March 2017:

Chrome 52	Edge 15	Firefox 52	Safari 10.1	Opera 39
Jul 2016	Apr 2017	Mar 2017	May 2017	Aug 2016
includes() is not supported in Internet Explorer.

JavaScript Array find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
find() is an ES6 feature (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
find() is not supported in Internet Explorer.

JavaScript Array findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
findIndex() is an ES6 feature (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
findIndex() is not supported in Internet Explorer.

JavaScript Array findLast() Method
ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
Browser Support
findLast() is an ES2023 feature.

JavaScript 2023 is supported in all modern browsers since July 2023:

Chrome 110	Edge 110	Firefox 115	Safari 16.4	Opera 96
Feb 2023	Feb 2023	Jul 2023	Mar 2023	May 2023
JavaScript Array findLastIndex() Method
The findLastIndex() method finds the index of the last element that satisfies a condition.

Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
Browser Support
findLastIndex() is an ES2023 feature.

JavaScript 2023 is supported in all modern browsers since July 2023:

Chrome 110	Edge 110	Firefox 115	Safari 16.4	Opera 96
Feb 2023	Feb 2023	Jul 2023	Mar 2023	May 2023
Complete JavaScript Reference
For a complete reference to all JavaScript properties and methods, with full descriptions and many examples, go to:

W3Schools' Full JavaScript Reference.

The reference inludes all JavaScript updates from 1999 to 2025.

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