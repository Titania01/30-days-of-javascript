const income =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
const pattern = /\d+/g;
const matches = income.match(pattern);

console.log(matches);

const totalIncome = matches.reduce((acc, curr) => {
  return acc + parseInt(curr);
}, 0);

console.log(totalIncome);

const points =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction";
const patern = /-*(\d+)/g;
const matche = points.match(patern);

console.log(matche);

const totalPatern = matche.reduce((acc, curr) => acc + Number(curr), 0);
console.log(totalPatern);

function validJavaScript(isValidVariable) {
  let re = /^([a-z_])+([a-z0-9_])$/gi;
  const valid = re.test(isValidVariable);
  return valid ? true : false;
}
console.log(validJavaScript("Badmus_"));

// Exercises: Level 2
const tenMostFrequentWords = (string, wordCount) => {
  const toArray = string.match(/[a-z]+/gi);
  const frequent = {};
  toArray.forEach((value) => {
    if (frequent[value]) frequent[value] += 1;
    else frequent[value] = 1;
  });
  const DividedFrequent = Object.entries(frequent);
  const frequently = DividedFrequent.map((item) => {
    return { word: item[0], count: item[1] };
  });
  return frequently.sort((a, b) => b.count - a.count).splice(0, wordCount);
};

console.log(
  tenMostFrequentWords(
    `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`,
    10
  )
);
