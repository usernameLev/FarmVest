// function menuInit() {
//   if (document.querySelector('.icon-menu')) {
//     document.addEventListener('click', function (e) {
//       if (bodyLockStatus && e.target.closest('.icon-menu')) {
//         bodyLockToggle();
//         document.documentElement.classList.toggle('menu-open');
//       }
//     });
//   }
// }

// function menuOpen() {
//   bodyLock();
//   document.documentElement.classList.add('menu-open');
// }

// function menuClose() {
//   bodyUnlock();
//   document.documentElement.classList.remove('menu-open');
// }

// menuInit();

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
