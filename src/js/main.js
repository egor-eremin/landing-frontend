import './vendor';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';


require ('./vendor/inputmask.min');
require ('./vendor/jquery.inputmask.min');
require ('./vendor/jquery.viewportchecker.min');
require ('./vendor/owl.carousel.min');
require ('./vendor/pathAnimator');


$(document).ready(function () {
    require ('./blocks/header');
    require ('./blocks/projects');
    require ('./blocks/reviews');
    require ('./blocks/up-top');
    require ('./blocks/welcom');
    require ('./blocks/reviews');
    require ('./blocks/grey-block');

    (function validationFormCallback() {
        validationForm('.request-form');
    })();
    // (function addPhoneMask() {
        // $('.user-phone').inputmask("+7 (999) 999-99-99", {
        //     placeholder: "_",
            // showMaskOnFocus: false,
        // })
    // })();
    (function closeAnswerPopup() {
        $(document).on('click', '.close-popup', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    })();
    (function initializationUploadFiles() {
        $(".download-file-block").dmUploader({
            url: 'backend/upload.php',

            onInit: function(){
            },
            onNewFile: function(id, file){
                addedNewFile(id, file);
                deletesText();
            },
            onBeforeUpload: function(id){
                addedProgressUpload(id, 0);
            },
            onUploadProgress: function(id, percent) {
                addedProgressUpload(id, percent);
            },
        });
    })();
    (function openPopup() {
        $('body').on('mousemove','.upload-list__item',
            function (e) {
                var thisPopup = $(this).attr('id');
                var x = e.offsetX==undefined?e.layerX:e.offsetX;
                var y = e.offsetY==undefined?e.layerY:e.offsetY;
                $('.name-file[data-id-text="' + thisPopup + '"]').css('display','inline-flex').css('left', (x + 1) + 'px').css('top', (y + 1) + 'px');
            }
        ).on('mouseleave', '.upload-list__item', function() {
            $('.name-file').hide();
        });

        $('body').on('mousemove','.close-file-button', function (event) {
            $('.name-file').hide();
            event.stopPropagation();
        })


    })();
    (function removeFile() {
        $('.upload-list').on('click', '.close-file-button', function (e) {
            e.preventDefault();
            var thisParent = $(this).parent('.upload-list__item');

            thisParent.remove();
            showText();
        })
    })();
    (function addedHeightBlock() {
        calculatesHeight();
        $(window).on('resize', function () {
            calculatesHeight();
        });
    })();
    (function addedProgressBar() {
        var percent = 100 - ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100);

        $('.progress-bar-value').css('transform', 'translateX(-' + percent +'%)');
        $(window).on("scroll resize", function() {
            var percent = 100 - ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100);

            $('.progress-bar-value').css('transform', 'translateX(-' + percent +'%)');
        })
    })();
    (function animationAdvantagesBlock() {
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 0,
                reverse: true,
            }
        });

        $('.animation-advantages').each(function (index, value) {
            var frame_count = $(this).find('.advantages-list__item').length;
            var offset_value = $(this).find('.advantages-list').outerHeight(false);

            for (var i = 0; i < frame_count; i++) {
                var activeElement = value.getElementsByClassName('advantages-list__item_' + i +'')[0];
                var scene = new ScrollMagic.Scene({
                    triggerElement: value,
                    offset: i * offset_value * 0.8
                })
                    .setClassToggle(activeElement, 'active')
                    // .addIndicators()
                    .addTo(controller)
                    .on('start', function (event) {
                        var lastActiveElement = value.getElementsByClassName('advantages-list__item active');
                        var lengthItemElement = value.getElementsByClassName('advantages-list__item active').length;

                        if (event.scrollDirection == 'FORWARD') {
                            if (lengthItemElement > 1) {
                                $(lastActiveElement[lengthItemElement - 2]).addClass('prevActive');
                            }
                        } else {
                            $(lastActiveElement[lengthItemElement - 1]).removeClass('prevActive');
                            $(lastActiveElement[lengthItemElement - 2]).removeClass('prevActive');
                        }
                });
            }
        });

     })();
    (function initOurTeamAnimation() {
        var controller = new ScrollMagic.Controller();
        var tween = new TimelineMax()
            .to('.team-list__item_1',1.5,{
                transform: "translateX(0)",
                opacity: 1
            })
            .to('.team-list__item_2',1.5,{
                transform: "translateX(0)",
                opacity: 1
            })
            .to('.team-list__item_3',1.5,{
                transform: "translateX(0)",
                opacity: 1
            })
            .to('.team-list__item_4',1.5,{
                transform: "translateX(0)",
                opacity: 1
            })
            .to('.team-list__item_5',1.5,{
                transform: "translateX(0)",
                opacity: 1
            })
            .to('.team-list__item_6',1.5,{
                transform: "translateX(0)",
                opacity: 1
            })
            // .to('.competencies__item_1',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_2',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_3',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_4',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_5',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_6',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_7',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_8',.5,{
            //     opacity: 1
            // })
            // .to('.competencies__item_9',.5,{
            //     opacity: 1
            // })

        var scene = new ScrollMagic.Scene({
            triggerElement: ".our-team",
            duration: 300,
            // offset: 100
        })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller);


    })();
    (function animateAllSection() {
        var controller = new ScrollMagic.Controller();
        $('.section-animate').each(function (index, value) {
            var scene = new ScrollMagic.Scene({
                triggerElement: value,
                duration: 300,
                offset: -300
            })
                .setTween(value, {opacity: '1', transform: 'translateY(0)'})
                // .addIndicators()
                .addTo(controller)
        })
    })();
    (function countReviews() {
        var reviewsLength = $('.reviews-list__item').length;

        $('.review-number').text(reviewsLength);
    })()
});

function addedNewFile(id, file) {

    if (file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/gif') {
        $('<li class="upload-list__item" id="' + id + '"><img src="" alt="макет"><button class="close-file-button">' +
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<svg class="close-file-item" width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g transform="translate(-173.000000, -2086.000000)" fill="#B9B9BF">\n' +
            '            <g transform="translate(169.000000, 2082.000000)">\n' +
            '                <g transform="translate(2.000000, 2.000000)">\n' +
            '                    <g transform="translate(6.000000, 6.000000) rotate(-45.000000) translate(-6.000000, -6.000000) translate(2.000000, 2.000000)">\n' +
            '                        <path d="M4.66666667,3.33333333 L7.5,3.33333333 C7.77614237,3.33333333 8,3.55719096 8,3.83333333 L8,4.16666667 C8,4.44280904 7.77614237,4.66666667 7.5,4.66666667 L4.66666667,4.66666667 L4.66666667,7.5 C4.66666667,7.77614237 4.44280904,8 4.16666667,8 L3.83333333,8 C3.55719096,8 3.33333333,7.77614237 3.33333333,7.5 L3.33333333,4.66666667 L0.5,4.66666667 C0.223857625,4.66666667 -1.30165146e-15,4.44280904 -1.30165146e-15,4.16666667 L-1.30165146e-15,3.83333333 C-1.30165146e-15,3.55719096 0.223857625,3.33333333 0.5,3.33333333 L3.33333333,3.33333333 L3.33333333,0.5 C3.33333333,0.223857625 3.55719096,0 3.83333333,0 L4.16666667,0 C4.44280904,0 4.66666667,0.223857625 4.66666667,0.5 L4.66666667,3.33333333 Z"></path>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>' +
            '</button><span class="name-file" data-id-text="' + id + '">' + file.name + '</span></li>').appendTo('.upload-list');
        if (typeof FileReader !== 'undefined'){
            var reader = new FileReader();
            var img = $('#' + id).find('img');

            reader.onload = function (e) {
                img.attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    } else {
        $('<li class="upload-list__item upload-list__item_not-image" id="' + id + '">' +
            '<span class="percent-number"></span>' +
            '<button class="close-file-button">' +
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<svg class="close-file-item" width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
            '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
            '        <g transform="translate(-173.000000, -2086.000000)" fill="#B9B9BF">\n' +
            '            <g transform="translate(169.000000, 2082.000000)">\n' +
            '                <g transform="translate(2.000000, 2.000000)">\n' +
            '                    <g transform="translate(6.000000, 6.000000) rotate(-45.000000) translate(-6.000000, -6.000000) translate(2.000000, 2.000000)">\n' +
            '                        <path d="M4.66666667,3.33333333 L7.5,3.33333333 C7.77614237,3.33333333 8,3.55719096 8,3.83333333 L8,4.16666667 C8,4.44280904 7.77614237,4.66666667 7.5,4.66666667 L4.66666667,4.66666667 L4.66666667,7.5 C4.66666667,7.77614237 4.44280904,8 4.16666667,8 L3.83333333,8 C3.55719096,8 3.33333333,7.77614237 3.33333333,7.5 L3.33333333,4.66666667 L0.5,4.66666667 C0.223857625,4.66666667 -1.30165146e-15,4.44280904 -1.30165146e-15,4.16666667 L-1.30165146e-15,3.83333333 C-1.30165146e-15,3.55719096 0.223857625,3.33333333 0.5,3.33333333 L3.33333333,3.33333333 L3.33333333,0.5 C3.33333333,0.223857625 3.55719096,0 3.83333333,0 L4.16666667,0 C4.44280904,0 4.66666667,0.223857625 4.66666667,0.5 L4.66666667,3.33333333 Z"></path>\n' +
            '                    </g>\n' +
            '                </g>\n' +
            '            </g>\n' +
            '        </g>\n' +
            '    </g>\n' +
            '</svg>' +
            '</button><span class="name-file" data-id-text="' + id + '">' + file.name + '</span></li>').appendTo('.upload-list');
    }
};
function deletesText() {
    if ($('.upload-list__item').length > 0) {
        $('.label-text-download').hide();
        $('.download-file-block').addClass('upload-files-true');
    }
};
function showText() {
    if ($('.upload-list__item').length == 0) {
        $('.label-text-download').show();
        $('.download-file-block').removeClass('upload-files-true');
    }
}
function validationForm(formInit) {
    // $.validator.addMethod("minlenghtphone", function (value, element) {
    //
    //         return value.replace(/\D+/g, '').length > 10 || value.replace(/\D+/g, '').length == 0;
    //     },
    //     "");
    $(formInit).validate({
        // rules: {
        //     phone:  {
        //         minlenghtphone: true,
        //     },
        // },
        submitHandler: function(form) {
            let currentPhone = $('.user-phone').val();

            $.ajax({
                type: $(form).attr('method'),
                url: $(form).attr('action'),
                data: new FormData(form),

                cache: false,
                contentType: false,
                processData: false,

                dataType: 'text',
                success: function () {
                        $('.current-number-phone').text(currentPhone);
                        $.magnificPopup.open({
                            items: {
                                src: '.answer-form'
                            },
                            mainClass: 'answer-popup',
                            showCloseBtn: false,
                            type: 'inline',
                            callbacks: {
                                beforeOpen: function () {
                                  $('html').css('overflow', 'hidden');
                                },
                                afterClose: function () {
                                    $('html').css('overflow', 'visible');
                                    $(form).find('input').val('');
                                    $(form).find('textarea').val('');
                                    $('.current-number-phone').text('');
                                }
                            }
                        });
                },
                error: function() {
                    console.log('Упс... Что-то пошло не так!');
                }
            });
            return false;
        },
    });
};
function addedProgressUpload(id, percent) {
    var percentBlock = $('#' + id).find('.percent-number');

    if (percentBlock.length == 0) {
        return
    }
    if (percent === 0){
        percentBlock.html('');
    } else {
        percentBlock.html(percent + '%');
    }

};
function media(mediaQueryString, action){
    'use strict';
    var handleMatchMedia = function (mediaQuery) {
        if (mediaQuery.matches) {
            if (action  && typeof(action) === 'function') {
                action();
            }
        }
    };
    var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
}
function calculatesHeight() {
    $('.animation-advantages').each(function (index, value) {
        var item = $(value).find('.advantages-list__item');
        var itemsLength = item.length;
        var itemsHeight = item.outerHeight();
        var paddingTop = $(value).find('.template-wrapper_grey-block').css('padding-top');
        var paddingBottom = $(value).find('.template-wrapper_grey-block').css('padding-bottom');
        var marginTop = $(value).find('.advantages-list').css('margin-top');
        var allHeight = itemsLength * itemsHeight + parseInt(paddingTop) + parseInt(paddingBottom) + parseInt(marginTop);

        $(value).css('height', '' + allHeight + 'px');
    });
}
