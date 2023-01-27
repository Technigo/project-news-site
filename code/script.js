document.getElementById("burger").onclick = function() {  
    var menu = document.getElementById("mainNavbar");
    if (menu.style.display === "none") {
        menu.style.display = "block";   
    } else {
        menu.style.display = "none";
    }
};  