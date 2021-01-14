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
newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++){
sum += numbers[i]
}
console.log(sum)
