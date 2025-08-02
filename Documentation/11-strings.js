/*JavaScript Events
HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:

<element event='some JavaScript'>
With double quotes:

<element event="some JavaScript">
In the following example, an onclick attribute (with code), is added to a <button> element:

Example
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
In the example above, the JavaScript code changes the content of the element with id="demo".

In the next example, the code changes the content of its own element (using this.innerHTML):

Example
<button onclick="this.innerHTML = Date()">The time is?</button>
JavaScript code is often several lines long. It is more common to see event attributes calling functions:

Example
<button onclick="displayDate()">The time is?</button>/

Common HTML Events
Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
The list is much longer: W3Schools JavaScript Reference HTML DOM Events.

JavaScript Event Handlers
Event handlers can be used to handle and verify user input, user actions, and browser actions:

Things that should be done every time a page loads
Things that should be done when the page is closed
Action that should be performed when a user clicks a button
Content that should be verified when a user inputs data
And more ...
Many different methods can be used to let JavaScript work with events:

HTML event attributes can execute JavaScript code directly
HTML event attributes can call JavaScript functions
You can assign your own event handler functions to HTML elements
You can prevent events from being sent or being handled
And more ...
You will learn a lot more about events and event handlers in the HTML DOM chapters.
*/


/*
JavaScript String Methods
Basic String Methods
Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
See Also:
String Tutorial
String Search
String Templates
String Reference
JavaScript String Length
The length property returns the length of a string:

Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:

Example
let text = "HELLO WORLD";
let char = text.charAt(0);
JavaScript String charCodeAt()
The charCodeAt() method returns the code of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

Example
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
JavaScript codePointAt()
Examples
Get code point value at the first position in a string:

let text = "HELLO WORLD";
let code = text.codePointAt(0);
JavaScript String at()
ES2022 introduced the string method at():

Examples
Get the third letter of name:

const name = "W3Schools";
let letter = name.at(2);
Get the third letter of name:

const name = "W3Schools";
let letter = name[2];
The at() method returns the character at a specified index (position) in a string.

The at() method is supported in all modern browsers since March 2022:

Note
The at() method is a new addition to JavaScript.

It allows the use of negative indexes while charAt() do not.

Now you can use myString.at(-2) instead of charAt(myString.length-2).
Browser Support
at() is an ES2022 feature.

JavaScript 2022 is supported in all modern browsers since March 2023:

Chrome 94	Edge 94	Firefox 93	Safari 16.4	Opera 79
Sep 2021	Sep 2021	Oct 2021	Mar 2023	Oct 2021
Property Access [ ]
Example
let text = "HELLO WORLD";
let char = text[0];
Note
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
Example
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work
JavaScript String concat()
concat() joins two or more strings:

Example
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
The concat() method can be used instead of the plus operator. These two lines do the same:

Example
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.

Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).

Example
Slice out a portion of a string from position 7 to position 13:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
Note
JavaScript counts positions from zero.

First position is 0.

Second position is 1.

Examples
If you omit the second parameter, the method will slice out the rest of the string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
If a parameter is negative, the position is counted from the end of the string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
This example slices out a portion of a string from position -12 to position -6:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);
JavaScript String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

Example
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
If you omit the second parameter, substring() will slice out the rest of the string.

JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

Warning
The substr() method is removed (deprecated) in the latest JavaScript standard.

Use substring() or slice() instead.

Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
If you omit the second parameter, substr() will slice out the rest of the string.

Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
If the first parameter is negative, the position counts from the end of the string.

Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

JavaScript String toUpperCase()
Example
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
JavaScript String toLowerCase()
Example
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
JavaScript String isWellFormed()
The isWellFormed() method returns true if a string is well formed.

Otherwise it returns false.

A string is not well formed if it contains lone surrogates.

Examples
let text = "Hello world!";
let result = text.isWellFormed();
let text = "Hello World \uD800";
let result = text.isWellFormed();
Lone Surrogates
A lone surrogate is a Unicode surrogate code point that is not part of a valid surrogate pair used to represent characters in UTF-16 encoding.

JavaScript String toWellFormed()
The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).

Examples
let text = "Hello World \uD800";
let result = text.toWellFormed();
JavaScript String trim()
The trim() method removes whitespace from both sides of a string:

Example
let text1 = "      Hello World!      ";
let text2 = text1.trim();
JavaScript String trimStart()
ECMAScript 2019 added the String method trimStart() to JavaScript.

The trimStart() method works like trim(), but removes whitespace only from the start of a string.

Example
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
JavaScript String trimStart() is supported in all modern browsers since January 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
JavaScript String trimEnd()
ECMAScript 2019 added the string method trimEnd() to JavaScript.

The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

Example
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();
JavaScript String trimEnd() is supported in all modern browsers since January 2020:

Chrome 66	Edge 79	Firefox 61	Safari 12	Opera 50
Apr 2018	Jan 2020	Jun 2018	Sep 2018	May 2018
JavaScript String Padding
ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

JavaScript String padStart()
The padStart() method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length.

Examples
Pad a string with "0" until it reaches the length 4:

let text = "5";
let padded = text.padStart(4,"0");
Pad a string with "x" until it reaches the length 4:

let text = "5";
let padded = text.padStart(4,"x");
Note
The padStart() method is a string method.

To pad a number, convert the number to a string first.

See the example below.

Example
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
Browser Support
padStart() is an ECMAScript 2017 feature.

ES2017 is supported in all modern browsers since September 2017:

Chrome 58	Edge 15	Firefox 52	Safari 11	Opera 45
Apr 2017	Apr 2017	Mar 2017	Sep 2017	May 2017
padStart() is not supported in Internet Explorer.

JavaScript String padEnd()
The padEnd() method pads a string from the end.

It pads a string with another string (multiple times) until it reaches a given length.

Examples
let text = "5";
let padded = text.padEnd(4,"0");
let text = "5";
let padded = text.padEnd(4,"x");
Note
The padEnd() method is a string method.

To pad a number, convert the number to a string first.

See the example below.

Example
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
Browser Support
padEnd() is an ECMAScript 2017 feature.

ES2017 is supported in all modern browsers since September 2017:

Chrome 58	Edge 15	Firefox 52	Safari 11	Opera 45
Apr 2017	Apr 2017	Mar 2017	Sep 2017	May 2017
padEnd() is not supported in Internet Explorer.

JavaScript String repeat()
The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

The repeat() method does not change the original string.

Examples
Create copies of a text:

let text = "Hello world!";
let result = text.repeat(2);
let text = "Hello world!";
let result = text.repeat(4);
Syntax
string.repeat(count)
Parameters
Parameter	Description
count	Required.
The number of copies wanted.
Return Value
Type	Description
String	A new string containing the copies.
Browser Support
repeat() is an ES6 feature (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:

Chrome 51	Edge 15	Firefox 54	Safari 10	Opera 38
May 2016	Apr 2017	Jun 2017	Sep 2016	Jun 2016
repeat() is not supported in Internet Explorer.

Replacing String Content
The replace() method replaces a specified value with another value in a string:

Example
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
Note
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the replace() method replaces only the first match:

Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

Example
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");

To replace case insensitive, use a regular expression with an /i flag (insensitive):

Example
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

Note
Regular expressions are written without quotes.

To replace all matches, use a regular expression with a /g flag (global match):

Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

Note
You will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions.

JavaScript String ReplaceAll()
In 2021, JavaScript introduced the string method replaceAll():

Example
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

Example
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
Note
replaceAll() is an ES2021 feature.

replaceAll() does not work in Internet Explorer.

Converting a String to an Array
If you want to work with a string as an array, you can convert it to an array.

JavaScript String split()
A string can be converted to an array with the split() method:

Example
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

Example
text.split("")

*/




/*
String Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
See Also:
String Tutorial
String Methods
String Templates
String Reference
JavaScript String indexOf()
The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

Example
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
Note
JavaScript counts positions from zero.

0 is the first position in a string, 1 is the second, 2 is the third, ...

JavaScript String lastIndexOf()
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

Example
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
Both indexOf(), and lastIndexOf() return -1 if the text is not found:

Example
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("John");
Both methods accept a second parameter as the starting position for the search:

Example
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

Example
let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15);
JavaScript String search()
The search() method searches a string for a string (or a regular expression) and returns the position of the match:

Examples
let text = "Please locate where 'locate' occurs!";
text.search("locate");
let text = "Please locate where 'locate' occurs!";
text.search(/locate/);
Did You Notice?
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
You will learn more about regular expressions in a later chapter.

JavaScript String match()
The match() method returns an array containing the results of matching a string against a string (or a regular expression).

Examples
Perform a search for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
Perform a search for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/);
Perform a global search for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);
Perform a global, case-insensitive search for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);
Note
If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

Read more about regular expressions in the chapter JS RegExp.

JavaScript String matchAll()
The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

Example
const iterator = text.matchAll("Cats");
If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

Example
const iterator = text.matchAll(/Cats/g);
If you want to search case insensitive, the insensitive flag (i) must be set:

Example
const iterator = text.matchAll(/Cats/gi);
Notes
matchAll() is an ES2020 feature.

matchAll() does not work in Internet Explorer.

JavaScript String includes()
The includes() method returns true if a string contains a specified value.

Otherwise it returns false.

Examples
Check if a string includes "world":

let text = "Hello world, welcome to the universe.";
text.includes("world");
Check if a string includes "world". Start at position 12:

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
Notes
includes() is case sensitive.

includes() is an ES6 feature.

includes() is not supported in Internet Explorer.

JavaScript String startsWith()
The startsWith() method returns true if a string begins with a specified value.

Otherwise it returns false:

Examples
Returns true:

let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
Returns false:

let text = "Hello world, welcome to the universe.";
text.startsWith("world")
A start position for the search can be specified:

Returns false:

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5)
Returns true:

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6)
Notes
startsWith() is case sensitive.

startsWith() is an ES6 feature.

startsWith() is not supported in Internet Explorer.

JavaScript String endsWith()
The endsWith() method returns true if a string ends with a specified value.

Otherwise it returns false:

Examples
Check if a string ends with "Doe":

let text = "John Doe";
text.endsWith("Doe");
Check if the 11 first characters of a string ends with "world":

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);

Notes
endsWith() is case sensitive.

endsWith() is an ES6 feature.

endsWith() is not supported in Internet Explorer.

*/


/*
JavaScript Template Strings
String Templates
Template Strings
Template Literals
Beloved child has many names

Back-Tics Syntax
Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

Example
let text = `Hello World!`;

Quotes Inside Strings
Template Strings allow both single and double quotes inside a string:

Example
let text = `He's often called "Johnny"`;

Multiline Strings
Template Strings allow multiline strings:

Example
let text =
`The quick
brown fox
jumps over
the lazy dog`;

Interpolation
Template String provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

${...}
Variable Substitutions
Template Strings allow variables in strings:

Example
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

Automatic replacing of variables with real values is called string interpolation.

Expression Substitution
Template Strings allow expressions in strings:

Example
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

Automatic replacing of expressions with real values is called string interpolation.

HTML Templates
Example
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;


*/
