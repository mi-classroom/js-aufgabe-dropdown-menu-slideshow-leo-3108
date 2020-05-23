//Hamburgermenu
function toggleMenu() {
    var hamburgerButton = document.querySelector(".hamburger-button");
    var hamburgerMenu = document.querySelector('.main-header__menu-bar-nav');

    hamburgerButton.addEventListener("click", function () {
        hamburgerButton.classList.toggle("hamburger-button--is-open")
        hamburgerMenu.classList.toggle("main-header__menu-bar-nav--is-open")
    });
}
toggleMenu()

//Slideshow
function toggleSlide() {
    const slides = document.querySelectorAll('[data-slide]');
    const interactionElementNext = document.querySelector('[data-nav-next-slide]');
    const interactionElementPrevious = document.querySelector('[data-nav-previous-slide]');

    let sichtbaresBild = 0
    slides[sichtbaresBild].classList.toggle('slide-show__slide--visible')

    interactionElementNext.addEventListener('click', () => { slidewechseln(sichtbaresBild + 1) });
    interactionElementPrevious.addEventListener('click', () => { slidewechseln(sichtbaresBild - 1) });

    function slidewechseln(neuesBild) {
        slides[sichtbaresBild].classList.toggle('slide-show__slide--visible')

        if (neuesBild < 0) {
            neuesBild = slides.length - 1
        }
        if (neuesBild >= slides.length) {
            neuesBild = 0
        }
        slides[neuesBild].classList.toggle('slide-show__slide--visible')
        sichtbaresBild = neuesBild
    }
}
toggleSlide()