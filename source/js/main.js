/* global jQuery */

(function ($) {
  $('#featuredCarousel').slick({
    centerMode: true,
    slidesToShow: 7,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1640,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  $('#testimonialCarousel').slick({
    dots: true,
    arrows: false,
    fade: true
  })

  $('#instagramCarousel').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 7,
    focusOnSelect: true
  })
})(jQuery)
