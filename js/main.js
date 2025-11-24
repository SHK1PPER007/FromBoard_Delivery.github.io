document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('.nav__link');

  if (burger && menu) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('menu--active');
      document.body.classList.toggle('dis-scroll');
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        document.body.classList.remove('dis-scroll');
      });
    });
  }

  const initReviewsSlider = () => {
    const swiper = new Swiper('.reviews__swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      speed: 400,
      
      navigation: {
        nextEl: '.reviews__btn-next',
        prevEl: '.reviews__btn-prev',
      },
      
      pagination: {
        el: '.reviews__pagination',
        clickable: true,
      },
      
      breakpoints: {
        590: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 24,
        }
      }
    });
  };

  if (document.querySelector('.reviews__swiper')) {
    initReviewsSlider();
  }
});

window.addEventListener('resize', function() {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  
  if (window.innerWidth > 758) {
    if (burger && menu) {
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      document.body.classList.remove('dis-scroll');
    }
  }
});