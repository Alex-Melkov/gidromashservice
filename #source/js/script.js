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
});
