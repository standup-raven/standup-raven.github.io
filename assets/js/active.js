/* jshint esnext: true */
var jQuery, document, window, location, swal;
(function ($) {
    "use strict";

    const dh = {
        dev: 'CrazyDH',
        flex_center: 'flex_center',
        popupVdo: $('.eco--popup')
    };

    dh.subMenu = $('.sub-menu');
    if (dh.subMenu.length) {
        dh.subMenu.each(function () {
            $(this).closest('li').addClass('has-dropdown');
        });
    }

    // preloader
    dh.fnPreloader = () => {
        dh.preloader = $('.preloader');
        if (dh.preloader.length) {
            dh.preloader.fadeOut(1000);
        }
    };


    // height configuration

    dh.heightConfig = () => {
        dh.autoHeight = customClass => {
            let minHeight = -1;
            customClass.each(function () {
                if ($(this).height() > minHeight) {
                    minHeight = $(this).height();
                }
            });
            customClass.height(minHeight).addClass(dh.flex_center);
        };
        dh.home_height1 = $('.eco--home--height--1');
        dh.autoHeight(dh.home_height1);

        dh.sPricing1Li = $('.eco--single--pricing--1 li:first-child');
        dh.autoHeight(dh.sPricing1Li);
    };

    // smoothScroll
    dh.smoothScroll = () => {
        $('a.smoothScroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
                location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    };


    // plugins

    dh.plugins = () => {

        if (dh.popupVdo.length && $.fn.magnificPopup) {
            dh.popupVdo.magnificPopup({
                disableOn: 0,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false
            });
        }

        dh.mainMenu = $('.eco--main--menu');
    };

    // console notice
    dh.consoleTxt = () => {
        dh.consoleStyle = [
            'font-size: 10px',
            'color: #ffffff',
            'background-color: #2e7d32',
            'display: block',
            'text-align: left',
            'font-weight: bold',
            'display: inline-block'
        ].join(';');
        document.querySelector('.eco--home--image-1').classList.remove('hidden');
        inject();
        console.log('%c SITE LOADED 100%, - Created by ' + dh.dev, dh.consoleStyle);
    };

    // all functions of document ready
    dh.docReady = () => {
        dh.fnPreloader();
        dh.heightConfig();
        dh.smoothScroll();
        dh.plugins();
    };

    // all functions of window load
    dh.winLoad = () => {
        dh.consoleTxt();
        dh.heightConfig();
    };


    $(document).ready(dh.docReady);
    $(window).on('load', dh.winLoad);



})(jQuery);
