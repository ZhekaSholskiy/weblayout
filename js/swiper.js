const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4
    },
  }
})

const sameWaveSwiper = new Swiper('.same-wave-swiper', {
  pagination: {
    el: '.swiper-same-wave-pagination',
    clickable: true,
  },
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  loop: true,
})
