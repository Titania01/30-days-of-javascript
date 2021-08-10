// // const numbers = [1, 2, 3, 4];
// // const sumArray = (arr) => {
// //   let sum = 0;
// //   const callBack = function (element) {
// //     sum += element;
// //   };
// //   numbers.forEach(callBack);
// //   return sum;
// // };
// // console.log(sumArray(numbers));

// // const numbers = [1, 2, 3, 4, 5];
// // let sum = numbers.reduce((acc, cur) => acc + cur, 0);
// // console.log(sum);

// // const higherOrder = (n) => {
// //   const doSomething = (m) => {
// //     const doWhatEver = (t) => {
// //       return 2 * n + 3 * m + t;
// //     };
// //     return doWhatEver;
// //   };

// //   return doSomething;
// // };
// // console.log(higherOrder(2)(3)(10));

// const sayHi = (greet) => {
//   console.log("Hello oo");
// };
// setTimeout(sayHi, 10_000);

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
// countries.forEach((element) => console.log(element.toUpperCase()));

// const turnedUpper = countries.map((country) => country.toUpperCase());
// console.log(turnedUpper);

// const countryLand = countries.filter((country) => country.includes("land"));
// console.log(countryLand);

// const countryByia = countries.filter((country) => country.endsWith("ia"));
// console.log(countryByia);

// const countryFive = countries.filter((country) => country.length == 5);
// console.log(countryFive);

// const scores = [
//   { name: "Asabeneh", score: 95 },
//   { name: "Mathias", score: 80 },
//   { name: "Elias", score: 50 },
//   { name: "Martha", score: 85 },
//   { name: "John", score: 100 },
// ];

// const scoresGreaterEighty = scores.filter((score) => score.score > 80);
// console.log(scoresGreaterEighty);

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const areStr = names.reduce((acc, name) => typeof name === "string");
// console.log(areStr);

// const areStri = names.every((name) => typeof name === "string");
// console.log(areStri);

// const ages = [24, 20, 25, 32, 35, 18];
// const age = ages.find((age) => age < 20);
// console.log(age);

// const numbers = [9.81, 3.14, 37, 100];
// const sorting = numbers.sort((a, b) => a - b);
// console.log(sorting);

// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

// const users = [
//   { name: "Asabeneh", age: 150 },
//   { name: "Brook", age: 50 },
//   { name: "Eyo", age: 100 },
//   { name: "Elias", age: 22 },
// ];
// users.sort((a, b) => {
//   if (a.age < b.age) return -1;
//   if (a.age > b.age) return 1;
//   return 0;
// });
// console.log(users);

// Exercise: Level 1

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 2.Use map to create a new array by changing each country to uppercase in the countries array.
const upper = countries.map((country) => country.toUpperCase());
console.log(upper);

// 3.Use map to create an array of countries length from countries array.
const lent = countries.map((country) => country.length);
console.log(lent);
