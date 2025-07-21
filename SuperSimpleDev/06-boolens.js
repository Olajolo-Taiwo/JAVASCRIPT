3 + 5 === 8
true
3 + 5 !== 7
true
3 <= 5 
true
3 < 5
true
3 > 5
false
3 >= 5
false
5 == '5'
true
5 === '5'
false
5 != '5'
false
5 !== '5'
true
// let is write multiple groups of code
//and then decide which code to run
if (true) {console.log('hello');} else {console.log('bye');};
VM589:3 hello
undefined
if (false) {console.log('hello');} else {console.log('bye');};

VM603:1 bye
undefined
//practical example
//check if someone is old enough to drive
if (30 >= 16){
    console.log('eligible');} else {console.log('not eligible');};
VM921:4 eligible
undefined
//check if someone is old enough to drive
if (14 >= 16){
    console.log('eligible');} else {console.log('not eligible');};
VM928:3 not eligible
undefined
if (15 >= 16){
    console.log('eligible');} 
else if (15 >= 14){console.log('almost eligible');}
else {console.log('not eligible');};
VM1013:3 almost eligible
undefined
//if statement combination with variables
const age = 15;
if (age >= 16){
    console.log('eligible');} 
else if (age >= 14){console.log('almost eligible');}
else {console.log('not eligible');};

VM1190:5 almost eligible
undefined



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
VM1649:1 true
undefined
console.log(true && false);
VM1681:1 false
undefined
console.log(false && false);
VM1725:1 false
undefined
console.log(true || true);
VM1734:1 true
undefined
console.log(true || false);
VM1785:1 true
undefined
console.log(false || false);
VM1838:1 false
undefined
console.log(!false);
VM1862:1 true
undefined
console.log(!true);
VM1888:1 false
undefined
 */