$(function () {

    $('.header__burger').on('click', function (e) {
        e.preventDefault();

        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });


    $('.js-slider-min').slick({
        dots: true,
        dotsClass: 'slick-dots-slider-min',
        autoplay: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    });

    $('.search__slider').slick({
        dots: false,
        dotsClass: 'slick-dots',
        autoplay: 5000,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        fade: true,
    });

    $('.news__slider').slick({
        dots: true,
        dotsClass: 'slick-dots-news',
        autoplay: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    });
});

//----------------- polyfills ----------------------------------

function applyPolyfills() {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var el = this;

            do {
                if (Element.prototype.matches.call(el, s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
}

//-----------------sliders-tabs----------------------------------
$('.js-game-all').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2500,
            settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1366,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.js-game-adventure').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2500,
            settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1366,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.js-game-racing').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2500,
            settings: {
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1366,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.js-game-all').slick('setPosition');
    $('.js-game-adventure').slick('setPosition');
    $('.js-game-racing').slick('setPosition');
});