$(function() {
    $(window).scroll(function() {
        $(".fadeTop, .fadeIn").each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('ef-slide');
            } else {
                $(this).removeClass('ef-slide');
            }
        });
    });
});


$(document).ready(function() {

    var widthBr = $(window).width();
    if (widthBr <= 500 && widthBr >= 400) {
        // Android
        var scrollId = 7051;
    } else if (widthBr <= 380 && widthBr >= 350) {
        // Iphone 6
        var scrollId = 6550;
    } else if (widthBr <= 330) {
        // Iphone 5
        var scrollId = 5750;
    } else {
        // Tablet
        var scrollId = 13171;
    }
    // let offset_fade1 = $('#bannerFadeId img').offset().top;
    $(window).scroll(function(event) {
        let scrollThis = $(this).scrollTop();
        if ($(this).scrollTop() >= (scrollId - 300)) {
            $('#bannerFadeId').addClass('fade');
        } else {
            // $('#bannerFadeId').removeClass('fade');
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
        let the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(the_id).offset().top
        }, 1000);
        return false;
    });

});
