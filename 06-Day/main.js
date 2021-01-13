for (let i = 0; i <= 5; i++) {
  console.log(i)
}

for (let i = 5; i >= 0; i--) {
  console.log(i)
}

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`) 
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
 console.log(newArr.push(countries[i].toUpperCase()))
}

