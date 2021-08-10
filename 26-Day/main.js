const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const buttonEl = document.querySelectorAll("button");
const lastEl = document.getElementById("lastdiv");
const sortCountryButtonEl = document.querySelector(".sort-country");
const arrowEl = document.querySelector(".arrow");
let order = "alphabetical";
let rotate = 180;
let searchBy = "";
let countryDisplayed;
lastEl.style.display = "grid";
lastEl.style.gridTemplateColumns = "repeat(6,1fr)";
lastEl.style.padding = "3rem 10rem 0 10rem";
lastEl.style.gridGap = "1rem";
lastEl.style.gridColumnGap = "1rem";
lastEl.style.textAlign = "center";
const inputEl = document.getElementById("input-element");
const countryNames = countries;
countryDisplayed = countryNames;
console.log(countryNames);
const sortCountry = (data, order) => {
  let sortedCountry = data.sort();
  sortedCountry =
    order === "alphabetical" ? sortedCountry : sortedCountry.reverse();
  lastEl.innerHTML = "";
  // console.log(sortedCountry);
  sortedCountry.forEach((item) => {
    const newEl = document.createElement("div");
    newEl.textContent = item;
    console.log(newEl.textContent);
    newEl.style.backgroundImage = `url("./media/map_image.jpg")
     `;
    newEl.style.backgroundSize = "contain";
    newEl.style.height = "10rem";
    newEl.style.display = "flex";
    newEl.style.alignItems = "center";
    newEl.style.justifyContent = "center";
    newEl.style.backgroundBlendMode = "multiply";
    newEl.style.backgroundColor = "#374c63cf";
    newEl.style.borderRadius = "5px";
    newEl.style.width = "8rem";
    lastEl.appendChild(newEl);
  });
};
const searchCountryBy = (by, inputValue) => {
  if (by === "starting word") {
    console.log("selected starting word");
    countryDisplayed = countryNames.filter((country) =>
      country.toLocaleLowerCase().startsWith(inputValue.toLowerCase())
    );
  } else {
    console.log("selected search with any word");
    countryDisplayed = countryNames.filter((country) =>
      country.toLocaleLowerCase().includes(inputValue.toLowerCase())
    );
  }
  console.log(countryDisplayed);
  sortCountry(countryDisplayed, order);
};
sortCountryButtonEl.addEventListener("click", () => {
  lastEl.innerHTML = "";
  rotate = rotate === 180 ? 0 : 180;
  arrowEl.style.transform = `rotate(${rotate}deg)`;
  order = order === "alphabetical" ? "reverse" : "alphabetical";
  sortCountry(countryDisplayed, order);
});
buttonEl.forEach((btn, btnIndex) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const buttonText = btn.textContent.toLowerCase();
    if (buttonText !== searchBy && btnIndex !== 2) {
      searchBy = buttonText;
      buttonEl.forEach((item) => {
        item.classList.contains("active")
          ? item.classList.remove("active")
          : "";
      });
      btn.classList.add("active");
    }
  });
});
inputEl.addEventListener("input", (e) => {
  if (searchBy) {
    searchCountryBy(searchBy, e.target.value);
  }
});
sortCountry(countryNames, order);
