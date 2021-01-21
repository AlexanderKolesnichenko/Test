document.addEventListener('DOMContentLoaded', function () {

    //============интерактивность==============


    $('.works__link').on('focus', function (e) {

        $(this).addClass('works__link--active');

    });

    $('.works__link').on('blur', function (e) {

        $(this).removeClass('works__link--active');

    });







}, false);

