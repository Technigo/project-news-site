const hamburger = document.querySelector('.hamburger');
let menuOpen = false;
hamburger.addEventListener('click',()=>{
    if(!menuOpen){
        hamburger.classList.add('open');
        menuOpen = true;;
    } else{
        hamburger.classList.remove('open');
        menuOpen = false;;
    }
})