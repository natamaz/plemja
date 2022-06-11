$(document).ready(function(){

    $('.news-slider').slick({
        vertical: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-right-arrow"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-right-arrow"></i></button>',
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
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

    $('.news-lnternal-text').mCustomScrollbar();

});


