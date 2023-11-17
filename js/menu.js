$(document).ready(function () {
    $('.hamburger-menu').on('click', function () {
        $('.navbar-school-menu').toggle(); 
        $('.icon-search').toggle(); 

        // Kiểm tra nếu menu đang hiển thị
        if ($('.navbar-school-menu').is(':visible')) {
            $('.navbar-school-menu').css("display", "flex");
            $(".menu-loading").addClass('modal-backdrop');
        } else {
            $(".menu-loading").removeClass('modal-backdrop');
            $('.navbar-school-menu').css("display", ""); // Đặt lại thuộc tính display
        }
    });
});
