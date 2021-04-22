$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
    })

    $('.slider__card').click(function () {
        $('.overview').css({
            'transform': 'translateY(0)'
        })
    })


    $('.close').click(function () {
        $('.overview').css({
            'transform': 'translateY(100%)'
        })
    })


})