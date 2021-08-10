// Exercises: Level 1
// 1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// let age = prompt('Enter your age')
// switch(true){
//   case age >= 18:
//     console.log('You are old enough to drive')
//     break;
//   case age == 15:
//     console.log('You need 3 more years to be able to drive')
//     break;
// }

// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let num =prompt("Enter your age")
// let myAge;
// let yourAge;
// if (myAge > yourAge) {
//   console.log(`I am ${myAge} years older than you`)
// }else {
//   console.log(`you are &{yourAge} older than me`)
// }

// 3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 3;
let b = 4;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// 4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = 8;
if (num % 2 == 0) {
  console.log("num is even");
} else {
  console.log("num is odd");
}

// Exercises: Level 2
// 1. Write a code which can give grades to students according to theirs scores:
let scores = 0;
switch (true) {
  case scores >= 80 || scores <= 100:
    console.log("A");
    break;
  case scores >= 70 || scores <= 89:
    console.log("B");
    break;
  case scores >= 60 || scores <= 69:
    console.log("C");
    break;
  case scores >= 50 || scores <= 59:
    console.log("D");
    break;
  case scores >= 0 || scores <= 49:
    console.log("F");
    break;
}

// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

let season = "September";
switch (season) {
  case "September":
  case "October":
  case "November":
    console.log("the season is Autumn");
    break;
  case "December":
  case "January":
  case "February":
    console.log("the season is Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("the season is Spring");
    break;
  case "June":
  case "July":
  case "August":
    console.log("the season is Summer");
    break;
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

let day = "Saturday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(`${day} is a working day`);
    break;
  case "Saturday":
  case "Sunday":
    console.log(`${day} is a weekend`);
}

// Exercise: Level 3
let year = 2021;
let month = 12;
let dayCount;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case "February":
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) dayCount = 29;
    else dayCount = 28;
    break;
  default:
    dayCount = -1;
    break;
}
console.log(dayCount);
