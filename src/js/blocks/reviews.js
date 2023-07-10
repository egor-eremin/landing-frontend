(function togglesReviews() {
	$('.next-reviews').on('click', () => {
		let lastElement = $('.reviews-list__item:last-child');
		// let cloneElement = lastElement.clone();

		lastElement.addClass('animationLastElement');
		// $('.reviews-list').prepend(lastElement);
		setTimeout(() => {
			lastElement.removeClass('animationLastElement');
			$('.reviews-list').prepend(lastElement);
		}, 500);
	});
})();
(function setsAmountReviews() {
	$('.review-number').html($('.reviews-list__item').length);
})();
