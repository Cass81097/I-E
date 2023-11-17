$(document).ready(function () {
    // Hàm để hiển thị search-input
    function showSearchInput() {
        let searchInput = $(".search-input");
        searchInput.addClass("visible");
    }

    // Hàm để ẩn search-input
    function hideSearchInput() {
        let searchInput = $(".search-input");
        searchInput.removeClass("visible");
    }

    // Khi click vào icon-search, hiển thị search-input
    $('.icon-search').on('click', function (event) {
        event.stopPropagation(); // Ngăn chặn sự kiện lan truyền
        showSearchInput();
    });

    // Khi click vào document, ẩn search-input nếu click ngoài khu vực của nó
    $(document).on('click', function (event) {
        let searchInput = $(".search-input");
        if (!searchInput.is(event.target) && searchInput.has(event.target).length === 0 && searchInput.hasClass("visible")) {
            hideSearchInput();
        }
    });

    // Ngăn chặn việc ẩn search-input khi click vào chính nó
    $('.search-input').on('click', function (event) {
        event.stopPropagation();
    });
});
