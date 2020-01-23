$('.slider-top').slick({
    prevArrow: '<div class="slider-top__button slider-top__prev"></div>',
    nextArrow: '<div class="slider-top__button slider-top__next"></div>',
});


// SLIDER
let show = null;
if (window.outerWidth > 768) {
    show = 2;
} else {
    show = 1;
}
$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: show,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });
});

// SLIDER
// toggle

document.querySelector('.header__toggle').addEventListener("click", function (event) {

    const nav = document.querySelector('.nav');
    if (document.querySelector('.header__toggle-inner--active')) {

        nav.classList.remove('nav--active');

        document.querySelector('.header__toggle-inner').classList.remove('header__toggle-inner--active');
    } else {

        nav.classList.add('nav--active');

        document.querySelector('.header__toggle-inner').classList.add('header__toggle-inner--active');
    }


})
// toggle

// dropdown
document.querySelector('.dropdown').addEventListener("click", function (event) {

    const list = document.querySelector('.dropdown__ul');
    if (document.querySelector('.dropdown__toggle--active')) {
        list.classList.remove('dropdown__ul--active');
        document.querySelector('.dropdown__toggle').classList.remove('dropdown__toggle--active');
    } else {
        list.classList.add('dropdown__ul--active');
        document.querySelector('.dropdown__toggle').classList.add('dropdown__toggle--active');
    }


})
// dropdown