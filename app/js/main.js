$(function () {
    'use strict';
    $('div.main').on('click', '.messenger', function () {
        $(this).slideUp('slow');
    });

    $('div.main').on('click', '.clicky', function () {

        if ($('div.comments i').hasClass('icon-arrow-down')) {
            $('div.the-comments span').slideUp('slow');
            $('div.comments i').text(' show')
                .removeClass('icon-arrow-down')
                .addClass('icon-arrow-up');
            $('div.comments').animate({
                height: '35px'
            }, 500);
        } else {
            $('div.the-comments span').slideDown('slow');
            $('div.comments i').text(' hide')
                .removeClass('icon-arrow-up')
                .addClass('icon-arrow-down');
            $('div.comments').animate({
                height: (document.height / 2) + 'px'
            }, 500);
        }
    });

    $('body').on('click', '.scroller', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#file-2").offset().top
        }, 2000);
    });

});

/*
if (navigator.onLine === false) {
    var message = 'It seems you\'ve lost internet connection.';
    $('.warn').slideDown('slow');
    $('.warn span').text(message);
    setTimeout(function () {
        $('.warn').slideUp();
    }, 2500);
    console.log(message);
}
*/
