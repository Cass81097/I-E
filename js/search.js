$(document).ready(function () {
    function toggleSearch() {
        let searchInput = $("#searchInput");
        searchInput.toggleClass("visible");

        if (searchInput.hasClass("visible")) {
            $(document).on('click.toggleSearchEvent', function (event) {
                if (!searchInput.is(event.target) && searchInput.has(event.target).length === 0) {
                    searchInput.removeClass("visible");
                    $(document).off('click.toggleSearchEvent');
                }
            });
        }
    }

    $('.icon-search').on('click', function (event) {
        event.stopPropagation();
        toggleSearch();
    });
});
