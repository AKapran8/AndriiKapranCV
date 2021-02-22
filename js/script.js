// Открытие и закрытие блока
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// пропаха бургер меню при клике на элемент
$(document).ready(function () {
   $('.header__link').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// Плавный скролл
$(document).ready(function () {
   $('#btn__me').on('click', function (e) {
      e.preventDefault();
      let top = $('#me').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 500);
   });

   $('#btn__skills').on('click', function (e) {
      e.preventDefault();
      let top = $('#skills').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 1000);
   });

   $('#btn__education').on('click', function (e) {
      e.preventDefault();
      let top = $('#education').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 1200);
   });

   $('#btn__projects').on('click', function (e) {
      e.preventDefault();
      let top = $('#projects').offset().top;
      $('html, body').animate({
         scrollTop: top
      }, 1700);
   });
});

// Вычисление возраст
let age = document.querySelector('.me__age');

function get_current_age(date) {
   let hb = (new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000) | 0;
   age.innerHTML = `Age: ${hb}`;
};

get_current_age('2001-01-12');






