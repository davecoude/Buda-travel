const htmlElement = document.querySelector("#htmlDark");
const toogleBtn = document.querySelector("#iconDarkMode");
const toogleBtnSm = document.querySelector("#iconDarkModeSm");

toogleBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
});

toogleBtnSm.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
});
