/* global jQuery */

;(function($) {
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

  class Tab {
    constructor(el) {
      this.tab = $(el)
      this.link = this.tab.find('.md-tab__link')
      this.pane = this.tab.find('.md-tab__pane')
    }

    init() {
      const pane = this.pane
      const link = this.link

      link.on('click', function(e) {
        link.removeClass('active')
        $(this).addClass('active')
        e.preventDefault()
        $.each(pane, (index, p) => {
          if ($(p).attr('id') === $(this).attr('href').slice(1)) {
            $(p).addClass('active')
          } else {
            $(p).removeClass('active')
          }
        })
      })
    }
  }

  new Tab('#tab-1').init()
})(jQuery)
