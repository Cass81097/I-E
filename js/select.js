function addSelectClassToElement() {
    let elementsToTrack = ['.news', '.educations', '.researchs', '.cooperates', '.sharings', '.library-image'];

    $(window).on('scroll', function() {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        let docHeight = $(document).height();
        let middlePosition = scrollTop + windowHeight / 2;
        let closestElement = null;
        let closestDistance = Infinity;

        // Xóa class 'select' khỏi tất cả các mục
        $('.navbar-school-menu p').removeClass('select');

        // Nếu người dùng ở đầu trang hoặc cuối trang
        if (scrollTop === 0 || scrollTop + windowHeight >= docHeight - 50) { // Cho phép một lượng lệch nhỏ
            $('.navbar-school-menu p:contains("GIỚI THIỆU")').addClass('select');
        } else {
            // Xác định phần tử gần nhất với vị trí giữa màn hình
            elementsToTrack.forEach(function(selector) {
                let targetElement = $(selector);
                let targetPosition = targetElement.offset().top + targetElement.outerHeight() / 2;
                let distance = Math.abs(targetPosition - middlePosition);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestElement = targetElement;
                }
            });

            if (closestElement) {
                $('.navbar-school-menu p:contains("' + closestElement.text() + '")').addClass('select');
            }
        }
    });
}

addSelectClassToElement();

$(document).ready(function() {
    $('.navbar-school-menu p').hover(
        function() {
            // Sự kiện khi di chuột vào
            $(this).addClass('select');
        },
        function() {
            // Sự kiện khi di chuột ra
            $(this).removeClass('select');
        }
    );
});

