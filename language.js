/* here is my first try into java, i have coded a little in C#. So the 
fundamentals was there just a bit diffrent. but i created a function that
will "start if the user clicks on the button. When the user does a menu
will "show" (dropdown) with all the links, and if the user clicks outside
the menu field it will "disappear". the function will start on "onclick".
and the lenght of the dropdown menu will be as long as the "dropdown-content". */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }