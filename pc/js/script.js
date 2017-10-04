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

	// Paralax
	// $('body').parallax("50%", 0.1);
    $('.paralax1').parallax("85%", 0.4);
    $('.paralax2').parallax("85%", 0.25);
    $('.paralax3').parallax("85%", 0.25);
    $('.title-scroll').parallax("85%", 0.25);

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

    try {
        var indexBlur = $('#background-blur').offset().top;
        $(window).scroll(function() {
            let s = $(window).scrollTop();
            let opacityVal =  (s / indexBlur);
            $('.blurred-img').css('opacity', opacityVal);
        });
    } catch (e) {}
});
