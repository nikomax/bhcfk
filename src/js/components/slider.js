import 'slick-carousel';

$('.js-slider').slick({
  prevArrow: '<button class="btn-slick btn-slick--prev" type="button"><svg class="icon icon-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-left"></use></svg></button>',
  nextArrow: '<button class="btn-slick btn-slick--next" type="button"><svg class="icon icon-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-right"></use></svg></button>',
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
});
