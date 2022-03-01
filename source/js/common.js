// slider
let banner = new Swiper('.missions__slider', {
  slidesPerView: 5,
  spaceBetween: 15,
  navigation: {
    prevEl: '.missions__slider-btn--prev',
    nextEl: '.missions__slider-btn--next',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1300: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});