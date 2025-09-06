const headerNav = document.querySelector('.main-header__nav');
const buttonBurger = document.querySelector('.main-header__toggler');

headerNav.classList.remove('main-header__nav--nojs');


buttonBurger.addEventListener('click', () => {
  if(headerNav.classList.contains('main-header__nav--closed')) {
    headerNav.classList.remove('main-header__nav--closed');
    headerNav.classList.add('main-header__nav--opened');
  } else {
    headerNav.classList.remove('main-header__nav--opened');
    headerNav.classList.add('main-header__nav--closed');
  }
}
);

/* в этот файл добавляет скрипт про интерактивную карту*/
const contactsElement = document.querySelector('.contacts-map-script-wrap');

contactsElement.classList.remove('contacts-map-script-wrap--nojs');
