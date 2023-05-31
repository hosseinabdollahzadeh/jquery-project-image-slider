$(document).ready(function () {

    $('.next').click(function () {
        let currentImage = $('.active');
        let nextImage = currentImage.next();
        if (nextImage.length) {
            currentImage.removeClass('active').css('z-index', '-10');
            nextImage.addClass('active').css('z-index', '10');
        }
    });

    $('.prev').click(function () {
        let currentImage = $('.active');
        let prevImage = currentImage.prev();
        if (prevImage.length) {
            currentImage.removeClass('active').css('z-index', '-10');
            prevImage.addClass('active').css('z-index', '10');
        }
    });
});