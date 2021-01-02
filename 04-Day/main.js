// Exercises: Level 1
// 1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
let age = prompt('Enter your age')
let user = age
switch(user){
  case age >= 18:
    console.log('You are old enough to drive')
    break;
  case age == 15:
    console.log('You need 3 more years to be able to drive')
    break; 
}

