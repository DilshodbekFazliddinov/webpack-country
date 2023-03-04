import "../css/style.css";
import request from "./request";
import { createCountryInfo } from "./updateUI";
import "./mode";
import "./loader";

const querYString = window.location.search;
const urlParam = new URLSearchParams(querYString);
const country = urlParam.get("country");
const countryApi = `https://restcountries.com/v3.1/${country}`;

console.log(countryApi);

request(countryApi)
  .then((data) => {
    createCountryInfo(data[0]);
  })
  .catch((err) => {
    alert(err.message);
  });
