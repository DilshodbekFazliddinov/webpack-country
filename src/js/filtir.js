const searchCountry = document.getElementById("default-search");

searchCountry.addEventListener("input", () => {
  const searchValue = searchCountry.value.toLowerCase();
  const cardCountryItem = document.querySelectorAll(".cardsCountryBox");
  const cardTitles = document.querySelectorAll(".cardTitle");

  cardTitles.forEach((title, i) => {
    // console.log(title.textContent);
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardCountryItem[i].style.display = "block";
    } else {
      cardCountryItem[i].style.display = "none";
    }
  });
});

const searchSelect = document.querySelector(".countrySelect");
import request from "./request";
import { createCountry } from "./updateUI";

searchSelect.addEventListener("change", () => {
  let filterApi;
  if (searchSelect.value == "All") {
    filterApi = "https://restcountries.com/v3.1/all";
  } else {
    filterApi = `https://restcountries.com/v3.1/region/${searchSelect.value}`;
  }
  request(filterApi)
    .then((data) => {
      createCountry(data);
    })
    .catch((err) => {
      alert(err.message);
    });
});
