// Exercises: Level 2
const bodyEl = document.querySelector("body");
const headEl = document.createElement("h1");
const title = document.createElement("p");
const title1 = document.createElement("p");
const author = document.createElement("p");
headEl.textContent = "WORLD COUNTRIES LIST";
headEl.style.margin = "auto";
headEl.style.letterSpacing = "8px";
headEl.style.fontSize = "24px";
bodyEl.style.textAlign = "center";
title.textContent = "Total Number of Countries: 193";
title.style.marginTop = "-0.2rem";
title1.textContent = "30DaysOfJavaScript DOM-Day-2";
title1.style.opacity = "0.5";
title1.style.fontSize = "14px";

title1.style.marginTop = "-0.85rem";
author.textContent = "Author: Asabeneh Yetayeh";
author.style.opacity = "0.5";
author.style.fontSize = "14px";

author.style.marginTop = "-0.75rem";
bodyEl.appendChild(headEl);
bodyEl.appendChild(title);
bodyEl.appendChild(title1);
bodyEl.appendChild(author);

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
const containerEl = document.createElement("div.country");
bodyEl.appendChild(containerEl);
containerEl.setAttribute("id", "container");
containerEl.style.display = "grid";
containerEl.style.gridTemplateColumns = "repeat(6, 1fr)";
containerEl.style.maxWidth = "40rem";
containerEl.style.margin = "auto";
containerEl.style.gridGap = "5px";

countries.forEach((country) => {
  const countryEl = document.createElement("p");
  containerEl.appendChild(countryEl).textContent = country.toUpperCase();
  countryEl.style.fontSize = "12px";
  countryEl.style.border = "#f5f5f7 1px solid";
  countryEl.style.height = "5rem";
  countryEl.style.display = "flex";
  countryEl.style.alignItems = "center";
  countryEl.style.justifyContent = "center";
});

bodyEl.appendChild(countryEl);
bodyEl.style.fontFamily = "Avenir, Sego UI, Ubuntu, Sans-serif";
