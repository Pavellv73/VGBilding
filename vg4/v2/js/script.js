var inputRangeBG = function (e) {
    var r = $(e);
    var n = r.val();
    var mn = r.attr('min') ? r.attr('min') : 0;
    var mx = r.attr('max') ? r.attr('max') : 0;
    n = 100 * (n - mn) / (mx - mn); // процент положения ползунка относительно начала
    r.css({
        'background-image': 'linear-gradient(to right ,#b69977 0%,#b69977 ' + n + '%,#fff ' + n + '%, #fff 100%)'
    });
};


$(function () {

    $('.portfolio__slider').each(function() {
        var $this = $(this),
            current = $this.find('.current'),
            slider = $this.find('.slick-slider');

        $this.find('img').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });
        
        $this.find('.total').text($(this).find('img').length);
        current.text('1');

        slider.slick({
            dots: false,
            dotsClass: "dots",
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:  $(this).find(".slick-prev"),
            nextArrow:  $(this).find(".slick-next")
        });

        slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
            current.text(currentSlide+1);
            console.log(currentSlide);
        });

    })

    // маска для номеров телефона

    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});
    // $("input[name='phone']").mask("+7 (999) 999-99-99");

    // var r = $('input[type=range]');

    // r.each(function (a, b) {
    //     inputRangeBG(b);

    // });

    // r.on('input', function () {
    //     inputRangeBG(this);
    // });

    // var rangeMaxObject = $('#range-max');
    // var inputValueObject = $('#input-value');

    // rangeMaxObject.on('input', function () {
    //     var rangeMaxValue = $(this).val();
    //     inputValueObject.val(rangeMaxValue + '  м2');
    // });

    // inputValueObject.on('input', function () {
    //     var inputValue = parseInt($(this).val());
    //     rangeMaxObject.val(inputValue);
    // });

    // inputValueObject.on('change', function () {
    //     var inputValue = parseInt($(this).val());
    //     var minimum = rangeMaxObject.attr('min');
    //     var maximum = rangeMaxObject.attr('max');
    //     if (inputValue < minimum) {
    //         inputValueObject.val(minimum + ' m2');
    //         rangeMaxObject.val(minimum);
    //     }  else if (inputValue > maximum) {
    //         inputValueObject.val(maximum + ' m2');
    //         rangeMaxObject.val(maximum);
    //     } else {
    //         rangeMaxObject.val(inputValue);
    //         inputValueObject.val(inputValue + ' m2');
    //     }
    // });




    // модальные окна по ссылкам
    $('.fancybox').fancybox({
        'padding': 0,
        'closeBtn' : true,
        helpers: {
            overlay: {
                locked: true
            }
        }
    });
    // $('.fbx').fancybox({
    //     'padding': 0,
    //     'closeBtn' : true,
    //     'maxWidth' : 700,
    //     helpers: {
    //         overlay: {
    //             locked: true
    //         }
    //     }
    // })
    //Меню-гамбургер
    $('.menu-hamburger').click(function () {
        openHabmenu();
        return false
    });

    // плавный скролинг по ссылкам
    $('.scroll-to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100 }, 500);
        }
        return false;
    });

    menu = {
        clicked : false,
        menuElement : $('#menu'),
        hiddenStatus : false,
        hide : function () {
            if (this.hiddenStatus) return;
            this.menuElement.animate({
                    right : - this.getWidth()},
                500
            );
            this.hiddenStatus = true;
        },
        show : function () {
            if (!this.hiddenStatus) return;
            this.menuElement.animate({
                    right : 0},
                500
            );
            this.hiddenStatus = false;
        },
        getWidth : function () {
            var width = this.menuElement.width();
            return width;
        },
        setHeight : function (h) {
            this.menuElement.height(h);
        }
    };
    menuState();
    menu.menuElement.click(function () {
        menu.show();
        menu.clicked = true;
    });

    $(document, window).scroll(function () {menuState();});
    $(window).resize(function () {menuState();});

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



    $('.block2 .slider-block1 .slick-slider').on('afterChange', function(event, slick, currentSlide){
        var numberOfSlides = slick.slideCount;
        if (currentSlide == 0) {
            $(".slick-prev1").addClass("slick-prev-noactive");
            $(".slick-next1").removeClass("slick-next-noactive");
        } else if(currentSlide == (numberOfSlides - 1)) {
            $(".slick-prev1").removeClass('slick-prev-noactive');
            $(".slick-next1").addClass("slick-next-noactive");

        } else {
            $(".slick-prev1").removeClass('slick-prev-noactive');
            $(".slick-next1").removeClass("slick-next-noactive");

        }
    });
    $('.block2 .slider-block2 .slick-slider').on('afterChange', function(event, slick, currentSlide){
        var numberOfSlides = slick.slideCount;
        if (currentSlide == 0) {
            $(".slick-prev2").addClass("slick-prev-noactive");
            $(".slick-next2").removeClass("slick-next-noactive");
        } else if(currentSlide == (numberOfSlides - 1)) {
            $(".slick-prev2").removeClass('slick-prev-noactive');
            $(".slick-next2").addClass("slick-next-noactive");

        } else {
            $(".slick-prev2").removeClass('slick-prev-noactive');
            $(".slick-next2").removeClass("slick-next-noactive");

        }
    });
    $('.block2 .slider-block3 .slick-slider').on('afterChange', function(event, slick, currentSlide){
        var numberOfSlides = slick.slideCount;
        if (currentSlide == 0) {
            $(".slick-prev3").addClass("slick-prev-noactive");
            $(".slick-next3").removeClass("slick-next-noactive");
        } else if(currentSlide == (numberOfSlides - 1)) {
            $(".slick-prev3").removeClass('slick-prev-noactive');
            $(".slick-next3").addClass("slick-next-noactive");

        } else {
            $(".slick-prev3").removeClass('slick-prev-noactive');
            $(".slick-next3").removeClass("slick-next-noactive");

        }
    });

    $(function() {

        $(window).scroll(function() {

            if($(this).scrollTop() != 0) {

                $('#toTop').fadeIn();

            } else {

                $('#toTop').fadeOut();

            }

        });

        $('#toTop').click(function() {

            $('body,html').animate({scrollTop:0},800);

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
        dots:true,
        dotsClass: "dots",
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 608,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });


    var _target='', $button = [];
    $('form').ajaxForm({
        beforeSubmit: function(d, $e){
            if (true) {
                $('input').removeClass('err-form');

                $button[0] = $e.find('.submit');
                $button[1] = $e.find('.submit').text();

                $e.addClass('dis');

                var emailReg = new RegExp("^[-0-9a-z\._]+\@[-0-9a-z\.]+\.[a-z]{2,4}$", "i"),
                    phoneReg = '';

                for (var j in d) {
                    if(d[j].name == 'phone' && d[j].value== '') {
                        $e
                            .removeClass('dis')
                            .find('input[name="phone"]')
                            .addClass('err-form');

                        return false;
                    }


                    if(d[j].name == 'city' && d[j].value== '') {
                        $e
                            .removeClass('dis')
                            .find('input[name="city"]')
                            .addClass('err-form');

                        return false;
                    }


                    if(d[j].name == 'phone' && d[j].value != '') {
                        for (var i = 0; i <= 9; i++) {
                            phoneReg = new RegExp(i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString());

                            if (phoneReg.test(d[j].value)) {
                                $e.removeClass('dis')
                                    .find('input[name="phone"]')
                                    .addClass('err-form');

                                return false;
                            }
                        }
                    }

                    if(d[j].name == 'name' && d[j].value == '') {

                        $e
                            .removeClass('dis')
                            .find('input[name="name"]')
                            .addClass('err-form');

                        return false;
                    }

                    if (d[j].name == 'email' && d[j].value != "") {
                        if (!emailReg.test(d[j].value)) {
                            $e.removeClass('dis')
                                .find('input[name="email"]')
                                .addClass('err-form');
                            return false;
                        }
                    }

                    if (d[j].name == 'target') {
                        _target = d[j].value;
                    }
                }

                $.fancybox(
                    '#waiting',
                    {
                        padding: 0,
                        closeBtn: false
                    });

                return true;
            } else return false;
        },
        success: function(data){
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
    if (windowWidth < 768 || windowWidth > 1270){
        menu.show();
    } else if (scrolled < 1 && !menu.clicked) {
        menu.show();
    } else {
        menu.hide();
        menu.setHeight('100vh');
    }
}


