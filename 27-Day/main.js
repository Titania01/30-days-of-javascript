randomColor = () => {
  return Math.floor(Math.random() * 256);
};
const skills = "javascript,mongodb,react,phython,express,html,css".split(",");
// .toUpperCase(",");
let i = 0;
const changeEl = document.getElementById("change");
const motivateEl = document.querySelector(".motivate");
const imageEl = document.querySelector(".image");
changeEl.style.fontSize = "2rem";
setInterval(() => {
  changeEl.textContent = skills[i];
  i = i === skills.length - 1 ? 0 : i + 1;
  changeEl.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
}, 2000);
let j = 0;
const teachings =
  "content creator,motiivational speaker,programmer,instructor,educator".split(
    ","
  );
setInterval(() => {
  motivateEl.textContent = teachings[j];
  imageEl.setAttribute("src", `./images/image${j}.svg`);
  j = j === teachings.length - 1 ? 0 : j + 1;
  console.log(motivateEl.textContent);
}, 5000);
