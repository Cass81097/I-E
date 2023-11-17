$(document).ready(function () {
    $('.hamburger-menu').on('click', function () {
        // Toggle menu và icon tìm kiếm
        $('.navbar-school-menu').toggle(); 
        $('.icon-search').toggle(); 

        // Toggle class 'visible'
        $('.navbar-school-menu').toggleClass("visible");

        // Kiểm tra nếu menu đang hiển thị
        if ($('.navbar-school-menu').hasClass("visible")) {
            $('.navbar-school-menu').css("display", "flex");
            $(".menu-loading").addClass('modal-backdrop');
        } else {
            $(".menu-loading").removeClass('modal-backdrop');
            $('.navbar-school-menu').css("display", ""); // Đặt lại thuộc tính display
        }
    });
});
