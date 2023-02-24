$(function () {
    $('.banner_slider').slick({
       autoplay: true,
       prevArrow: `<i class="fa-solid fa-chevron-left banner_slider_arrow"></i>`,
       nextArrow:`<i class="fa-solid fa-chevron-right banner_slider_arrow"></i>`,
    })
 
    $('.about_slider').slick({
       arrows: false,
       dots: true,
       dotsClass:'about_slider_dots'
    });
 
    $('.course_slider').slick({
       slidesToShow: 3,
       responsive: [
          {
             breakpoint: 992,
             settings: {
                slidesToShow: 2,
             }
          },
          {
             breakpoint: 600,
             settings: {
                slidesToShow: 1,
             }
          }
       ]
    });
 })