$(document).ready(function(){

    $('.questions-text a').on('click', function(){
        $('.popup-question').addClass('active');
    });

    $('.title-text a').on('click', function(){
        $('.popup-file').addClass('active');
    });

    $('.lnternal-text a').on('click', function(){
        $('.popup-services').addClass('active');
    });

    $('.tel').on('click', function(){
        $('.popup-order').addClass('active');
    });

    $('.request-call').on('click', function(){
        $('.popup-order').addClass('active');
    });

    $('.close').on('click', function(){
        $('.popup').removeClass('active');
    });

    $('.popup-close').on('click', function(){
        $('.popup').removeClass('active');
    });

    $('.close-menu').on('click', function(){
        $('.menu-site').removeClass('active');
    });

    $('.menu').on('click', function(){
        $('.menu-site').addClass('active');
    });

});





































