const slider = $(".feedback__items").slick({
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    arrows: false,
  });

  $('.slider__arrow--prev').on('click', function() {
    slider.slick('slickPrev');
  });
  $(".slider__arrow--next").on('click', function() {
    slider.slick('slickNext');
  });