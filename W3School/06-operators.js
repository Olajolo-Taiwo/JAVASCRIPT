/*
= (assignment operator)
used to assign a variable

+ (Addition Operator)
used to add numbers

* (multiplication operator)
used to multiply numbers 
*/

//TYPES OF OPERATIONS
/* 
ARITHMETIC OPERATORS 
used to perform arithmetic on number
*/
let a = 3;
let x = (100 + 50) * a;
/*
+ addition
- subtraction
* multiplication
** exponentiation
/ division
% modulus (division remainder)
++ increment
-- decrement
*/


/* ASSIGNMENT OPERATORS 
Assignment operators assign values to JavaScript variables.
*/
// =	
EXAMPLE
x = y	
x = y //OUTPUT

//+=	Addition Assignment Operator 
EXAMPLE 
x += y	
x = x + y //OUTPUT

//-=	Subtraction Assignment Operator 
EXAMPLE
x -= y	
x = x - y //OUTPUT

//*=	
EXAMPLE
x *= y	
x = x * y //OUTPUT

// (/=)
EXAMPLE
x /= y	
x = x / y //OUTPUT

// %=	
EXAMPLE
x %= y	
x = x % y //OUTPUT

//**=	
EXAMPLE
x **= y	
x = x ** y //OUTPUT


/* COMPARISON OPERATORS
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
*/


/*
STRING COMPARISON
 */
//Note that strings are compared alphabetically:
Example
let text1 = "20";
let text2 = "5";
let result = text1 < text2;

//JavaScript String Addition : The + can also be used to add (concatenate) strings:
Example
let text4 = "John";
let text5 = "Doe";
let text6 = text4 + " " + text5;

//The += assignment operator can also be used to add (concatenate) strings:
Example
let text7 = "What a very ";
text7 += "nice day";

//The result of text1 will be: What a very nice day

//When used on strings, the + operator is called the concatenation operator.

/*Adding Strings and Numbers
Adding two numbers, will return the sum as a number like 5 + 5 = 10.

Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".
*/
Example
let r = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
//The result of x, y, and z will be:
10
55
Hello5


/* LOGICAL OPERATORS
&&	logical and
||	logical or
!	logical not
*/

/**
TYPE OPERATORS
typeof	(Returns the type of a variable)
instanceof	(Returns true if an object is an instance of an object type)
 */

/**
 * BITWISE OPERATORS
 * Bit operators work on 32 bits numbers.
Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
 */
&	(AND)
EXAMPLE
5 & 1	 
// (same as) 0101 & 0001	
//output 0001	(1)

|	(OR)	
EXAMPLE
5 | 1	
// (same as) 10101 | 0001
// output 0101	(5) 

~	(NOT)
EXAMPLE
~ 5	 
// (same as) ~0101	
// output 1010	 (10)


^	(XOR)	
EXAMPLE
5 ^ 1	
// 0101 ^ 0001 (same as)
// output 	0100	(4)

<<	(leftShift)	
EXAMPLE
5 << 1	
// (same as) 0101 << 1	
// output 1010	 (10)

>>	(rightShift)
EXAMPLE
5 >> 1	
// (same as) 0101 >> 1
// output 0010	  (2)

>>>	(unsignedRightShift)	
EXAMPLE
5 >>> 1	
// (same as) 0101 >>> 1	
// output 0010	(2)

/**
 * The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.
~00000000000000000000000000000101 will return 11111111111111111111111111111010
 */