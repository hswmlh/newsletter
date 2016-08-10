var StickyElement = function (node) {
    var doc = $(document)
        , small = false
        , header = $("#stickyheader")
        , logo = node.find('.logo');
    var threshold = 70, upthreshold = 70;
    var onScroll = function (e) {
        var docTop = doc.scrollTop();
        if (docTop < upthreshold) {
            if (small) {
                header.removeClass('fixed');
                small = false
            }
        }
        if (docTop > threshold) {
            if (small != true) {
                header.addClass('fixed');
                header.addClass('big');
                small = true;
            }
        }
        if(docTop == 0){
            header.removeClass('big');
        }
    };
    $(window).on('scroll', onScroll);
};
var run = new StickyElement($('#stickyheader'));