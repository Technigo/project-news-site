

/** image slide */
const firstNews = document.getElementById("big-news");
const secondNews = document.getElementById("big-news-two");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("prev");

const gone = () => {
  firstNews.style.display = "none";
  secondNews.style.display = "flex";
}

nextButton.onclick = gone;

const back = () => {
  if (secondNews.style.display === "flex") {
    firstNews.style.display = "flex";
    secondNews.style.display = "none";
  }
}

previousButton.onclick = back;







