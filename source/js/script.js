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

    $('.works-modal__button-close').click(() => {
        $('.works-modal-overlay').fadeOut();
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


if ($(document).width() <= 760) {
    $(serviceItems).click(() => {
        $('.services__modale-modal-open').fadeIn();

        $('.services__mobile-modal-close').click(() => {
            $('.services__modale-modal-open').fadeOut();
        })
    })
}