// DRAWER MENU
const menuIcon = document.querySelector("#menu-icon"); // Access menu burger icon
const menuClose = document.querySelector("#menu-close"); // Access menu x icon

// Toggle class 'show' to show or hide menu
const toggleMenu = () => {
  const menu = document.getElementById("menu-drawer");
  menu.classList.toggle("show");
  console.log(menu.classList)
};

menuIcon.addEventListener("click", (toggleMenu)); // Call function when burger is clicked
menuClose.addEventListener("click", (toggleMenu)); // Call function when close icon is clicked