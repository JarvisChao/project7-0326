/* ----------------------------------- */
/* ------ Custom ------ */
/* ----------------------------------- */
let isOpened = false;
const $navbar = document.querySelector('.l-navbar');
const $navbarBody = document.querySelector('.l-navbar__body');
const $burger = document.querySelector('.o-burger');
function toggleBurger() {
  if (!isOpened) {
    $navbar.classList.add('is-opened');
    $burger.classList.add('is-opened');
    isOpened = true;
    setTimeout(function() {
      $navbarBody.style.overflow = 'auto';
    }, 1000)
  } else {
    $navbar.classList.remove('is-opened');
    $burger.classList.remove('is-opened');
    $navbarBody.style.overflow = '';
    isOpened = false;
  }
}

// 滾動至 news 時改變背景顏色
const $news = document.querySelector('.l-news');
const $body = document.body;
window.addEventListener('scroll', function() {
  if ($news !== undefined) {
    // this = window
    // console.log(this)
    // $news.getBoundingClientRect().top; 偵測 news 元素的頂部
    const newsTop = this.scrollY + $news.getBoundingClientRect().top;
    const start = newsTop - 100;
    const end = newsTop + $news.offsetHeight / 1.2;
    if (this.scrollY > start && this.scrollY < end) {
      $body.classList.add('is-news-active');
    } else {
      $body.classList.remove('is-news-active');
    }
  }
});


/* ----------------------------------- */
/* ------ Plugin ------ */
/* ----------------------------------- */
const mySwiper = new Swiper('.l-header__swiper', {
  loop: true,
  // 緩慢施放
  longSwipesRatio: 0.1,
  speed: 1600,
	autoplay: {
    delay: 3000,
    // 手動拖曳後不取消自動撥放
    disableOnInteraction: false,
  },
})

const newsSwiper = new Swiper('.l-news__swiper', {
  longSwipesRatio: 0.1,
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 4,
  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
  on: {
    init: function() {
      lazyLoad.update()
    },
  },
  navigation: {
    prevEl: '.l-news__btn-swiper.--prev',
    nextEl: '.l-news__btn-swiper.--next',
  },
})

const $parallax = document.querySelector('.js-parallax');
const parallaxInstance = new Parallax($parallax, {
  // 滑鼠進入元素內才生效
  hoverOnly: true,
  // 滑鼠相對於指定元素（預設為可視區）
  relativeInput: true,
});
