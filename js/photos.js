$(document).ready(function () {
    let arrowLeft = $('.fa-photos-left');
    let arrowRight = $('.fa-photos-right');

    let newsImages = [
        './assets/images/photos/1.png',
        './assets/images/photos/2.png',
        './assets/images/photos/3.png',
        './assets/images/photos/4.png',
        './assets/images/photos/5.png',
        './assets/images/photos/6.png',
        './assets/images/photos/7.png',
        './assets/images/photos/8.png',
        './assets/images/photos/9.png',
        './assets/images/photos/10.png'
    ];

    let currentIndex = 0;

    function updatePhotosContent(index, direction) {
        let animateClass = direction === 'right' ? 'animatePhotoRight' : 'animatePhotoLeft';

        for (let i = 1; i <= 5; i++) {
            let imageIndex = index + i - 1;
            let photoDiv = $('.photos-' + i);

            if (imageIndex < newsImages.length) {
                photoDiv.removeClass('animatePhotoRight animatePhotoLeft');
                photoDiv.addClass(animateClass);
                photoDiv.attr('src', newsImages[imageIndex]);
            } else {
                photoDiv.attr('src', ''); // or a placeholder image
            }
        }
        currentIndex = index;
    }

    updatePhotosContent(currentIndex, 'right');

    arrowLeft.on('click', function () {
        let newIndex = currentIndex > 0 ? currentIndex - 5 : 0;
        updatePhotosContent(newIndex, 'left');
    });

    arrowRight.on('click', function () {
        let newIndex = currentIndex < newsImages.length - 5 ? currentIndex + 5 : currentIndex;
        updatePhotosContent(newIndex, 'right');
    });
});
