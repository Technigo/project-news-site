// script.js

// Function to handle the back-to-top button
function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
    scrollFunction();
};

var backToTopBtn = document.getElementById("backToTopBtn");
if (backToTopBtn) {
    backToTopBtn.onclick = function () {
        scrollToTop();
    };
}

// Function to toggle the navigation bar for smaller screens
function toggleNav() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Function to hide the dropdown content
function hideDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
}

// Function to show the dropdown content
function showDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';
}

// Function to open the newsletter popup
function openPopup() {
    document.getElementById('newsletterModal').style.display = 'block';
}

// Function to close the newsletter popup
function closePopup() {
    document.getElementById('newsletterModal').style.display = 'none';
}

// Newsletter form
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    console.log('Subscribed with email: ' + email);
    closePopup(); 
});
