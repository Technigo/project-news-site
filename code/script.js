/* ATTEMPT TO MOVE ONCLICK FROM HTML TO SCRIPT FILE
const menuToggle = document.getElementById("menu-toggle");
menuToggle.onclick = function () { toggleMenu() };
*/

function toggleMenu() {
    const menu = document.getElementById("menu-drawer");
    menu.classList.toggle("show");
}