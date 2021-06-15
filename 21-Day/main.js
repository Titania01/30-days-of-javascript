// Exercises: Level 1

const paragraph = document.querySelector("p");
console.log(paragraph);

const pQuery = document.querySelector("#first-para");
console.log(pQuery);

const nodeList = document.querySelectorAll("p");
console.log(nodeList);

nodeList.forEach((nodeList) => {
  console.log(nodeList.textContent);
});

const setPara = (document.getElementById("fourth-para").textContent =
  "Adventure");
console.log(setPara);

const paragraphs = document.querySelectorAll("p");
paragraphs[0].setAttribute("id", "one");
paragraphs[1].setAttribute("id", "two");
paragraphs[2].setAttribute("id", "three");
paragraphs[3].setAttribute("id", "four");
console.log(paragraphs);

const classPara = document.querySelectorAll("p");
classPara[0].classList.add("first");
classPara[1].classList.add("second");
classPara[2].classList.add("third");
classPara[3].classList.add("fourth");
console.log(classPara);

// Exercises: Level 2

//1.Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

const titles = document.querySelector("h1");
titles.style.fontSize = "4rem";
titles.style.color = "tomato";

const whole = document.querySelector("body");
whole.style.backgroundColor = "lightblue";
