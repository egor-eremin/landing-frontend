(function initProjectSlider() {
	// classSlider = function (owl) {
	//     var transitionTime = 6000;
	//     var counter;
	//     var timeInterval;
	//     var timer = 0;
	//
	//     owl.viewportChecker({
	//         callbackFunction: function (elem) {
	//             setTimeout(function () {
	//                 owl.find('.owl-dot:first-child').addClass('animate');
	//             }, 10);
	//             startAutoplay();
	//         },
	//     });
	//     // owl.on('initialized.owl.carousel', function () {
	//     //     setTimeout(function () {
	//     //         owl.find('.owl-dot:first-child').addClass('animate');
	//     //     }, 10);
	//     //     startAutoplay();
	//     // });
	//     owl.owlCarousel({
	//         items: 1,
	//         smartSpeed: '300',
	//         loop: true,
	//         autoplayHoverPause: false,
	//     });
	//     owl.on('translated.owl.carousel', function(event) {
	//         var thisSlider = $(this);
	//
	//         thisSlider.find('.owl-dot.active').prevAll().addClass('stopAnimation');
	//         thisSlider.find('.owl-dot.active ~ .owl-dot').removeClass('animate');
	//         thisSlider.find('.owl-dot.active ~ .owl-dot').removeClass('stopAnimation');
	//         thisSlider.find('.owl-dot.active').removeClass('stopAnimation');
	//         thisSlider.find('.owl-dot.active').removeClass('animate');
	//         setTimeout(function () {
	//             thisSlider.find('.owl-dot.active').addClass('animate');
	//         }, 0.01);
	//
	//         timer = 0;
	//     });
	//
	//     function initTimer() {
	//         counter = setTimeout(function timeTick() {
	//             timer += 10;
	//             counter = setTimeout(timeTick, 10);
	//         }, 10);
	//     }
	//     function startAutoplay() {
	//         initTimer();
	//         timeInterval = setInterval(function () {
	//             if (timer >= transitionTime - 300) {
	//                 goSlide();
	//                 timer = 0;
	//             }
	//         }, 10);
	//
	//     };
	//     function goSlide() {
	//         owl.trigger('next.owl.carousel');
	//     };
	//     owl.hover(function () {
	//         clearTimeout(counter);
	//     }, function () {
	//         initTimer();
	//     });
	// };
	//
	// $('.projects-slider').each(function (index, value) {
	//     objSlider = new classSlider($(value));
	// })

	$('.projects-slider').owlCarousel({
		items: 1,
		smartSpeed: '300',
		loop: true,
		nav: true,
		autoplayHoverPause: false,
	});
	// $('.projects-slider').on('initialize.owl.carousel', function (event) {
	//     thisSlider.find('.owl-dot.active').addClass('animate');
	// });
	// $('.projects-slider').on('translate.owl.carousel', function(event) {
	//     var thisSlider = $(this);
	//
	//     thisSlider.find('.owl-dot.active ~ .owl-dot').removeClass('animate');
	//     thisSlider.find('.owl-dot.active').prevAll().addClass('animate');
	// });
})();
(function showMoreProject() {
	let startHeight = 0;

	$('.projects-wrapper').each(function () {
		if ($(this).find('.projects-item').length <= 3) {
			$(this).next('.show-all-wrapper').hide();
		} else {
			for (let i = 0; i < 3; i++) {
				startHeight += $(this).find('.projects-item').eq(i).outerHeight(true);
			}
			$(this).find('.projects-item:nth-child(3) ~ .projects-item').addClass('hide-project');
			$(this).css('max-height', `${startHeight - 1}px`);
		}
	});

	$('.btn-show-more').on('click', function () {
		let thisProjectWrapper = $(this).parent().prev('.projects-wrapper');
		let hideElement = thisProjectWrapper.find('.hide-project').eq(0);
		let hideElementHeight = hideElement.outerHeight(true);
		let currentMaxHeight = parseInt(thisProjectWrapper.css('max-height'), 10);

		thisProjectWrapper.css('max-height', `${hideElementHeight + currentMaxHeight}px`);
		hideElement.removeClass('hide-project');
		if (hideElement.next().length === 0) {
			setTimeout(() => {
				$('.btn-show-more').addClass('hide');
				$('.btn-show-more').next('.all-projects').removeClass('hide');
			}, 300);
		}
	});
})();
(function quantitySlides() {
	$('.projects-slider').each((index, value) => {
		let quantityItems = $(value).find('.owl-dot').length;

		$(value).next().find('.number-items').html(quantityItems);
	});
})();
(function animationTextLine() {
	$('.crossed-out-text').viewportChecker({
		classToAdd: 'animation',
		offset: '20%',
		repeat: true,
	});
})();
