document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
    });
});