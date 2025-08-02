//1
//1a
function calRect (length, breadth){
    const areaRect = length * breadth;
    return areaRect;
} console.log(calRect(7,5));

//1b
function userInfo (name, age){
    return `Hello ${name}, you are ${age} years old`;
} console.log(userInfo('Sarah', 25));


//2
//2a(i)
let studentA = {
  name: "Timilehin",
  age: 20,
  department:  "ABE",
  greet: function(){
    return `Hi, I'm ${this.name}, and I study ${this.department}`;}
}; console.log(studentA.greet());

//2a(ii)
const studentB = {
    name: "Dave",
    level: 200,
    course: "MWE",
    result: function(value, grade){
        return `Hello ${this.name}. A ${this.level} level student of the department ${this.course}. Congratulation, you had ${value}${grade}s.`
    } 
}; console.log(studentB.result(7, 'A'));
studentB.age = 21;
delete studentB.age;
console.log(studentB);

