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



class TextScramble {
   constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
   }
   setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
         const from = oldText[i] || '';
         const to = newText[i] || '';
         const start = Math.floor(Math.random() * 40);
         const end = start + Math.floor(Math.random() * 40);
         this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
   }
   update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
         let { from, to, start, end, char } = this.queue[i];
         if (this.frame >= end) {
            complete++;
            output += to;
         } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
               char = this.randomChar();
               this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
         } else {
            output += from;
         }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
         this.resolve();
      } else {
         this.frameRequest = requestAnimationFrame(this.update);
         this.frame++;
      }
   }
   randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
   }
}

let phrases = ['HTML 5', 'JavaScript',
   'Angular', "Andrii Kapran", 'end'];

const el = document.querySelector('.me__name');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
   fx.setText(phrases[counter]).then(() => {
      let timer = setTimeout(next, 450);
      if (counter === phrases.length - 1) {
         clearTimeout(timer);
      }
   })
   counter = (counter + 1) % phrases.length;
}

next();