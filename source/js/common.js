// slider
let banner = new Swiper('.missions__slider', {
  slidesPerView: 5,
  spaceBetween: 8,

  navigation: {
    prevEl: '.missions__slider-btn--prev',
    nextEl: '.missions__slider-btn--next',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1300: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    },
  }
});