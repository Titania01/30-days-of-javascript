function sumArrayValues(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}
const numbers = [1, 2, 3, 4, 5, 6]

console.log(sumArrayValues(numbers))

const areaOfCircle = (radius) => {
  let area = Math.PI * radius * radius
  return area
}
console.log(parseInt(areaOfCircle(20)))

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNums(1,4,6,8,9,9,8));

const sumAllNum = (...args) => {
  let sum =0
  for (let element of  args) {
    sum += element
  }
  return sum
}
console.log(sumAllNum(3,3,5,7,8,9,10));