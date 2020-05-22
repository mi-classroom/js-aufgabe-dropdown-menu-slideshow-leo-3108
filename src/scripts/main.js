//Hamburgermenu
var hamburgerbutton = document.querySelector(".hamburger-button");
var hamburgermenu = document.querySelector('.main-header__menu-bar-nav');

hamburgerbutton.addEventListener("click", function () {
    hamburgerbutton.classList.toggle("hamburger-button--is-open")
    hamburgermenu.classList.toggle("main-header__menu-bar-nav--is-open")
});
