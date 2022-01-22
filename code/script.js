// JS script for news website

//marquee/news ticker with static info that could perhaps be sourced with fetch api eventually
let blackStripe = document.getElementsByClassName("black-stripe")[0];
let marquee = document.createElement("marquee");
blackStripe.appendChild(marquee)

let infos = [
    "ACTIVE CORONA CASES",
    "WORLD: 55,723,407",
    "TOP 5 COUNTRIES",
    "USA: 23,031,325",
    "FRANCE: 5,025,933",
    "UK: 3,676,112",
    "SPAIN: 2,752,905",
    "ITALY: 2,548,857"
]

let msg = infos.join("&nbsp &nbsp &nbsp &nbsp &nbsp")
marquee.innerHTML = msg;

//Makes 'card' expand when a button is clicked byy toggling 'expand' class on the card and 'hide' class so that the content becomes visible
let buttons = document.getElementsByClassName("xpand");
for (let button of buttons) {
    button.onclick = function(event) {
        event.target.parentElement.parentElement.classList.toggle("expand")
        let nextSib = event.target.parentElement.nextElementSibling 
        let goalSib = nextSib.nextElementSibling
        goalSib.classList.toggle("hide")
    }
}

//sets the position for second 'invisible' logo img to be on top of first one
//and readjust it when the screen is resized
let correctLeft = document.getElementById("logo1").offsetLeft;
let correctTop = document.getElementById("logo1").offsetTop;
let logo2 = document.getElementsByClassName("logo2")[0];
logo2.style.left = correctLeft + "px";
logo2.style.top = correctTop + "px";

function changeLogoPos() {
    let logo2 = document.getElementsByClassName("logo2")[0];
    logo2.style.left = document.getElementById("logo1").offsetLeft + "px";
    logo2.style.top = document.getElementById("logo1").offsetTop + "px";
}

window.addEventListener('load', changeLogoPos)
window.addEventListener('resize', changeLogoPos);
