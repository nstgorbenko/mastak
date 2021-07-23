document.addEventListener('DOMContentLoaded', () => {
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

  // Pinterest layout for reviews
  (function () {
    const container = document.getElementById('pinterest');

    if (container) {
      const ScreenWidth = {
        TABLET: 1440,
        MOBILE: 768,
      };

      const ColumnsCount = {
        DESKTOP: 3,
        TABLET: 2,
        MOBILE: 1,
      };

      const makePinterestLayout = () => {
        const currentScreenWidth = document.documentElement.clientWidth;

        let currentColumnsCount;
        if (currentScreenWidth > ScreenWidth.TABLET) {
          currentColumnsCount = ColumnsCount.DESKTOP;
        } else if (currentScreenWidth > ScreenWidth.MOBILE) {
          currentColumnsCount = ColumnsCount.TABLET;
        } else {
          currentColumnsCount = ColumnsCount.MOBILE;
        }

        const columnsHeights = Array(currentColumnsCount).fill(0);

        Array.from(container.children).forEach((child, i) => {
          const order = i % currentColumnsCount;
          child.style.order = order;
          columnsHeights[order] += parseFloat(child.clientHeight);
        });

        container.style.height = Math.max(...columnsHeights) + 'px';
      }

      makePinterestLayout();
      window.addEventListener('resize', makePinterestLayout);
    }
  })();

  // Price list container height
  (function () {
    const priceLists = document.querySelectorAll('.price__list');

    if (priceLists) {
      const TABLET_WIDTH = 1024;
      const PRICE_ITEM_MARGIN = 30;

      const setPriceListsHeight = () => {
        const currentScreenWidth = document.documentElement.clientWidth;

        priceLists.forEach((priceList) => {
          if (currentScreenWidth > TABLET_WIDTH) {
            const priceListContainer = priceList.closest('.price__tab');
            const priceItems = priceList.querySelectorAll(".price__item");

            if (priceItems) {
              let priceListHeight = 0;
              priceListContainer.style.display = 'block';
              priceItems.forEach((priceItem) => {
                priceListHeight += (priceItem.offsetHeight + PRICE_ITEM_MARGIN);
              });
              priceListContainer.style.display = null;
              priceList.style.height = `${Math.ceil(priceListHeight / 2) + PRICE_ITEM_MARGIN}px`;
            } else {
              priceList.style.height = 0;
            }

          } else {
            priceList.style.height = 'auto';
          }
        });
      }

      setPriceListsHeight();
      window.addEventListener('resize', setPriceListsHeight);
    }
  })();

  // Open review popup
  (function () {
    const reviewPopup = document.querySelector('.review-popup');

    if (reviewPopup) {
      const closeButton = reviewPopup.querySelector('.popup__button-close');
      const openButtons = document.querySelectorAll('.open-review-popup');
      const overlay = document.querySelector('.overlay');
      const body = document.querySelector('body');

      const closePopup = () => {
        overlay.classList.remove('show');
        reviewPopup.classList.remove('show');
        body.classList.remove('no-scroll');
        closeButton.removeEventListener('click', closePopup);
        overlay.removeEventListener('click', closePopup);
      }

      if (openButtons && overlay) {
        openButtons.forEach(openButton => {
          openButton.addEventListener('click', () => {
            overlay.classList.add('show');
            reviewPopup.classList.add('show');
            body.classList.add('no-scroll');
            closeButton.addEventListener('click', closePopup);
            overlay.addEventListener('click', closePopup);
          });
        });
      }
    }
  })();

    // Open data popup
    (function () {
      const dataPopup = document.querySelector('.data-popup');

      if (dataPopup) {
        const closeButton = dataPopup.querySelector('.popup__button-close');
        const openButtons = document.querySelectorAll('.open-data-popup');
        const overlay = document.querySelector('.overlay');
        const body = document.querySelector('body');

        const closePopup = () => {
          overlay.classList.remove('show');
          dataPopup.classList.remove('show');
          body.classList.remove('no-scroll');
          closeButton.removeEventListener('click', closePopup);
          overlay.removeEventListener('click', closePopup);
        }

        if (openButtons && overlay) {
          openButtons.forEach(openButton => {
            openButton.addEventListener('click', () => {
              overlay.classList.add('show');
              dataPopup.classList.add('show');
              body.classList.add('no-scroll');
              closeButton.addEventListener('click', closePopup);
              overlay.addEventListener('click', closePopup);
            });
          });
        }
      }
    })();
});
