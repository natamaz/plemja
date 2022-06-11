$(document).ready(function(){

    $('.team-slider').slick({
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

    $('.slick-current.slick-active').next().addClass('actiev');

    $('.slick-arrow').on('click', function(){
        $('.slick-slide').removeClass('actiev');
        $('.slick-current.slick-active').next().addClass('actiev');
    });
    
    $('.team-link li').on('click', function(){
        $('.team-link li').removeClass('active');
        $(this).addClass('active');
        $('.team-slider').removeClass('active');
        var dataSlider = $(this).data('slider');
        $('.' + dataSlider).addClass('active');
    });

    $('.сlose-popup').on('click', function(){
        $('.team-popup').removeClass('active');
    });

    $('.сlose').on('click', function(){
        $('.team-popup').removeClass('active');
    });

    $('.item-slider a').on('click', function(){
        $('.team-popup').addClass('active');
        var popupContent = $(this).parent('.item-slider').find('.popup-text').html();
        $('.popup-scroll').html(popupContent);
    });

});
