// Init promo slider
(function () {
  const promoSlider = document.querySelector('.promo__container');

  if (promoSlider) {
    new Swiper(promoSlider, {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      }
    });
  }
})();

// Init team slider
(function () {
  const teamSlider = document.querySelector('.team__container');

  if (teamSlider) {
    new Swiper(teamSlider, {
      slidesPerView: 2.2,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
      },
      navigation: {
        prevEl: '.team__button--prev',
        nextEl: '.team__button--next',
      },
      grabCursor: true,
      loop: true,
    });
  }
})();

// Init cert slider
(function () {
  const certSlider = document.querySelector('.cert__container');

  if (certSlider) {
    new Swiper(certSlider, {
      slidesPerView: 2.6,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 40,
        }
      },
      grabCursor: true,
      loop: true,
    });
  }
})();

// Change header with scroll
(function () {
  const header = document.querySelector('.page-header');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    })
  }
})();
