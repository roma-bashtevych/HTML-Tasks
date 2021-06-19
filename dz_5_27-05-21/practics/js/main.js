document.querySelector('.menu__btn').onclick = function () {
  document.querySelector('.menu__line--top').classList.toggle('active')
  document.querySelector('.menu__line--bottom').classList.toggle('active')
  document.querySelector('.menu__line--center').classList.toggle('active')
  document.querySelector('.menu__list').classList.toggle('menu__list--active')
};

document.querySelector('.filter__all').onclick = function(){
 document.querySelector('.filter__list').classList.toggle('filter__list--active')
};