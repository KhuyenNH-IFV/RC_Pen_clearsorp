var fadeTopEffect = {
    setInit: function() {
        $(window).scroll(function() {
            $(".fadeTop, .fadeIn").each(function() {
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 200) {
                    $(this).addClass('ef-slide');
                }
            });
        }).trigger("scroll");
    },
}

$(document).ready(function() {

    fadeTopEffect.setInit();
    let offset_fade1 = $('#banner-fade').offset().top;
    // alert(offset_fade1);
    $(window).scroll(function(event) {
        let scrollThis = $(this).scrollTop();
        if (scrollThis > (offset_fade1 - 400)) {
            $('#banner-fade').addClass('fade');
        }
    });
    // Paralax
    $('.paralax2').parallax("85%", 0.25);
    $('.paralax3').parallax("85%", 0.25);
    $('.title-scroll').parallax("85%", 0.25);

    $('#background-blur').crossfade({
        threshold: 0.3,
        backgroundPosition: 'center center'
    });

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
