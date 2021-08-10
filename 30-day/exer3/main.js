let fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
  "Times New Roman",
];

let fontWeight = [200, 300, 400, 500, 600, 700];

const weight = fontWeight[Math.floor(Math.random() * 6)];

randomColor = () => Math.floor(Math.random() * 256);

const whole = document.querySelector("body");
const bodyEl = document.createElement("div");
whole.style.display = "flex";
whole.style.justifyContent = "center";
whole.style.alignItems = "center";
bodyEl.style.marginTop = "5rem";
bodyEl.style.boxShadow = "2px 2px 10px 2px rgba(0, 0, 0, 0.2)";
bodyEl.style.display = "flex";
bodyEl.style.justifyContent = "center";
bodyEl.style.alignItems = "center";
bodyEl.style.height = "12rem";
bodyEl.style.width = "40rem";
bodyEl.innerHTML = `<div class="wrap"><span>Congratulations!</span></div>`;

bodyEl.style.transition = "";
bodyEl.style.fontSize = "4rem";

let i = 0;
setInterval(() => {
  i = i === fontWeight.length - 1 ? 0 : i + 1;
  bodyEl.style.fontWeight = weight;
  const word = bodyEl.textContent;
  bodyEl.innerHTML = "";
  word.split("").forEach((value) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = value;

    const num = fontFamily[Math.floor(Math.random() * fontFamily.length)];
    fontWeight = [200, 300, 400, 500, 600, 700];
    letterEl.style.fontFamily = `${num}`;
    letterEl.style.color = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    letterEl.style.fontWeight = `${fontWeight[i]}`;

    bodyEl.appendChild(letterEl);
  });
}, 2000);
document.querySelector("body").appendChild(bodyEl);
