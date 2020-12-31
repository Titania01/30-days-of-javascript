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




// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56