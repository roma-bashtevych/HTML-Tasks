$(function () {

  $('.news__slider').slick({
    // autoplay: true,
    arrows: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="image/slider/arrow-pre.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="image/slider/arrow-next.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.menu__btn, .menu__list').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('overflow-hidden');
    $('.menu__line--top, .menu__line--bottom, .menu__line--center').toggleClass('active');
  });


});