const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    type: "progressbar",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});