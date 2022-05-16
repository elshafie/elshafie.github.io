//swiper js
const swiper = new Swiper('.swiper', {
    // slidesPerView: 3,
    // spaceBetween: 30,
    // slidesPerGroup: 3,
    // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      // when window width is >= 600px
      600: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });