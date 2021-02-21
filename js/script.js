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