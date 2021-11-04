// $('.one-time').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     // adaptiveHeight: true
//   });
  
$('.one-time').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows:true,
    prevArrow: $ ('.prev'),
    nextArrow: $ ('.next')
});