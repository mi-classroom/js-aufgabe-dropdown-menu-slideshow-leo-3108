//Hamburgermenu
var hamburgerbutton = document.getElementsByClassName('hamburger-button');
var hamburgermenu = document.getElementsByClassName('main-header__menu-bar-nav');

hamburgerbutton[0].addEventListener("click", function () {
    hamburgerbutton[0].classList.toggle("hamburger-button--is-open")
    hamburgermenu[0].classList.toggle("main-header__menu-bar-nav--is-open")
});
