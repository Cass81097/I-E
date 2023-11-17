$(document).ready(function () {
    function toggleSearch() {
        let searchInput = $("#searchInput");

        // Toggle the display of the search input.
        if (searchInput.css("display") === "none") {
            searchInput.css("display", "block");

            // Add an event listener to handle clicks outside the search input.
            $(document).on('click.toggleSearchEvent', function (event) {
                if (!searchInput.is(event.target) && searchInput.has(event.target).length === 0) {
                    // If the click is outside, hide the search input.
                    searchInput.css("display", "none");

                    // Remove the event listener once it's not needed.
                    $(document).off('click.toggleSearchEvent');
                }
            });
        } else {
            searchInput.css("display", "none");
        }
    }

    // Prevent the event listener from hiding the search when clicking the search icon.
    $('.icon-search').on('click', function (event) {
        event.stopPropagation();
        toggleSearch();
    });

})