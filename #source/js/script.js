window.addEventListener('load', function () {
  //Скрипт открытия/закрытия меню
  const body = document.querySelector('body');
  const menu = document.querySelector('.menu-wrapper');
  const menuSideBar = document.querySelector('.menu-sidebar');
  const btnToggle = document.querySelector('.menu-sidebar__btn-toggle');
  const lockPaddingValue = window.innerWidth - menuSideBar.offsetWidth + 'px';

  btnToggle.addEventListener('click', function (e) {
    menu.classList.toggle('open');
    body.classList.toggle('lock');
    btnToggle.classList.toggle('open');

    if (window.innerWidth < 991) {
      if (menu.classList.contains('open')) {
        menuSideBar.style.paddingRight = lockPaddingValue;
      } else {
        menuSideBar.style.paddingRight = '0px';
      }
    }
  });

  //Инициализация свайпера Сотрудники
  const index_about_swiper = new Swiper('.index-about-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.index-about-swiper-button-next',
      prevEl: '.index-about-swiper-button-prev',
    },
    pagination: {
      el: '.index-about-swiper-pagination',
      clickable: true,
    },
  });

  //Инициализация свайпера Партнёры
  const partners_swiper = new Swiper('.partners-swiper', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      991: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1920: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.partners-swiper-button-next',
      prevEl: '.partners-swiper-button-prev',
    },
  });
});
