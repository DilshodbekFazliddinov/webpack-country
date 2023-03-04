// import
import "../css/style.css";
import request from "./request";
import { createCountry } from "./updateUI";
import "./filtir";
import "./mode";
// dom elements
const cardCountry = document.getElementById("cardCountry");

const API = "https://restcountries.com/v3.1/all";

request(API)
  .then((data) => {
    createCountry(data);
  })
  .catch((err) => {
    alert(err.message);
  });
