$(function (){
    var body = $('body');

    // mobile menu
    body.on('click', '.js-mobile-menu', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-opened');
        $('.js-mobile-nav').toggleClass('is-opened');
    })


    // doctors type
    body.on('click', '.js-doctor-nav-item', function (e) {
        e.preventDefault();
        let doctorType = $(this).data('doctor-type');
        $('.js-doctor-nav-item, .js-doctor-type-info').removeClass('is-selected');
        $(this).addClass('is-selected');
        $('.js-doctor-type-info[data-doctor-type="'+doctorType+'"]').addClass('is-selected');
    })
    body.on('click', '.js-doctor-nav-prev', function (e) {
        e.preventDefault();
        if ($('.js-doctor-nav-item').first().hasClass('is-selected')) {
            $('.js-doctor-nav-item').last().trigger('click');
        } else {
            $('.js-doctor-nav-item.is-selected').prev('.js-doctor-nav-item').trigger('click')
        }
    })
    body.on('click', '.js-doctor-nav-next', function (e) {
        e.preventDefault();
        if ($('.js-doctor-nav-item').last().hasClass('is-selected')) {
            $('.js-doctor-nav-item').first().trigger('click');
        } else {
            $('.js-doctor-nav-item.is-selected').next('.js-doctor-nav-item').trigger('click')
        }
    })

    // doctors
    if ( $('.js-doctor-type-1').length ) {
        const topSale = new Swiper('.js-doctor-type-1', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-doctor-type-1 .swiper-button-next',
                prevEl: '.js-doctor-type-1 .swiper-button-prev',
            },
        });
    }

    if ( $('.js-doctor-type-2').length ) {
        const topSale = new Swiper('.js-doctor-type-2', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-doctor-type-2 .swiper-button-next',
                prevEl: '.js-doctor-type-2 .swiper-button-prev',
            },
        });
    }

    if ( $('.js-doctor-type-3').length ) {
        const topSale = new Swiper('.js-doctor-type-3', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-doctor-type-3 .swiper-button-next',
                prevEl: '.js-doctor-type-3 .swiper-button-prev',
            },
        });
    }

    if ( $('.js-doctor-type-4').length ) {
        const topSale = new Swiper('.js-doctor-type-4', {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-doctor-type-4 .swiper-button-next',
                prevEl: '.js-doctor-type-4 .swiper-button-prev',
            },
        });
    }


    // TESTIMONIALS
    if ( $('.js-testimonials').length ) {
        const topSale = new Swiper('.js-testimonials', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 40,
            navigation: {
                nextEl: '.js-testimonials-nav.swiper-button-next',
                prevEl: '.js-testimonials-nav.swiper-button-prev',
            },
            scrollbar: {
                el: '.js-testimonials-nav.swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // FANCYBOX
    if ($('.js-fancybox').length) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }

    // TABS
    body.on('click', '.js-tab-link', function (e) {
        e.preventDefault();
        let tabID = $(this).data('tab-id');
        $('.js-tab-link, .js-tab-content').removeClass('is-selected');
        $('.js-tab-content[data-tab-id="'+tabID+'"]').addClass('is-selected');
        $(this).addClass('is-selected');
    })

    // GALLERY
    if ( $('.js-gallery').length ) {
        const topSale = new Swiper('.js-gallery', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-gallery-nav.swiper-button-next',
                prevEl: '.js-gallery-nav.swiper-button-prev',
            },
            pagination: {
                el: '.js-gallery .swiper-pagination',
                type: 'bullets',
            },
        });
    }

    // SELECT 2
    if ($('.js-select-2').length) {
        $('.js-select-2').select2({
            minimumResultsForSearch: -1
        });
    }

})



// POPUP
$(function (e) {

    var body = $('body');

    function openPopup(id,size) {
        body.addClass('is-popup-opened');
        $('[data-popup-id="'+id+'"]').addClass('is-popup-opened').data('popup-size',size);
    }

    function closePopup() {
        body.removeClass('is-popup-opened');
        $('.js-popup').removeClass('is-popup-opened').data('popup-size','');
    }

    body.on('click', '.js-popup-btn', function (e) {
        let popupId = $(this).data('popup-id');
        let popupSize = $(this).data('popup-size');
        openPopup(popupId,popupSize);
    })

    body.on('click', '.js-popup-close', function (e) {
        closePopup()
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            closePopup()
        }
    });

})


// ACCORDION
$(function (e) {
    var body = $('body');
    body.on('click', '.js-accordion-btn', function (e) {
        e.preventDefault();
        $(this).parent('.js-accordion-block').toggleClass('is-opened')
        $(this).next('.js-accordion-content').slideToggle();
    })
})



// PHONE MASK
$(function () {
    //+7 (XXX) XXX-XX-XX
    if ($('.js-phone').length > 0) {
        var trigger = false;
        var options = {
            'translation': {
                C: {
                    pattern: /[7]/
                },
                M: {
                    pattern: /[9,7,5,3,2]/
                },
                L: {
                    pattern: /[9,7,5]/
                }
            },
            onKeyPress: function onKeyPress(cep, e, field, options) {
                var masks = ['+7 (000) 000-00-00'];
                if (cep.length === 8) {
                    trigger = true;
                }
                if (cep.length < 8) {
                    trigger = false;
                }
                var mask = cep.length > 7 && trigger ? masks[0] : masks[0];
            }
        };
        $('.js-phone').mask('+7 (000) 000-00-00', options);
    }
});