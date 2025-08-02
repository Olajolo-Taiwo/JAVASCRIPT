3 + 5 === 8
true (OUTPUT)

3 + 5 !== 7
true (OUTPUT)

3 <= 5 
true (OUTPUT)

3 < 5
true (OUTPUT)

3 > 5
false (OUTPUT)

3 >= 5
false (OUTPUT)

5 == '5'
true (OUTPUT)

5 === '5'
false (OUTPUT)

5 != '5'
false (OUTPUT)

5 !== '5'
true (OUTPUT)

//ADVANTAGE OF IF STATEMENT
//  let us write multiple groups of code
//and then decide which code to run
if (true) {console.log('hello');
} else {console.log('bye');};
//VM589:3 hello (OUTPUT)

if (false) {console.log('hello');   
} else {console.log('bye');};
//VM603:1 bye (OUTPUT)

//practical example
//check if someone is old enough to drive
if (30 >= 16){
console.log('eligible');
} else {console.log('not eligible');};
//VM921:4 eligible (OUTPUT)

//check if someone is old enough to drive
if (14 >= 16){
console.log('eligible');
} else {console.log('not eligible');};
//VM928:3 not eligible (OUTPUT)

if (15 >= 16){
    console.log('eligible');
} else if (15 >= 14){
    console.log('almost eligible');
} else {console.log('not eligible');};
//VM1013:3 almost eligible (OUTPUT)


//if statement combination with variables
const age = 15;
if (age >= 16){
    console.log('eligible');
} else if (age >= 14){
    console.log('almost eligible');
} else {console.log('not eligible');};
//VM1190:5 almost eligible (OUTPUT)

//NOTES
/**
    COMPARISM OPERATOR
 * ===
 * ==
 * >=
 * !==
 * e.t.c

    LOGICAL OPERATORS
 * && - AND Operator
 * || - OR  Operator
 * !  - NOT Operator
 */

    //EXAMPLE
/**
 * console.log(true && true);
VM1649:1 true (OUTPUT)

console.log(true && false);
VM1681:1 false (OUTPUT)

console.log(false && false);
VM1725:1 false (OUTPUT)

console.log(true || true);
VM1734:1 true (OUTPUT)

console.log(true || false);
VM1785:1 true (OUTPUT)

console.log(false || false);
VM1838:1 false (OUTPUT)

console.log(!false);
VM1862:1 true (OUTPUT)

console.log(!true);
VM1888:1 false (OUTPUT)
 */



//TRUTHY and FALSY
//if statement can work with any type of value not just true and false
//e.g number, strings

//falsy value are: false 0 NaN undefined null

//every other values are true

//eg
const cartQuantity = 5;

//instead of 
if (cartQuantity > 0){
    console.log('cart has products');
}

//we can use
if (cartQuantity){
    console.log('cart has products');
}

//therefore since cartQuantity = 5 the statement behaves like truthy
//but if cartQuantity = 0 the statement behaves like falsy


//NaN - Not a number
console.log('text'/5); 

//UNDEFINED - When a variable does not have a value



//SHORTCUTS for IF-Statements
//Ternary Operator ?:
//Guard Operator &&
//Default Operator ||  