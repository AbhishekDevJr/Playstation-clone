window.onscroll = function() {myFunction()};

const navBar = document.querySelector('nav');
const bannerDiv = document.querySelector('.latest-game-banner');

let sticky = navBar.offsetTop;

function myFunction(){

    if(window.pageYOffset >= sticky){
        navBar.classList.add("stickyTemp");
        bannerDiv.classList.add("tempBanner");
    }
    else {
        navBar.classList.remove("stickyTemp");
        bannerDiv.classList.remove("tempBanner");
    }
}