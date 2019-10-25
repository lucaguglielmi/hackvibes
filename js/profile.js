$(document).ready(function(){
  
 // Hide special skill form on page load
 $(".js-show-other").hide();
 $(".js-show-developer").hide();
 $(".js-show-designer").hide();
 $(".js-show-marketing").hide();

 $('.form-style-checkbox').find("li input:checkbox").change(function(){
    if($(this).is(':checked')) 
        $(this).parent().addClass('is-selected'); 
        else {
            $(this).parent().removeClass('is-selected'); 
        }
  });


/* PROFILE PAGE --- TO DO BETTER */
$(".js-developer").on('change', function() {
 $(".js-show-developer").toggle();
 console.log("test");    
 console.log(this);
});


$(".js-designer").on('change', function() {
 $(".js-show-designer").toggle();
});


$(".js-marketing").on('change', function() {
 $(".js-show-marketing").toggle();
});


$(".js-other").on('change', function() {
 $(".js-show-other").toggle();
});



    // profile response close button

    $(".response__close").on('click', function() {
        $("#response").hide();
    })


    // sync img src of the avatar to the confirmation message
    $("#pic").attr("src", $("#pic-loading").attr("src"));


});
