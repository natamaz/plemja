$(document).ready(function(){

    $('.portfolio-slider').slick({
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

    $('.portfolio > p').matchHeight({
        byRow: false
    });

    $('.portfolio-item').on('click', function(){
        $('.portfolio-slider').removeClass('active');
        $('.portfolio-item').removeClass('active');
        $(this).addClass('active');
        var dataSlider = $(this).data('slider');
        $('.' + dataSlider).addClass('active');

    });

});


