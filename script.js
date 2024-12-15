const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});