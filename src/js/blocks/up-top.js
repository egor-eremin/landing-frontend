(function appToTop() {
	$('.up-button').on('click', () => {
		$('body, html').animate({
			scrollTop: 0,
		}, 300);
	});
})();
