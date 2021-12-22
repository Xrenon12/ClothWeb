const swiper = new Swiper('.footer-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
const modelsSwiper = new Swiper('.models-swiper', {
  // Optional parameters
  slidesPerView: 4,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    650: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    }
  }
});
const salesSwiper = new Swiper('.sales-swiper', {
  // Optional parameters
  slidesPerView: 4,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    650: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    430: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    }
  }
});
const sublist = document.getElementsByClassName('footer__sublist');
const list = document.getElementsByClassName('footer__list-link');
const polygon = document.getElementsByClassName('footer__list-link::after');
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', event => {
    sublist[i].style.display = sublist[i].style.display == 'none' ? 'block' : 'none';
  })
}
