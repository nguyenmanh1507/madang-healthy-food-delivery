(function ($) {
  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 16,
    items: 2,
    responsive: {
      1024: {
        items: 6
      },
      640: {
        items: 4,
      }
    }
  });
})(jQuery)
