// navigation bar
const menu = document.querySelector(".hamburger");
const links = document.querySelector(".mobile-menu");

let prevScroll = window.pageYOffset;

menu.addEventListener('click', function(){
    links.classList.toggle("show-links")
    window.addEventListener('scroll', function(){
        links.classList.remove("show-links")
    })
});