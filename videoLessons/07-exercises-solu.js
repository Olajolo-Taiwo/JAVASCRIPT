//7a
function greet() { console.log('Hello!');} greet();

//7b
function greet(name) { console.log(`Hello, ${name}`);} 
console.log(greet('Ruth'));
console.log (greet('Simeon'));

//7c
function greet(name) { console.log(`Hello, ${name}`);} 
console.log(greet());
//trial 2
function greet(name = 'Hi! there') { console.log(`Hello, ${name}`);} 
console.log(greet());
//correction
function greet(name) { 
    if(!name){console.log('Hi! there');} 
    else{console.log(`Hello, ${name}`);}}
console.log(greet());

//7d
function convertToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${fahrenheit}F`);}
convertToFahrenheit(25)
// correction
function convertToFahrenheit(celsius){
    return (celsius * 9/5) + 32;}
console.log(convertToFahrenheit(25));

//7e
function convertToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${celsius}F`);
}
convertToCelsius(86)
//correction
function convertToCelsius(fahrenheit){
   return (fahrenheit - 32) * 5/9;
}
console.log(convertToCelsius(86));


//7f
function convertToCelsius(fahrenheit){
return (fahrenheit - 32) * 5/9;
}
function convertToFahrenheit(celsius){
return (celsius * 9/5) + 32;}
function convertTemp(degrees, unit) {
  if (unit === 'C'){
    const result = convertToCelsius(degrees);
    return `${result}F`;
}
  else if (unit === 'F'){
      const result = convertToFahrenheit(degrees);
                  return `${result}C`;
  }
}
  console.log(convertTemp(86, 'C'));
  console.log(convertTemp(25, 'F'));

//7g
function convertLength(length, from, to){
    if (from === 'km' && to === 'miles'){
        return `${length / 1.6 } miles`}
    else if (from === 'miles' && to === 'km'){
        return `${length * 1.6} miles`}
    else if (from === 'miles' && to === 'miles'){
        return `${length} miles`}
    else if (from === 'km' && to === 'km'){
        return `${length} km`}
}
console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

//7h
function convertLength(length, from, to){
  if (from === 'km'){
    if (to === 'km'){return `${length} km`}
    else if (to === 'miles'){return `${length / 1.6} miles`}
    else if (to === 'feet'){return `${length * 3281} ft`}
  }
  else if (from === 'miles'){
    if (to === 'km'){return `${length * 1.6} km`}
    else if (to === 'miles'){return `${length} miles`}
    else if (to === 'feet'){return `${length * 5280} ft`}
  }
  else if (from === 'feet'){
    if (to === 'km'){return `${length/3281} km`}
    else if (to === 'miles'){return `${length / 5280} miles`}
    else if (to === 'feet'){return `${length} ft`}
  }
}
console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'feet'));
console.log(convertLength(5, 'km', 'feet'));

//7i
function convertLength(length, from, to){
  if (from === 'km'){
    if (to === 'km'){return `${length} km`}
    else if (to === 'miles'){return `${length / 1.6} miles`}
    else if (to === 'feet'){return `${length * 3281} ft`}
  }
  else if (from === 'miles'){
    if (to === 'km'){return `${length * 1.6} km`}
    else if (to === 'miles'){return `${length} miles`}
    else if (to === 'feet'){return `${length * 5280} ft`}
  }
  else if (from === 'feet'){
    if (to === 'km'){return `${length/3281} km`}
    else if (to === 'miles'){return `${length / 5280} miles`}
    else if (to === 'feet'){return `${length} ft`}
  }
  else if (from !== 'feet' && from !== 'km' && from !== 'miles' ){ return `Invalid unit: ${from}`}
else if (to !== 'feet' && to !== 'km' && to!== 'miles' ){ return `Invalid unit: ${to}`}
}
