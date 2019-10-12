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

    // whiteknight 

    $(".whiteknight").on('click', function() {
        $(".js-open-vibe").removeClass("vibe--expanded");
        $(".whiteknight").toggle();
        $("body").toggleClass("noscroll");
    })


    // Open bapp IFRAME window

    $(".js-show-bapp").on('click', function() {
        $(".load-bapp-here").show();
        //add close functionality to the background of the modal
        $(".greynight").toggle();
        $("body").toggleClass("noscroll");
    })


    $(".js-close-bapp").on('click', function() {
        $(".greynight").toggle();
        $(".load-bapp-here").fadeOut(300);
        $("body").toggleClass("noscroll");
    })

 // greynight

 $(".whiteknight").on('click', function() {
    $(".greynight").toggle();
    $("body").toggleClass("noscroll");
})





    



    })();


});