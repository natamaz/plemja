$(document).ready(function(){

    $('.services-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
              }
            }
        ]
    });

    $('.department-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
      prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
              prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
            }
          }
      ]
  });

    $('.services-item > p').matchHeight({
        byRow: false
    });

    $('.services-lnternal-text').mCustomScrollbar();

});


