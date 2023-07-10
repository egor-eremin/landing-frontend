(function animatedBurgerMenu() {
	$('.burger-navigation').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
})();
