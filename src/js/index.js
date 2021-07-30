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
    const header = document.querySelector('.page-header--fixed');

    if (header) {
      const isHeaderScrolling = () => header.classList.contains('scroll');

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200 && !isHeaderScrolling()) {
          header.classList.add('scroll');
        } else if (window.pageYOffset <= 200 && isHeaderScrolling()) {
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
            const priceItems = priceList.querySelectorAll('.price__item');

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
      const ESC_KEYCODE = 27;

      const closeButton = reviewPopup.querySelector('.popup__button-close');
      const openButtons = document.querySelectorAll('.open-review-popup');
      const overlay = document.querySelector('.overlay--popup');
      const body = document.querySelector('body');

      const closePopup = () => {
        overlay.classList.remove('show');
        reviewPopup.classList.remove('show');
        body.classList.remove('no-scroll');
        closeButton.removeEventListener('click', closePopup);
        overlay.removeEventListener('click', closePopup);
        document.removeEventListener('keydown', onEscPress);
      }

      const onEscPress = (evt) => {
        if (evt.keyCode === ESC_KEYCODE) {
          closePopup();
        }
      };

      if (openButtons && overlay) {
        openButtons.forEach(openButton => {
          openButton.addEventListener('click', () => {
            overlay.classList.add('show');
            reviewPopup.classList.add('show');
            body.classList.add('no-scroll');
            closeButton.addEventListener('click', closePopup);
            overlay.addEventListener('click', closePopup);
            document.addEventListener('keydown', onEscPress);
          });
        });
      }
    }
  })();

  // Open data popup
  (function () {
    const dataPopup = document.querySelector('.data-popup');

    if (dataPopup) {
      const ESC_KEYCODE = 27;

      const closeButton = dataPopup.querySelector('.popup__button-close');
      const openButtons = document.querySelectorAll('.open-data-popup');
      const overlay = document.querySelector('.overlay--popup');
      const body = document.querySelector('body');

      const closePopup = () => {
        overlay.classList.remove('show');
        dataPopup.classList.remove('show');
        body.classList.remove('no-scroll');
        closeButton.removeEventListener('click', closePopup);
        overlay.removeEventListener('click', closePopup);
        document.removeEventListener('keydown', onEscPress);
      }

      const onEscPress = (evt) => {
        if (evt.keyCode === ESC_KEYCODE) {
          closePopup();
        }
      };

      if (openButtons && overlay) {
        openButtons.forEach(openButton => {
          openButton.addEventListener('click', () => {
            overlay.classList.add('show');
            dataPopup.classList.add('show');
            body.classList.add('no-scroll');
            closeButton.addEventListener('click', closePopup);
            overlay.addEventListener('click', closePopup);
            document.addEventListener('keydown', onEscPress);
          });
        });
      }
    }
  })();

  // Open feature popup
  (function () {
    const openButtons = document.querySelectorAll('.features__link');

    if (openButtons) {
      const ESC_KEYCODE = 27;

      const overlay = document.querySelector('.overlay--popup');
      const body = document.querySelector('body');

      openButtons.forEach((openButton) => {
        openButton.addEventListener('click', (evt) => {
          evt.preventDefault();

          const featurePopupID = openButton.getAttribute('data-name');
          const featurePopup = document.querySelector(`#${featurePopupID}`);

          if (featurePopup) {
            const featurePopupCloseButton = featurePopup.querySelector('.popup__button-close');

            const closePopup = () => {
              overlay.classList.remove('show');
              featurePopup.classList.remove('show');
              body.classList.remove('no-scroll');
              featurePopupCloseButton.removeEventListener('click', closePopup);
              overlay.removeEventListener('click', closePopup);
              document.removeEventListener('keydown', onEscPress);
            }

            const onEscPress = (evt) => {
              if (evt.keyCode === ESC_KEYCODE) {
                closePopup();
              }
            };

            overlay.classList.add('show');
            featurePopup.classList.add('show');
            body.classList.add('no-scroll');

            featurePopupCloseButton.addEventListener('click', closePopup);
            overlay.addEventListener('click', closePopup);
            document.addEventListener('keydown', onEscPress);
          }
        });
      });
    }
  })();

  // Header catalog height
  (function () {
    const headerCatalog = document.querySelector('.header-catalog');

    if (headerCatalog) {
      const COLUMNS_COUNT = 4;
      const CATALOG_ITEM_MARGIN = 15;

      const headerCatalogContent = headerCatalog.querySelector('.header-catalog__content');
      const catalogLists = headerCatalog.querySelectorAll('.header-catalog__list');

      const setHeaderCatalogHeight = () => {
        let catalogListsHeights = [];

        headerCatalog.style.display = 'block';

        catalogLists.forEach((catalogList) => {
          catalogList.style.display = 'block';
          const catalogItems = catalogList.querySelectorAll('.header-catalog__item');
          let catalogListHeight = 0;

          if (catalogItems) {
            let catalogItemsHeight = 0;
            catalogItems.forEach((catalogItem) => {
              // add 1px because Firefox calculate element height as decimal, when JS offsetHeight show integer
              catalogItemsHeight += (catalogItem.offsetHeight + CATALOG_ITEM_MARGIN + 1);
            });
            catalogList.style.display = null;
            catalogListHeight = Math.ceil(catalogItemsHeight / COLUMNS_COUNT) + (COLUMNS_COUNT - 2) * CATALOG_ITEM_MARGIN;
          }

          catalogListsHeights.push(catalogListHeight);
        });

        headerCatalog.style.display = null;
        headerCatalogContent.style.height = `${Math.max(...catalogListsHeights)}px`;
      }

      setHeaderCatalogHeight();
    }
  })();

  // Open header catalog
  (function () {
    const openButtons = document.querySelectorAll('.open-header-catalog');

    if (openButtons) {
      const ESC_KEYCODE = 27;
      const HIDE_CATALOG_SCREEN_WIDTH = 1600;

      const headerCatalog = document.querySelector('.header-catalog');
      const catalogMenus = headerCatalog.querySelectorAll('.header-catalog__list');
      const closeButton = headerCatalog.querySelector('.header-catalog__button-close');
      const overlay = document.querySelector('.overlay--header');
      const body = document.querySelector('body');

      const mobileNavigation = document.querySelector('.mobile-navigation');
      const mobileCatalogs = document.querySelectorAll('.mobile-catalog');
      const burgerButtons = document.querySelectorAll('.top-header__burger');

      const closeMobileMenu = () => {
        burgerButtons.forEach((burgerButton) => {
          burgerButton.classList.remove('show');
        });
        mobileNavigation.classList.remove('show');
        mobileCatalogs.forEach((mobileCatalog) => {
          mobileCatalog.classList.remove('show');
        });
        burgerButtons.forEach((burgerButton) => {
          burgerButton.removeEventListener('click', closeMobileMenu);
        });
      }

      const closeCatalogMenus = () => {
        catalogMenus.forEach((catalogMenu) => {
          catalogMenu.classList.remove('show')
        });
      }

      const closeHeaderCatalog = () => {
        closeCatalogMenus();
        headerCatalog.classList.remove('show');
        overlay.classList.remove('show');
        body.classList.remove('no-scroll');

        closeButton.removeEventListener('click', closeHeaderCatalog);
        overlay.removeEventListener('click', closeHeaderCatalog);
        document.removeEventListener('keydown', onEscPress);
      }

      const onEscPress = (evt) => {
        if (evt.keyCode === ESC_KEYCODE) {
          closeHeaderCatalog();
        }
      };

      openButtons.forEach((openButton) => {
        openButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          closeMobileMenu();

          const catalogID = openButton.getAttribute('data-name');
          const catalogMenu = headerCatalog.querySelector(`#${catalogID}`);

          if (!catalogMenu.classList.contains('show')) {
            headerCatalog.classList.add('show');
            closeCatalogMenus();
            catalogMenu.classList.add('show');
            overlay.classList.add('show');
            body.classList.add('no-scroll');

            closeButton.addEventListener('click', closeHeaderCatalog);
            overlay.addEventListener('click', closeHeaderCatalog);
            document.addEventListener('keydown', onEscPress);
          } else {
            closeHeaderCatalog();
          }
        })
      });

      window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth <= HIDE_CATALOG_SCREEN_WIDTH) {
          closeHeaderCatalog();
        }
      });
    }
  })();

  // Open mobile menu
  (function () {
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenu) {
      const ESC_KEYCODE = 27;

      const mobileNavigation = mobileMenu.querySelector('.mobile-navigation');
      const mobileCatalogs = mobileMenu.querySelectorAll('.mobile-catalog');
      const burgerButtons = document.querySelectorAll('.top-header__burger');
      const openMobileCatalogsButtons = mobileMenu.querySelectorAll('.mobile-navigation__more-link');
      const closeMobileCatalogsButtons = mobileMenu.querySelectorAll('.mobile-catalog__back-link');
      const overlay = document.querySelector('.overlay--header');
      const body = document.querySelector('body');

      const headerCatalog = document.querySelector('.header-catalog');
      const catalogMenus = headerCatalog.querySelectorAll('.header-catalog__list');
      const closeHeaderCatalogButton = headerCatalog.querySelector('.header-catalog__button-close');

      if (burgerButtons) {
        const closeHeaderCatalog = () => {
          catalogMenus.forEach((catalogMenu) => {
            catalogMenu.classList.remove('show')
          });
          headerCatalog.classList.remove('show');
          closeHeaderCatalogButton.removeEventListener('click', closeHeaderCatalog);
        }

        const closeMobileMenu = () => {
          burgerButtons.forEach((burgerButton) => {
            burgerButton.classList.remove('show');
          });
          mobileNavigation.classList.remove('show');
          mobileCatalogs.forEach((mobileCatalog) => {
            mobileCatalog.classList.remove('show');
          });
          overlay.classList.remove('show');
          body.classList.remove('no-scroll');

          burgerButtons.forEach((burgerButton) => {
            burgerButton.removeEventListener('click', closeMobileMenu);
          });
          overlay.removeEventListener('click', closeMobileMenu);
          document.removeEventListener('keydown', onEscPress);
        }

        const onEscPress = (evt) => {
          if (evt.keyCode === ESC_KEYCODE) {
            closeMobileMenu();
          }
        };

        burgerButtons.forEach((burgerButton) => {
          burgerButton.addEventListener('click', () => {
            closeHeaderCatalog();
            burgerButton.classList.add('show');
            mobileNavigation.classList.add('show');
            overlay.classList.add('show');
            body.classList.add('no-scroll');
            burgerButton.addEventListener('click', closeMobileMenu);
            overlay.addEventListener('click', closeMobileMenu);
            document.addEventListener('keydown', onEscPress);
          });
        });

        openMobileCatalogsButtons.forEach((openButton) => {
          openButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            const mobileCatalogID = openButton.getAttribute('data-name');
            const mobileCatalog = mobileMenu.querySelector(`#${mobileCatalogID}`);
            mobileCatalog.classList.add('show');
          })
        });

        closeMobileCatalogsButtons.forEach((closeButton) => {
          closeButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            const mobileCatalog = closeButton.closest('.mobile-catalog');
            mobileCatalog.classList.remove('show');
          })
        });
      }
    }
  })();
});
