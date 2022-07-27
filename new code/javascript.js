/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDropdown() {
  document.getElementById("dropdown-id").classList.toggle("toggle-dropdown");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("dropdown-id");
    if (myDropdown.classList.contains("toggle-dropdown")) {
      myDropdown.classList.remove("toggle-dropdown");
    }
  }
};
