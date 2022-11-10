//Аккордеон
(function($) {
    $('.accordion a').click(function(j) {
        let dropDown = $(this).closest('li').find('.accordion-body__wrap');

        $(this).closest('.accordion').find('.accordion-body__wrap').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
})(jQuery);

//Анимация текста
AOS.init({
    duration: 1200,
});

//PopUp
$('.js-reg-popup').magnificPopup({
    items: {
        type: 'inline',
        src: '#registration-popup',
        midClick: true,
    },
    mainClass: 'registration-popup',
    fixedContentPos: true,
    showCloseBtn: false,
});

$('.js-login-popup').magnificPopup({
    items: {
        type: 'inline',
        src: '#login-popup',
        midClick: true,
    },
    mainClass: 'login-popup',
    fixedContentPos: true,
    showCloseBtn: false,
});


//Видимость пароля в форме
$('body').on('click', '.js-control', function () {
    if ($('.js-password1,.js-password2').attr('type') === 'password') {
        $(this).addClass('view');
        $('.js-password1,.js-password2').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('.js-password1,.js-password2').attr('type', 'password');
    }
    return false;
});

