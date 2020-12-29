// Exercise: Level 1

let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3, 20))
console.log(challenge.substring(3, 21))
console.log(challenge.substr(0, 3))
console.log(challenge.substring(0, 2))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))
let media= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(media.split(' '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(12))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
let space =  ' 30 Days Of JavaScript '
console.log(space.trim())
console.log(challenge.startsWith(30))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/gi))
let merge = '30 Days Of'
console.log(merge.concat(' JavaScript'))
console.log(challenge.repeat(2))

//Exercise: Level 2

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
`)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)
let str = "10"
let num = 10
console.log(str==num)
console.log(parseFloat('9.8'))
console.log(Math.round('9.8'))

let string = 'python jargon'
console.log(string.includes('on'))
let word = 'I hope this course is not full of jargon'
console.log(string.includes('jargon'))


// let randomNum = Math.random()
// let numBtnZeroAndTen = randomNum * 11

// console.log(numBtnZeroAndTen)

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)

// console.log(randomNumRoundToFloor)    

// let space = ' '           
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// let fullName = firstName + space + lastName; 
// console.log(fullName);
// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

// console.log(personInfoOne)

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\nI am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \nNode.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \nIn the end of 2019, I was thinking to expand my teaching and to reach \nto global audience and I started a Python challenge from November 20 - December 19.\nIt was one of the most rewarding and inspiring experience.\nNow, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \nI hope you are enjoying too."

// console.log(paragraph)
// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')
// console.log('Day 2\t3\t5')
// console.log('Day 3\t3\t5')
// console.log('Day 4\t3\t5')
// console.log('This is a backslash  symbol (\\)') // To write a backslash
// console.log('In every programming language it starts with \"Hello, World!\"')
// console.log("In every programming language it starts with \'Hello, World!\'")
// console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)