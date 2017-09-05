var inputRangeBG = function (e) {
    var r = $(e);
    var n = r.val();
    var mn = r.attr('min') ? r.attr('min') : 0;
    var mx = r.attr('max') ? r.attr('max') : 0;
    n = 100 * (n - mn) / (mx - mn);
    r.css({'background-image': 'linear-gradient(to right ,#b69977 0%,#b69977 ' + n + '%,#fff ' + n + '%, #fff 100%)'});
};
$(function () {
    $('.portfolio__slider').each(function () {
        var $this = $(this), current = $this.find('.current'), slider = $this.find('.slick-slider');
        $this.find('img').magnificPopup({type: 'image', gallery: {enabled: true}});
        $this.find('.total').text($(this).find('img').length);
        current.text('1');
        slider.slick({
            dots: false,
            dotsClass: "dots",
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $(this).find(".slick-prev"),
            nextArrow: $(this).find(".slick-next")
        });
        slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            current.text(currentSlide + 1);
            console.log(currentSlide);
        });
    })
    $("input[name='phone']").mask("+7 (999) 999-99-99");
    var r = $('input[type=range]');
    r.each(function (a, b) {
        inputRangeBG(b);
    });
    r.on('input', function () {
        inputRangeBG(this);
    });
    var rangeMaxObject = $('#range-max');
    var inputValueObject = $('#input-value');
    rangeMaxObject.on('input', function () {
        var rangeMaxValue = $(this).val();
        inputValueObject.val(rangeMaxValue + '  м2');
    });
    inputValueObject.on('input', function () {
        var inputValue = parseInt($(this).val());
        rangeMaxObject.val(inputValue);
    });
    inputValueObject.on('change', function () {
        var inputValue = parseInt($(this).val());
        var minimum = rangeMaxObject.attr('min');
        var maximum = rangeMaxObject.attr('max');
        if (inputValue < minimum) {
            inputValueObject.val(minimum + ' m2');
            rangeMaxObject.val(minimum);
        } else if (inputValue > maximum) {
            inputValueObject.val(maximum + ' m2');
            rangeMaxObject.val(maximum);
        } else {
            rangeMaxObject.val(inputValue);
            inputValueObject.val(inputValue + ' m2');
        }
    });
    $('.fancybox').fancybox({'padding': 0, 'closeBtn': true, helpers: {overlay: {locked: true}}});
    $('.menu-hamburger').click(function () {
        openHabmenu();
        return false
    });
    $('.scroll-to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top - 100}, 500);
        }
        return false;
    });
    menu = {
        clicked: false, menuElement: $('#menu'), hiddenStatus: false, hide: function () {
            if (this.hiddenStatus) return;
            this.menuElement.animate({right: -this.getWidth()}, 500);
            this.hiddenStatus = true;
        }, show: function () {
            if (!this.hiddenStatus) return;
            this.menuElement.animate({right: 0}, 500);
            this.hiddenStatus = false;
        }, getWidth: function () {
            var width = this.menuElement.width();
            return width;
        }, setHeight: function (h) {
            this.menuElement.height(h);
        }
    };
    menuState();
    menu.menuElement.click(function () {
        menu.show();
        menu.clicked = true;
    });
    $(document, window).scroll(function () {
        menuState();
    });
    $(window).resize(function () {
        menuState();
    });
    $(".point").click(function () {
        var value = $(this).find('p').text();
        $(this).parents('.points').find('.hidden-input').val(value);
        $(this).addClass("point-active");
        $(this).siblings().removeClass("point-active")
    });
    $('.points select').on('change', function () {
        var value = $(this).val();
        $(this).parents('.points').find('.hidden-input').val(value);
    });
    $(".tabs-row div").click(function () {
        $(this).addClass("tabs-active");
        $(this).siblings().removeClass("tabs-active")
    });

    function openHabmenu() {
        $('.habmenu').slideToggle();
        $('.line1').toggleClass("block1-click");
        $('.line2').toggleClass("block2-click");
        $('.line3').toggleClass("block3-click");
        $('body').toggleClass('no-scroll');
    }

    $(".scroll-to").click(function () {
        $(".habmenu").hide();
        $('body').removeClass('no-scroll');
        $('.line1').removeClass("block1-click");
        $('.line2').removeClass("block2-click");
        $('.line3').removeClass("block3-click");
    });
    $('.tabs-row #tabs-row1').click(function () {
        $('.slider-block1').addClass('slider-visible');
        $('.slider-block2, .slider-block3').removeClass('slider-visible');
    });
    $('.tabs-row #tabs-row2').click(function () {
        $('.slider-block2').addClass('slider-visible');
        $('.slider-block1, .slider-block3').removeClass('slider-visible');
    });
    $('.tabs-row #tabs-row3').click(function () {
        $('.slider-block3').addClass('slider-visible');
        $('.slider-block1, .slider-block2').removeClass('slider-visible');
    });
    $('.tabs-block select').change(function () {
        var value = $(this).val();
        if (value == 1) {
            $('.slider-block1').addClass('slider-visible');
            $('.slider-block2, .slider-block3').removeClass('slider-visible');
        }
    });
    $('.tabs-block select').change(function () {
        var value = $(this).val();
        if (value == 2) {
            $('.slider-block2').addClass('slider-visible');
            $('.slider-block1, .slider-block3').removeClass('slider-visible');
        }
    });
    $('.tabs-block select').change(function () {
        var value = $(this).val();
        if (value == 3) {
            $('.slider-block3').addClass('slider-visible');
            $('.slider-block1, .slider-block2').removeClass('slider-visible');
        }
    });
    $('.block2 .slider-block1 .slick-slider').on('afterChange', function (event, slick, currentSlide) {
        var numberOfSlides = slick.slideCount;
        if (currentSlide == 0) {
            $(".slick-prev1").addClass("slick-prev-noactive");
            $(".slick-next1").removeClass("slick-next-noactive");
        } else if (currentSlide == (numberOfSlides - 1)) {
            $(".slick-prev1").removeClass('slick-prev-noactive');
            $(".slick-next1").addClass("slick-next-noactive");
        } else {
            $(".slick-prev1").removeClass('slick-prev-noactive');
            $(".slick-next1").removeClass("slick-next-noactive");
        }
    });
    $('.block2 .slider-block2 .slick-slider').on('afterChange', function (event, slick, currentSlide) {
        var numberOfSlides = slick.slideCount;
        if (currentSlide == 0) {
            $(".slick-prev2").addClass("slick-prev-noactive");
            $(".slick-next2").removeClass("slick-next-noactive");
        } else if (currentSlide == (numberOfSlides - 1)) {
            $(".slick-prev2").removeClass('slick-prev-noactive');
            $(".slick-next2").addClass("slick-next-noactive");
        } else {
            $(".slick-prev2").removeClass('slick-prev-noactive');
            $(".slick-next2").removeClass("slick-next-noactive");
        }
    });
    $('.block2 .slider-block3 .slick-slider').on('afterChange', function (event, slick, currentSlide) {
        var numberOfSlides = slick.slideCount;
        if (currentSlide == 0) {
            $(".slick-prev3").addClass("slick-prev-noactive");
            $(".slick-next3").removeClass("slick-next-noactive");
        } else if (currentSlide == (numberOfSlides - 1)) {
            $(".slick-prev3").removeClass('slick-prev-noactive');
            $(".slick-next3").addClass("slick-next-noactive");
        } else {
            $(".slick-prev3").removeClass('slick-prev-noactive');
            $(".slick-next3").removeClass("slick-next-noactive");
        }
    });
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
        });
    });
    $('.block2 .slider-block1 .slick-slider').on('beforeChange', function (event, slick, currentSlide) {
        $('.text-slide1 .text-slide-content.slide.text-slide-visible').removeClass('text-slide-visible');
    });
    $('.block2 .slider-block1 .slick-slider').on('afterChange', function (event, slick, currentSlide) {
        var pickerContainer = $('.text-slide1 .text-slide-content.slide');
        $(pickerContainer[currentSlide]).addClass('text-slide-visible');
    });
    $('.text-slide-visible').click(function () {
        var indexOfPicker = $(this).index();
        $('.block2 .slider-block1 .slick-slider').slick('slickGoTo', indexOfPicker);
    });
    $('.block2 .slider-block2 .slick-slider').on('beforeChange', function (event, slick, currentSlide) {
        $('.text-slide2 .text-slide-content.slide.text-slide-visible').removeClass('text-slide-visible');
    });
    $('.block2 .slider-block2 .slick-slider').on('afterChange', function (event, slick, currentSlide) {
        var pickerContainer = $('.text-slide2 .text-slide-content.slide');
        $(pickerContainer[currentSlide]).addClass('text-slide-visible');
    });
    $('.text-slide-visible').click(function () {
        var indexOfPicker = $(this).index();
        $('.block2 .slider-block2 .slick-slider').slick('slickGoTo', indexOfPicker);
    });
    $('.block2 .slider-block3 .slick-slider').on('beforeChange', function (event, slick, currentSlide) {
        $('.text-slide3 .text-slide-content.slide.text-slide-visible').removeClass('text-slide-visible');
    });
    $('.block2 .slider-block3 .slick-slider').on('afterChange', function (event, slick, currentSlide) {
        var pickerContainer = $('.text-slide3 .text-slide-content.slide');
        $(pickerContainer[currentSlide]).addClass('text-slide-visible');
    });
    $('.text-slide-visible').click(function () {
        var indexOfPicker = $(this).index();
        $('.block2 .slider-block3 .slick-slider').slick('slickGoTo', indexOfPicker);
    });
    $(".block8 .slick-slider").slick({
        dots: true,
        dotsClass: "dots",
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: false,
        nextArrow: false,
        responsive: [{breakpoint: 608, settings: {slidesToShow: 1, slidesToScroll: 1}}, {
            breakpoint: 1240,
            settings: {slidesToShow: 4, slidesToScroll: 4}
        }]
    });
    var _target = '', $button = [];
    $('form').ajaxForm({
        beforeSubmit: function (d, $e) {
            if (true) {
                $('input').removeClass('err-form');
                $button[0] = $e.find('.submit');
                $button[1] = $e.find('.submit').text();
                $e.addClass('dis');
                var emailReg = new RegExp("^[-0-9a-z\._]+\@[-0-9a-z\.]+\.[a-z]{2,4}$", "i"), phoneReg = '';
                for (var j in d) {
                    // if (d[j].name == 'phone' && d[j].value == '') {
                    //     $e.removeClass('dis').find('input[name="phone"]').addClass('err-form');
                    //     return false;
                    // }
                    if (d[j].name == 'city' && d[j].value == '') {
                        $e.removeClass('dis').find('input[name="city"]').addClass('err-form');
                        return false;
                    }
                    // if (d[j].name == 'phone' && d[j].value != '') {
                    //     for (var i = 0; i <= 9; i++) {
                    //         phoneReg = new RegExp(i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString());
                    //         if (phoneReg.test(d[j].value)) {
                    //             $e.removeClass('dis').find('input[name="phone"]').addClass('err-form');
                    //             return false;
                    //         }
                    //     }
                    // }
                    if (d[j].name == 'name' && d[j].value == '') {
                        $e.removeClass('dis').find('input[name="name"]').addClass('err-form');
                        return false;
                    }
                    if (d[j].name == 'email' && d[j].value != "") {
                        if (!emailReg.test(d[j].value)) {
                            $e.removeClass('dis').find('input[name="email"]').addClass('err-form');
                            return false;
                        }
                    }
                    if (d[j].name == 'target') {
                        _target = d[j].value;
                    }
                }
                $.fancybox('#waiting', {padding: 0, closeBtn: false});
                return true;
            } else return false;
        }, success: function (data) {
            console.info(data);
            $.fancybox('#thnx-a');
        }
    });
    setTimeout(function () {
        $('#tabs-row1').click();
    }, 50);
});

function menuState() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 768 || windowWidth > 1270) {
        menu.show();
    } else if (scrolled < 1 && !menu.clicked) {
        menu.show();
    } else {
        menu.hide();
        menu.setHeight('100vh');
    }
}