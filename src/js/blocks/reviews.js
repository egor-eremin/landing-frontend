(function togglesReviews() {
    $('.next-reviews').on('click', function () {
        var lastElement = $('.reviews-list__item:last-child');
        var cloneElement = lastElement.clone();

        lastElement.addClass('animationLastElement');
        // $('.reviews-list').prepend(lastElement);
        setTimeout(function () {
            lastElement.removeClass('animationLastElement');
            $('.reviews-list').prepend(lastElement);
        }, 500);
    });
})();
(function setsAmountReviews() {
    $('.review-number').html($('.reviews-list__item').length);
})();