const numbers = [1, 2, 3, 4, 5];
const arr = [];
let sum = 0;
for (let i = 0; i <= numbers.length; i++) {
  arr.push(i * i);
}
console.log(arr);
// Exercises: Level 1
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// 4. Write a loop that makes the following pattern using console.log():
// let num = " ";
for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

let hash = "#";
let sums = "";
for (let i = 0; i < 7; i++) {
  sums += hash;
  console.log(sums);
}

console.log("i", "i^2", "i^3");
for (let i = 0; i <= 10; i++) {
  console.log(i, i ** 2, i ** 3);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) console.log({ even: i });
  else console.log({ odd: i });
}
for (let i = 0; i <= 100; i++) {
  if (i === 1) {
    console.log({ prime: i });
    break;
  }
  for (let j = 2; j <= i; j++) {
    if (!(i % j)) break;
  }
  console.log({ prime: i });
}

let sume = 0;
for (let j = 0; j <= 100; j++) {
  sume += j;
}
console.log(sume);

const add5 = (myNumber) => {
  return myNumber + 5;
};
console.log(add5(2));

// Exercise: Level 2

const genHex = (len) => {
  const hex = "0123456789abcdef";
  let output = "#";
  for (let i = 0; i < len; i++) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
};
console.log(genHex(6));

const randomRgbColor = () => {
  // const random = Math.floor(Math.random() * 256)
  const red = Math.floor(Math.random() * 55);
  const green = Math.floor(Math.random() * 173);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

console.log(randomRgbColor());

// const newCountry = [
//   "ALBANIA",
//   "BOLIVIA",
//   "CANADA",
//   "DENMARK",
//   "ETHIOPIA",
//   "FINLAND",
//   "GERMANY",
//   "HUNGARY",
//   "IRELAND",
//   "JAPAN",
//   "KENYA",
// ];

// for (let i = 0; i < newCountry.length; i++) {
//   countries.push(newCountry[i]);
// }

// console.log(countries);

const newArray = [];

for (let i = 0; i < countries.length; i++) {
  newArray.concat(countries[i].length);
}

console.log(newArray);

let nestedArr = [];

for (let i = 0; i < countries.length; i++) {
  nestedArr[i] = [
    countries[i],
    countries[i].slice(0, 3).toUpperCase(),
    countries[i].length,
  ];
}

console.log(nestedArr);

const isLand = countries.filter((country) => {
  return country.endsWith("land");
});
isLand.length
  ? console.log(isLand)
  : console.log("No country ending with land");

const isIa = countries.filter((country) => {
  return country.endsWith("ia");
});
isIa.length ? console.log(isIa) : console.log("No country ending with ia");

function longWord(countries) {
  let longer = 0;
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longer) {
      longer = countries[i].length;
    }
  }
  return longer;
}
console.log(longWord(countries));

//Exercise 3

// const newCountries = countries.filter((country) => country !== "Albania");
// console.log(newCountries);

// const countriesTwo = [...countries];
// console.log(countriesTwo);

const sortedCountries = countries.sort();
console.log(sortedCountries);
