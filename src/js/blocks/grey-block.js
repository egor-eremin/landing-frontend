(function addedHeightBlock() {
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
})();