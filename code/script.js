document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");
  const closeButton = document.querySelector(".close");

  burgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("show-links");
    closeButton.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    navLinks.classList.remove("show-links");
    closeButton.style.display = "none";
  });
});
