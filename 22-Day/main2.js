// Exercises: Level 2
// utilities
const challengeOne = document.querySelector(".challengeOne");
const challengeTwo = document.querySelector(".challengeTwo");
const challengeThree = document.querySelector(".challengeThree");
const challengeFour = document.querySelector(".challengeFour");
const challengeFive = document.querySelector(".challengeFive");
const challengeSix = document.querySelector(".challengeSix");
const challengeSeven = document.querySelector(".challengeSeven");
const challengeEight = document.querySelector(".challengeEight");
const randomNo = (max = 255, min = 0) =>
  Math.round(Math.random() * (max - min) + min);
//selectors
const challengesCon = document.querySelector(".challenges-con");
const bodyEl = document.querySelector("body");
const wrapperEl = document.querySelector(".wrapper");
const headerEl = document.querySelector("header");
const h1El = document.querySelector("h1");
h1El.innerHTML =
  h1El.textContent.replace(/\d+/, "").trim() +
  ` <span id="year">${new Date().getFullYear()}</span>`;
const yearEl = document.getElementById("year");
headerEl.innerHTML += '<p><span id="time">June 15, 2021 2:43:45</span></p>';
const timeEl = document.querySelector("#time");
//styling
bodyEl.style.fontFamily = "Avenir, Segoe ui, Ubuntu, Sans-serif";
wrapperEl.style.maxWidth = "40rem";
wrapperEl.style.margin = "auto";
headerEl.style.textAlign = "center";
h1El.style.marginBottom = "-1rem";
document.getElementById("year").style.fontSize = "4rem";
document.getElementById("time").style.padding = "0.25rem 1.5rem";

challengeOne.style.width = "40rem";
challengeOne.style.display = "flex";
challengeOne.style.justifyContent = "space-between";
challengeOne.style.alignItems = "center";
challengeOne.style.backgroundColor = "green";
challengeOne.style.padding = "0px 6px 0px 6px";

challengeTwo.style.width = "40rem";
challengeTwo.style.display = "flex";
challengeTwo.style.justifyContent = "space-between";
challengeTwo.style.alignItems = "center";
challengeTwo.style.backgroundColor = "yellow";
challengeTwo.style.padding = "0px 5px 0px 5px";

challengeThree.style.width = "40rem";
challengeThree.style.display = "flex";
challengeThree.style.justifyContent = "space-between";
challengeThree.style.alignItems = "center";
challengeThree.style.backgroundColor = "red";
challengeThree.style.padding = "0px 5px 0px 5px";

challengeFour.style.width = "40rem";
challengeFour.style.display = "flex";
challengeFour.style.justifyContent = "space-between";
challengeFour.style.alignItems = "center";
challengeFour.style.backgroundColor = "pink";
challengeFour.style.padding = "0px 5px 0px 5px";

challengeFive.style.width = "40rem";
challengeFive.style.display = "flex";
challengeFive.style.justifyContent = "space-between";
challengeFive.style.alignItems = "center";
challengeFive.style.backgroundColor = "grey";
challengeFive.style.padding = "0px 5px 0px 5px";

challengeSix.style.width = "40rem";
challengeSix.style.display = "flex";
challengeSix.style.justifyContent = "space-between";
challengeSix.style.alignItems = "center";
challengeSix.style.backgroundColor = "purple";
challengeSix.style.padding = "0px 5px 0px 5px";

challengeSeven.style.width = "40rem";
challengeSeven.style.display = "flex";
challengeSeven.style.justifyContent = "space-between";
challengeSeven.style.alignItems = "center";
challengeSeven.style.backgroundColor = "grey";
challengeSeven.style.padding = "0px 5px 0px 5px";

challengeEight.style.width = "40rem";
challengeEight.style.display = "flex";
challengeEight.style.justifyContent = "space-between";
challengeEight.style.alignItems = "center";
challengeEight.style.backgroundColor = "pink";
challengeEight.style.padding = "0px 5px 0px 5px";

challengesCon.style.display = "flex";
challengesCon.style.flexDirection = "column";
challengesCon.style.alignItems = "center";
challengesCon.style.width = "50rem";

setInterval(() => {
  document.getElementById(
    "year"
  ).style.color = `rgb(${randomNo()}, ${randomNo()}, ${randomNo()})`;
  timeEl.style.backgroundColor = `rgb(${randomNo()}, ${randomNo()}, ${randomNo()})`;
}, 1000);
