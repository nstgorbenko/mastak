"use strict";

// Init team slider
(function () {
  const teamSlider = document.querySelector('.team__container');

  if (teamSlider) {
    new Swiper(teamSlider, {
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        prevEl: '.team__button--prev',
        nextEl: '.team__button--next'
      },
      grabCursor: true,
      loop: true
    });
  }
})(); // Init cert slider


(function () {
  const certSlider = document.querySelector('.cert__container');

  if (certSlider) {
    new Swiper(certSlider, {
      slidesPerView: 5,
      spaceBetween: 40,
      grabCursor: true,
      loop: true
    });
  }
})();