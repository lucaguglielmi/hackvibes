$(document).ready(function(){
    
/* NEW TOGGLE MOBILE MENU */
(function () {

    $(".hamburger-wrapper").on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $(".mobile-navigation").toggleClass("js-nav-open");

    })

    $(".js-open-vibe").on('click', function() {
        $(this).toggleClass('vibe--expanded');
        $(".whiteknight").toggle();
        $("body").toggleClass("noscroll");
    })


    $(".whiteknight").on('click', function() {
        $(".js-open-vibe").removeClass("vibe--expanded");
        $(".whiteknight").toggle();
        $("body").toggleClass("noscroll");
    })


    })();


});