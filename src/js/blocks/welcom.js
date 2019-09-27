(function printedText() {
    $('.welcom-block').viewportChecker({
        classToAdd: 'active',
        callbackFunction: function () {
            setTimeout(function () {
                var textTyped = new Typed('.typed-text', {
                    strings: ['Адаптивная <span class="red-text">вёрстка</span><br> по вашим макетам'],
                    typeSpeed: 40,
                });
            }, 300);
        },
    });
})();
(function goToForm() {
    $('.anchor-form').on('click', function (e) {
        e.preventDefault();
        var requestForm = $('.request').offset().top;

        $('body, html').animate({ scrollTop: requestForm}, 1100);
    })
})();
