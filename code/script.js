//js-code for hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav.link").forEach(n => n.
  addEventListener("click", () => {
      hamburger.classlist.remove("active");
      navMenu.classList.remove("active");
  }))




// Select all spotlights  slides=spotlights  slide = spotlight
const spotlights = document.querySelectorAll(".spotlight");

// loop through slides and set each slides translateX property to index * 100% 
spotlights.forEach((spotlight, indx) => {
  spotlight.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSpotlight = 0;

// select next slide button
const nextSpotlight = document.querySelector(".btn-next");



// maximum number of slides
let maxSpotlight = spotlights.length - 1;

// add event listener and navigation functionality
nextSpotlight.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSpotlight === maxSpotlight) {
    curSpotlight = 0;
  } else {
    curSpotlight++;
  }

//   move slide by -100%
spotlights.forEach((spotlight, indx) => {
  spotlight.style.transform = `translateX(${100 * (indx - curSpotlight)}%)`;
  });
});

// select prev slide button
const prevSpotlight = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSpotlight.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSpotlight === 0) {
    curSpotlight = maxSpotlight;
  } else {
    curSpotlight--;
  }

  //   move slide by 100%
  spotlights.forEach((spotlight, indx) => {
    spotlight.style.transform = `translateX(${100 * (indx - curSpotlight)}%)`;
  });
});