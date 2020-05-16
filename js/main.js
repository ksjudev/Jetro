$(function() {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav'

    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        variableWidth: false,
        responsive: [{
                breakpoint: 955,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 795,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 492,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 338,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.header__menu-btn').on('click', function() {
        $('.header__menu ul').slideToggle();
    });



});