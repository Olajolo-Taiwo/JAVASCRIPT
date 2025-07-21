//An Object is an Unordered Collection of Properties

//Properties are the most important part of JavaScript objects.
//Properties can be changed, added, deleted, and some are read only.

//The syntax for accessing the property of an object is:
// objectName.property
let age = person.age;
//objectName["property"]
let age = person["age"];
//objectName[expression]
let age = person[x];

Examples
person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";
let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old.";

//adding a new properties to an existing object by simply giving it a value:
Example
person.nationality = "English";
//The delete keyword deletes a property from an object

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
//or 
delete person["age"];

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
Note:
//The delete keyword deletes both the value of the property and the property itself.
//After deletion, the property cannot be used before it is added back again.

//Nested Objects: Property values in an object can be other objects
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
//nested objects can be accessed  using the dot notation or the bracket notation

Examples
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
