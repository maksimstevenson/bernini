//Contact-us modal-up
$('.header__info-link').click((evt) => {
    evt.preventDefault();
    $('.overlay').fadeIn();

    $('.contact-us__close').click(() => {
        $('.overlay').fadeOut();
    })
})

//Works modal-up

$('.works__item').click(() => {
    $('.works-modal-overlay').fadeIn();
    fullpage_api.setAllowScrolling(false);

    $('.works-modal__button-close').click(() => {
        $('.works-modal-overlay').fadeOut();
        fullpage_api.setAllowScrolling(true);
    })
})

//Services scripts

const serviceItems = $('.services__item');
const serviceStories = $('.services__story');

serviceItems.each((i, elem) => {
    $(elem).click(() => {
        $(serviceItems).removeClass('services__item--active');
        $(elem).addClass('services__item--active');

        $(serviceStories).hide(0);
        $(serviceStories[i]).fadeIn(500);
    })
})


//Story scripts

$('.story__item').click(() => {
    $('.story__overlay').fadeIn();
    $('.story__modal-close').click(() => {
        $('.story__overlay').fadeOut();
    });
});


const colorizeSlides = (index) => {
    switch (index) {
        case 0:
            $('.fp-tooltip').css('color', '#333');
            $('#fp-nav span').css('background', '#333');
            $('#fp-nav span').css('box-shadow', 'none');
            $('#fp-nav .active span').css('box-shadow', '0 0 0 1px #fff, 0 0 0 2px #000');
            break;
        case 1:
            $('.fp-tooltip').css('color', 'white');
            $('#fp-nav span').css('background', 'white');
            $('#fp-nav span').css('box-shadow', 'none');
            $('#fp-nav .active span').css('box-shadow', '0 0 0 1px #333, 0 0 0 2px rgba(255,255,255,.76)');
            break;
        case 2:
            $('.fp-tooltip').css('color', '#333');
            $('#fp-nav span').css('background', '#333');
            $('#fp-nav span').css('box-shadow', 'none');
            $('#fp-nav .active span').css('box-shadow', '0 0 0 1px #fff, 0 0 0 2px #000');
            break;
        case 3:
            $('.fp-tooltip').css('color', 'white');
            $('#fp-nav span').css('background', 'white');
            $('#fp-nav span').css('box-shadow', 'none');
            $('#fp-nav .active span').css('box-shadow', '0 0 0 1px #333, 0 0 0 2px rgba(255,255,255,.76)');
            break;
        default:
            $('.fp-tooltip').css('color', 'white');
            $('#fp-nav span').css('background', 'white');
            $('#fp-nav span').css('box-shadow', 'none');
            $('#fp-nav .active span').css('box-shadow', '0 0 0 1px #333, 0 0 0 2px rgba(255,255,255,.76)');
            break;
    }
}


 new fullpage('#fullpage', {
    scrollHorizontally: true,
    navigation: $(document).width() <= 760 ? false : true,
    navigationPosition: 'left',
    navigationTooltips: ['Home', 'Works', 'Our Services', 'Our Story'],
    verticalCentered: false,
    afterLoad(origin, destination, direction) {
        colorizeSlides(destination.index)
    }

});
fullpage_api.setAllowScrolling(true);

if ($(document).width() <= 760) {

    fullpage_api.setAllowScrolling(true);
    $(serviceItems).click(() => {
        $('.services__modale-modal-open').fadeIn();
        $('.services__mobile-modal-close').click(() => {
            $('.services__modale-modal-open').fadeOut();
        })
    })
    $('.story__wrapper').addClass('swiper-container')

    new Swiper('.story__wrapper', {
        slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.story__slider-pagination'
            },
        centeredSlides: true
    })

    new Swiper('.works-modal__wrapper-right', {
        direction: 'vertical',
        slidesPerView: 'auto',
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
        freeMode: true,
      });

      $('.works-modal-overlay').hide();
    
}



$('.controll-down--js').on('click', () => {
    fullpage_api.moveSectionDown();
})

$('.controll-up--js').on('click', () => {
    fullpage_api.moveSectionUp();
})

$('.controll-top--js').on('click', () => {
    fullpage_api.moveTo();
})


//Change image in works section
$('.works-modal__thumbs-item').on('click', function() {
    const ar = $(this.firstChild).attr('src');
    $('.works-modal__image img').attr('src', ar);
})


//Swiper initializations
const worksSlider = new Swiper('.works__wrapper', {
    slidesPerView: 2,
    breakpoints: {
        320: {
            slidesPerView: 3.6,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination'
            }
        },
        768: {
            slidesPerView: 2.75,
            pagination: {
                el: null
            }
        },
        1500: {
            slidesPerView: 2.2
        }


    }
})
