/*
|--------------------------------------------------------------------------
	Slick Slider
|--------------------------------------------------------------------------
*/
   $('.hot-deal').slick({
            responsive: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });
        $('.left').click(function () {
            $('.hot-deal').slick('slickPrev');
        })
        $('.right').click(function () {
            $('.hot-deal').slick('slickNext');
        })

//  $('.hot-deal').slick({
//   dots: true,
//   infinite: false,
//   prevArrow: ' <span><i class="fas fa-chevron-left"></i></span>',
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//        dots: false,
    
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });