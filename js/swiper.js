var slider1 = new Swiper("#slider1", {
  initialSlide: 0,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  speed: 1000,
  freeMode: false,
  mousewheel: {
    thresholdDelta: 30,
  },
  pagination: {
    el: ".swiper-pagination--1",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  },
  on: {
    click() {
      slider1.slideTo(this.clickedIndex);
    },
  },
});

var slider2 = new Swiper("#slider2", {
  initialSlide: 3,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 1000,
  freeMode: false,
  loop: true,
  mousewheel: {
    thresholdDelta: 30,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  },
  on: {
    click() {
      slider2.slideTo(this.clickedIndex);
    },
  },
});
