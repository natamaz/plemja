$(document).ready(function(){

    $('#fullpage').fullpage({
        responsiveWidth: 768,
        scrollingSpeed: 1000,
        onLeave: function(origin, destination, direction){
            $('section').addClass('activeLeft');
            $('.menu-fix').addClass('active');
            if(direction == 'up'){
                if(origin.index == 1){
                    console.log(origin.index)
                    $('section').removeClass('activeLeft');
                    $('.menu-fix').removeClass('active');
                }
            }
        },
    });
    
    if($(document).width() <= 767){
        $.fn.fullpage.destroy('all');
    }

    $('.white-link').on('click', function(){
        $('body').removeClass('black');
        $('body').addClass('white');
    });

    $('.black-link').on('click', function(){
        $('body').addClass('black');
        $('body').removeClass('white');
    });

    var timeout, timeout2, setImeout, current = 0,
        textArr = document.querySelectorAll('.why-we-item')

    function ovalIconInit () {
        timeout = setTimeout(function() {
            textArr.forEach(function(i) { (i) >= i.classList.remove('active') });
            textArr[current].classList.add("active");
            (current === 3) ? current = 0 : current++;
            ovalIconInit();
        }, 3000);
    };

    ovalIconInit();

    $('.lick li').on('click', function(){
        $(this).addClass('active');
    });

    var windowTop = $(window).scrollTop();
    var bannerHeight = $('.banner').height();

    if( $(window).width() < 768){
        if(windowTop >= bannerHeight){
            $('section').addClass('activeLeft');
            $('.menu-fix').addClass('active');
        }else{
            $('section').removeClass('activeLeft');
            $('.menu-fix').removeClass('active');
        }   
    }

    if(navigator.userAgent.match(/iPhone/i)){
        $('.portfolio').addClass('mobile');
    }
    
    
    if(navigator.userAgent.match(/Android/i)){
        $('.portfolio').addClass('mobile');
    }

    $('.reviews-slider').slick({
		dots: false,
		speed: 1000,
        loop: true,
        vertical: true,
        slidesToShow: 5,
		nextArrow: '<button class="next"><i class="icon-right-arrow"></i></button>',
        prevArrow: '<button class="prev"><i class="icon-right-arrow"></i></button>',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2
              }
            }
          ]
    });
    
    $('.slider-link').on('click', function(){
        $('.slider-link').removeClass('active');
        $('.reviews-item').removeClass('active');
        var linkActive = $(this).data('link');
        $(this).addClass('active');
        $('.' + linkActive).addClass('active');
    });

    $( ".questions-accordion" ).accordion({
        active: false,
        collapsible: true,
        autoHeight: false
    });

    var timeout1, timeout2, setImeout, current1 = 0,
    textArr1 = document.querySelectorAll('.svg-site')

    function ovalIconInit1 () {
        timeout1 = setTimeout(function() {
            $('.site-text').removeClass('active');
            $('.' + $('.svg-site.active').data('text')).addClass('active');
            textArr1.forEach(function(i) { (i) >= i.classList.remove('active') });
            textArr1[current1].classList.add("active");
            (current1 === 15) ? current1 = 0 : current1++;
            ovalIconInit1();
        }, 2000);
    };

    ovalIconInit1();

});

$(window).scroll(function(){

    var windowTop = $(window).scrollTop();
    var bannerHeight = $('.banner').height();

    if( $(window).width() < 768){
        if(windowTop >= bannerHeight){
            $('section').addClass('activeLeft');
            $('.menu-fix').addClass('active');
        }else{
            $('section').removeClass('activeLeft');
            $('.menu-fix').removeClass('active');
        }   
    }

});


