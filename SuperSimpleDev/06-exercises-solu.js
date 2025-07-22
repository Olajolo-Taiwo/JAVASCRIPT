//6a
let hour = 20;
if (hour >= 6 && hour <= 12){
  console.log('Good Morning!');
  } else if(hour >= 13 && hour <= 16){
  console.log('Good Afternoon!');
  }else if (hour >= 17 && hour <= 20){
  console.log('Good Evening!');
  }else { console.log('Good Night');
  }

//6b
  hour = 2;
if (hour >= 6 && hour <= 12){
  console.log('Good Morning!');
  } else if(hour >= 13 && hour <= 16){
  console.log('Good Afternoon!');
  }else if (hour >= 17 && hour <= 20){
  console.log('Good Evening!');
  }else { console.log('Good Night');
  }

  //6c
  const myName = 'Dear User';
  const time = 20;
if ( time >= 6 && time <= 12){
  result ='Good Morning!';
  } else if(time >= 13 && time <= 16){
  result ='Good Afternoon!';
  }else if (time >= 17 && time <= 20){
  result = 'Good Evening!';
  }else { result ='Good Night';
  }
  console.log(`${result} ${myName}`);
//   VM2025:11 Good Evening! Dear User (OUTPUT)

//6d
const age = 75 
if (age <= 6 || age >= 65){
    result = 'Discount Granted!'}
else{ result = 'No Discount Available!'}
console.log(result);
//VM2443:5 Discount Granted! (OUTPUT)

/*
const age = 5 
if (age <= 6 || age >= 65){
    result = 'Discount Granted!'}
else{ result = 'No Discount Available!'}
console.log(result);
VM2453:5 Discount Granted!

const age = 15 
if (age <= 6 || age >= 65){
    result = 'Discount Granted!'}
else{ result = 'No Discount Available!'}
console.log(result);
VM2462:5 No Discount Available!
*/

//6e
const personAge = 15 ;
isHoliday = false;
if ((personAge <= 6 || personAge >= 65) && isHoliday === true){
    result = 'Discount Granted!'}
else{ result = 'No Discount Available!'}
console.log(result);
//VM2536:6 No Discount Available! (OUTPUT)
/*
const age = 5 ;
isHoliday = false;
if ((age <= 6 || age >= 65) && isHoliday === true){
    result = 'Discount Granted!'}
else{ result = 'No Discount Available!'}
console.log(result);
VM2540:6 No Discount Available!
undefined
const age = 5 ;
isHoliday = true;
if ((age <= 6 || age >= 65) && isHoliday === true){
    result = 'Discount Granted!'}
else{ result = 'No Discount Available!'}
console.log(result);
VM2560:6 Discount Granted!
undefined
*/

//6f
const number = Math.random();
console.log(number);
//VM2564:2 0.16807031872888556 (OUTPUT)

//6g
const game = Math.random();
if (number <= 0.5){result = 'Love';} else {result = 'Grace';}
console.log(result);

//6i
const pgNumber = Math.random();
let result;

if (pgNumber <= 0.5){result = 'Love';} else {result = 'Grace';}

if (result === 'Grace'){
    output = "God's Grace"} else if (result === 'Love'){output = "God's Love"}

//6j
      const randomNumber = Math.random();
      const resultt = randomNumber < 0.5 ? 'heads' : 'tails';

      const guess = 'heads';
      console.log(guess === resultt ? 'You win!' : 'You lose!');

