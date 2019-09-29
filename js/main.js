$(document).ready(function(){
    
/* NEW TOGGLE MOBILE MENU */
(function () {
        $('.hamburger-wrapper').on('click', function() {
            $('.hamburger-menu').toggleClass('animate');
            $(".mobile-navigation").toggleClass("js-nav-open");

        })
    })();


});