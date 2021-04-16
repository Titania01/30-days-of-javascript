// Exercises: Level 1

function fullNameFun() {
  let fullName = 'Adegbite Badmus'  
  console.log(fullName)
}
fullNameFun()

const funFullName = () => {
  let lastName = 'Adegbite'
  let firstName = 'Bidmus'
  let full_name = lastName  + ' ' + firstName
  return full_name
}
console.log(funFullName())

const addNumbers = (a, b) => {
  let sum = a + b
  return sum
}
console.log(addNumbers(3,4))

const areaOfRectangle = (l, w) => {
  let area = l * w
  return area
}
console.log(areaOfRectangle(7,8))

function perimeterOfRectangle() {
  let length = 80
  let width = 67
  let perimeter = 2*(length + width)
  console.log(perimeter)
}
perimeterOfRectangle()

const speed = () => {
  let totalDist = 80
  let totalTime = 20
  let objSpeed = totalDist/totalTime
  return objSpeed
}
console.log(speed())

const convertCelciusToFahrenheit = () => {
  let oC = 80
  let oF =  (oC * 9/5) + 32
  return oF
}
console.log(convertCelciusToFahrenheit())


function peopleWeight(weight,height) {
   
  let bmi = weight/(height * height)
  if(bmi < 18.5) {
    console.log('underweight')
  }else if (bmi <= 24.9 && bmi >= 18.5) {
    console.log('Normal weight')
  }else if (bmi >= 25 && bmi <= 29.9) {
    console.log('Overweight')
  }else if (bmi >= 30) {
    console.log('Obese')
  }
  return bmi
}
 console.log(peopleWeight(128,2))
const months='january,february,march,april,may,june,july,august,september,october,november,december'.split(',')

 let month = new Date().getMonth()
 month = months[month]
 const checkSeason = (month) => {
  if(['january', 'february', 'march'].includes(month)) {
    return 'Winter'
  } else if (['april', 'may', 'june'].includes(month)) {
    return 'Autum'
  }else if(['july', 'august', 'september'].includes(month)) {
    return 'Spring'
  }else if (['october', 'november', 'december'].includes(month)) {
    return 'Summer'
  }
  
}
console.log(checkSeason('october'));