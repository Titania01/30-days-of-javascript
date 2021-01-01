// Exercises: Level 1
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Badmus'
let lastName = 'Adegbite'
let country = 'Nigeria'
let city = 'Ilorin'
let age = 26
let isMarried = false
let = 2020
console.log(typeof(firstName))
console.log(typeof(age))
console.log(typeof(isMarried))

// 2. Check if type of '10' is equal to 10
let str = '10'
let num = 10
console.log(str == num);
console.log(str === num);

// 3. Check if parseInt('9.8') is equal to 10
let par = parseInt('9.8')
let nums = 10
console.log(par==10) 
  
// 4. Boolean is either true or false
// i. Write three JavaScript statement which provide truthy value.
console.log(4 > 3)
console.log('badmus'.length=='python'.length)
console.log(!isMarried)
// ii. Write three JavaScript statement which provide falsy value
console.log(undefined===null)
console.log(isMarried)
console.log(2<1)

// 5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length<'jargon'.length)

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12) )
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//There is no 'on' in both dragon and python
let isOn = 'python dragon'
console.log(isOn.search('on'))

// 7. Use the Date object to do the following activities

// i.What is the year today?
let now = new Date()
console.log(now.getFullYear())
// ii.What is the month today as a number?
console.log(now.getMonth() + 1)
// iii.What is the date today?
console.log(now.getDate())
// iv.What is the day today as a number?
console.log(now.getDay())
// v.What is the hours now?
console.log(now.getHours())
// vi.What is the minutes now?
console.log(now.getMinutes())
// vii.Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())


// Exercises: Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = 20
let height = 10
const areaOfTriangle = 0.5 * base * height
console.log(areaOfTriangle)

// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = 5
let b = 4
let c = 3
const perimeterOfTriangle = a + b + c
console.log(perimeterOfTriangle) 

// // 3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = prompt('Enter length')
// let breath = prompt('Enter breath')
// alert(length * breath)

// // 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const PI = 3.14
// let radius = prompt('Enter radius')
// let area = PI * radius * radius
// alert(area)

// // 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours = 40
// let ratePerHour = 28
// let weeklyEarning = hours * ratePerHour
// alert(weeklyEarning)

// 10.If the length of your name is greater than 7 say, your name is long else say your name is short.
function name(length) {
  let result;
  if (length>7){
    result= 'name is long'
  }else{
    result= 'name is short'
  }
  return result;
}
console.log(name(Badmus))

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56