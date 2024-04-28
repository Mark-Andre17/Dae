// прелоадер
window.addEventListener('load', function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
// конец прелоадера
// меню бургера
let burger = document.querySelector('.burger-container');
let menu = document.querySelector('.header');
let burgerMenu = document.querySelectorAll('.burger-menu');
burger.addEventListener('click', function() {
    menu.classList.toggle('show-menu');
    burgerMenu[1].classList.toggle('active');
    burgerMenu[0].classList.toggle('active-rotate-up');
    burgerMenu[2].classList.toggle('active-rotate-down');
})
// слайдер1
let sliderLine = document.querySelector('.cosmetic-sliders');
let buttonPrev = document.querySelector('.cosmetic-button__prev');
let buttonNext = document.querySelector('.cosmetic-button__next');
let slider = document.querySelector('.cosmetic-slider');
offset = 0;
offsetGap = 30;
buttonNext.addEventListener('click', function() {
    offset = offset + offsetGap + slider.offsetWidth;
    if(offset > sliderLine.offsetWidth) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})
buttonPrev.addEventListener('click', function() {
    offset = offset - offsetGap - slider.offsetWidth;
    if(offset < 0) {
        offset = sliderLine.offsetWidth - slider.offsetWidth;
    }
    sliderLine.style.left = -offset + 'px';
})
// слайдер2
let sliderLine2 = document.querySelector('.follow-sliders');
let slider2 = document.querySelector('.follow-slide');
function autoSlider() {
    offset2 = 0;
    offsetGap2 = 12;
    setInterval((function() {
        offset2 = offset2 + offsetGap2 + slider2.offsetWidth;
        if(offset2 > (sliderLine2.offsetWidth - slider2.offsetWidth * 3 + offsetGap2 * 2)) {
            offset2 = 0;
        }
        sliderLine2.style.left = -offset2 + 'px';
    }), 2000) 
}
autoSlider();
//анимации 
document.addEventListener('DOMContentLoaded', function() {
    let greeting = document.querySelector('.greeting-block');
    let animSlider = document.querySelector('.slider');
    let sets = document.querySelector('.sets-block');
    let meetImg = document.querySelector('.meet-block-img');
    let meetInfo = document.querySelector('.meet-block-info');
    greeting.classList.add('animate-greeting');
    animSlider.classList.add('animate-slider');
    sets.classList.add('animate-sets');
    meetImg.classList.add('animate-meet');
    meetInfo.classList.add('animate-meet-info');
});