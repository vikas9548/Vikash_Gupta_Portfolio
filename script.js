var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-circle-xmark');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $(menu).removeClass('fa-circle-xmark');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

});