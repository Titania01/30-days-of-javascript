let randomNum = Math.random()
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    

let space = ' '           
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName = firstName + space + lastName; 
console.log(fullName);
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\nI am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \nNode.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \nIn the end of 2019, I was thinking to expand my teaching and to reach \nto global audience and I started a Python challenge from November 20 - December 19.\nIt was one of the most rewarding and inspiring experience.\nNow, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \nI hope you are enjoying too."

console.log(paragraph)