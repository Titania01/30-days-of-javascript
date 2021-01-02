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

let num =prompt("Enter your age")
let myAge;
let yourAge;
if (myAge > yourAge) {
  console.log(`I am ${myAge} years older than you`)
}else {
  console.log(`you are &{yourAge} older than me`)
}