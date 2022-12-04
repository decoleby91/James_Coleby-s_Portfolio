const $ = document;
let menu1 = $.getElementsByClassName("tab")[0];
let menu2 = $.getElementsByClassName("tab1")[0];
let logo = $.getElementsByClassName("nav")[0];

logo.addEventListener("click", () => {
  menu2.classList.toggle("active");
});

window.addEventListener("resize", () => {
  let x = window.innerWidth;
  if (x >= 569) {
    menu2.classList.remove("active");
  }
});