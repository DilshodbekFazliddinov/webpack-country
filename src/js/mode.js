const modeBtn = document.querySelector(".modeSite");
const htmlEle = document.querySelector("html");
const modeLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeLocal) {
  htmlEle.classList.add(modeLocal);
}

modeBtn.addEventListener("click", () => {
  htmlEle.classList.toggle("dark");

  localStorage.getItem("mode") == "dark"
    ? localStorage.setItem("mode", "light")
    : localStorage.setItem("mode", "dark");

  if (modeBtn.textContent == "Dark") {
    modeBtn.textContent = "Light";
  } else {
    modeBtn.textContent = "Dark";
  }
});
