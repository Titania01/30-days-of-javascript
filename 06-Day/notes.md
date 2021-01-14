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

let i = 0
while (i <= 5) {
console.log(i)
i++
}

let i = 0
do{
console.log(i)
i++
}while (i <= 5)

const numbers = [1, 2, 3, 4]
for (const num of numbers){
console.log(num)
}

let sum = 0
for (const num of numbers) {
sum += num
}
console.log(sum)

const webTechs = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
]
for (const tech of webTechs) {
console.log(tech.toUpperCase())
}

for (const tech of webTechs) {
console.log(tech[0])
}

for (let i = 0; i <= 5; i++){
if(i==3){
break
}
console.log(i)
}
