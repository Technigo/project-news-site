const menu = document.querySelector(".navbar-toggle");
const ul = document.querySelector(".navbar__list");
const nav = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".navbar__item");

menu.addEventListener("click", () => {
  ul.classList.toggle("show")
  menu.classList.toggle("show")
})

navLink.forEach(link => {
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
})