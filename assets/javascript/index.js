const hamburgerMenu = document.querySelector(".navbar-toggle");
const ul = document.querySelector(".navbar__list");
const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar__item");

hamburgerMenu.addEventListener("click", () => {
  ul.classList.toggle("show");
  hamburgerMenu.classList.toggle("show")
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    ul.classList.remove("show");
    hamburgerMenu.classList.toggle("show");
  })
})