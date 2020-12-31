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


// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56