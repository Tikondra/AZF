// меню
(function () {
  var menu = document.querySelector('.header-navigation__list');
  var menuOpenBtn = document.querySelector('.header-navigation__open-menu');
  var btnSvg = document.querySelector('.ham1');

   menuOpenBtn.addEventListener('click', function () {
      menu.classList.toggle('header-navigation__list--hide');
      menuOpenBtn.classList.toggle('header__open-menu--active');
      btnSvg.classList.toggle('active');
   });
})();

let firstClickFlag = false;
const searchForm = document.querySelector('#searchform');
const searchBtn = searchform.querySelector('#searchsubmit');
const searchInput = searchform.querySelector(`.search-input`);

const hide = (evt) => {
   const newTarget = evt.relatedTarget;
   if (newTarget !== searchBtn) {
      searchform.classList.remove(`searchform--active`);
      firstClickFlag = false;
      searchInput.removeEventListener('blur', hide);
   }
}

searchBtn.addEventListener(`click`, (evt) => {
   if (window.matchMedia("screen and (min-width: 1130px)").matches && !firstClickFlag) {
      evt.preventDefault();
      searchform.classList.add(`searchform--active`);
      firstClickFlag = true;
      searchInput.focus();
      searchInput.addEventListener(`blur`, hide)
   }
})



