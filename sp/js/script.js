$(function() {
    $(window).scroll(function() {
        $(".fadeTop, .fadeIn").each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('ef-slide');
            } else {
                $(this).removeClass('ef-slide');
            }
        });
    });
});
$(document).ready(function() {

    var offset_fade1 = $('#bannerFadeId img').offset().top;
    $(window).scroll(function(event) {
        var scrollThis = $(this).scrollTop();
        if (scrollThis >= offset_fade1 - 100) {
            $('#bannerFadeId').addClass('fade');
        } else {
            $('#bannerFadeId').removeClass('fade');
        }
    });

    // Paralax
    // $('.paralax2').parallax("85%", 0.25);
    // $('.paralax3').parallax("85%", 0.25);
    // $('.title-scroll').parallax("85%", 0.25);

    $('#background-blur').crossfade({
        threshold: 0.3,
        backgroundPosition: 'center center'
    });

    // $('#background-blur-sp').crossfade({
    //     threshold: 0.3,
    //     backgroundPosition: 'center center'
    // });
    // Hover swap img
    $(function() {
        $('img').hover(
            function() {
                $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
            },
            function() {
                $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
            }
        );
    });

    // Link scroll
    $('a[href^="#"]').click(function() {
        var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 1000);
        return false;
    });

});
