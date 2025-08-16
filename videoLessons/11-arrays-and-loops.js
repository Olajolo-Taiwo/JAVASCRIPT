const myArray = [
10, 
20, 
30
];
// the position of the value above is (0 1 2)
console.log(myArray);
console.log(myArray(1));

//changing a value in array
myArray[0] = 99;
console.log(myArray);

//array can contain any type of value
[1, 'hello', true, {name: 'socks'}, [1, 2 ]]
//number string booleans, object, arrays
console.log(typeof(0, 1, 2, 3, 4));

//it is an object - A special type of object
//to check for array
console.log(Array.isArray([0, 1, 2, 3, 4]));

//array method
//.push - it adds a value to the end of an array
myArray.push(100);
console.log(myArray)

//.splice() - it removes a value from an array
myArray.splice(0, 1); //it remove one value from index o
// if it is two, it remove two values at index 0
console.log(myArray);
