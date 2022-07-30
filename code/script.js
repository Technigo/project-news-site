// HAMBURGER MENU
// Elements with class "hamburger" respectively "nav-menu" are added to arrays named hamburger respectively navMenu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// When hamburger is being clicked, give hamburger and navMenu class "active". This makes it possible to style the active state with css.
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

//When link in the menu is clicked, remove class "active" from hamburger and navMenu and thereby reset their stylig to default
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))
  

// SPOTLIGHT-CAROUSEL
// All elements with class .spotlight is selected and added to array spotlights
const spotlights = document.querySelectorAll(".spotlight");

// Set respective elements translateX property to 100% times their position in the array  
spotlights.forEach((spotlight, index) => {
  spotlight.style.transform = `translateX(${index * 100}%)`;
});

// Create variable for spotlight in view on the page
let currentSpotlight = 0;

// Select next-button
const nextSpotlight = document.querySelector(".btn-next");

// Create a variable for maximum number of slides in the array
let maxSpotlight = spotlights.length - 1;

// When the "next-button" is clicked, if currentSpotlight is equal to maxSpotlight, set currentSpotlight to 0. 
// So if you reach the last image, go back to the first. If currentSpotlight is not equal to maxSpotlight, increase the value of currentSpotlight with 1.
nextSpotlight.addEventListener("click", function () {
  if (currentSpotlight === maxSpotlight) {
    currentSpotlight = 0;
  } else {
    currentSpotlight++;
  }

// Move spotlight by -100%
spotlights.forEach((spotlight, index) => {
  spotlight.style.transform = `translateX(${100 * (index - currentSpotlight)}%)`;
  });
});

// Select previous-button
const prevSpotlight = document.querySelector(".btn-prev");

// Does the same as the funtion for the next button but if currentSpotlight is not equal to maxSpotlight, decrease the value of currentSpotlight with 1.
prevSpotlight.addEventListener("click", function () {
  if (currentSpotlight === 0) {
    currentSpotlight = maxSpotlight;
  } else {
    currentSpotlight--;
  }

  // Move spotlight by 100%
  spotlights.forEach((spotlight, index) => {
    spotlight.style.transform = `translateX(${100 * (index - currentSpotlight)}%)`;
  });
});