// Slider
new WOW().init();
var mySwiper = new Swiper(".swiper-container", {
   loop: true,
   autoplay: true,
   autoplayTimeout: 3400,
   speed: 1500,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});

// Открытие и закрытие блока
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// пропажа бургер меню при клике на элемент
$(document).ready(function () {
   $('.header__link').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// Вычисление возраст
let age = document.querySelector('.me__age');

function get_current_age(date) {
   let hb = (new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000) | 0;
   age.innerHTML = `Age: ${hb}`;
};

get_current_age('2001-01-12');
