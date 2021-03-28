// Exercises: Level 1
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <= 10; i++) {
  console.log(i)
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`)
}

console.log('i','i^2','i^3')
for(let i = 0; i <= 10; i++) {
  console.log(i , i**2,i**3)
}

for(let i = 0; i <= 100; i++) {
  if(i%2==0) console.log({even:i})
  else console.log({odd:i})

}
for(let i=0; i<=100; i++){
  if(i===1) {console.log({prime:i}); break;}
  for(let j=2; j<=i;j++){
    if(!(i%j)) break;
  }
  console.log({prime:i})
}

// for(let i=0; i<=100; i++) {

// }


const add5 = (myNumber) => {
   return myNumber + 5 
  }
  console.log(add5(2))

const randomRgbColor = () => {
  // const random = Math.floor(Math.random() * 256)
  const red = Math.floor(Math.random() * 55)
  const green = Math.floor(Math.random() * 173)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const newCountry = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

for (let i = 0; i < newCountry.length; i++) {
  countries.push(newCountry[i])
}

console.log(countries);

const newArray = []

for (let i = 0; i < countries.length; i++) {
  newArray.push(countries[i].length)
}

console.log(newArray)

let nestedArr = []

for (let i = 0; i < countries.length; i++) {
  nestedArr[i] = [countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length]
}

console.log(nestedArr)
