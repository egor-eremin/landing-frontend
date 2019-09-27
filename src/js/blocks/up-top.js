(function appToTop() {
    $('.up-button').on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 300);
    });
})();