// Object methods are actions that can be performed on objects.

//A method is a function definition stored as a property value.

Value //Property
John //firstName	
Doe //lastName 
50 //age	
blue //eyeColor	
//function() {return this.firstName + " " + this.lastName;} //fullName	

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
//this refers to the person object:
this.firstName //means the firstName property of person.
this.lastName //means the lastName property of person.

// access an object method with the following syntax
objectName.methodName()
//If you invoke the fullName property with (), it will execute as a function:
Example
name = person.fullName();
//accessing the fullName property without (), it will return the function definition.
Example
name = person.fullName;
ADVERTISEMENT

//Adding a new method to an object is easy
Example
person.name = function () {
  return this.firstName + " " + this.lastName;
};
toUpperCase() //method to convert a text to uppercase:

Example
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};