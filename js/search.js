function toggleSearch() {
    let searchInput = document.getElementById("searchInput");

    // Toggle the display of the search input.
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";

        // Add an event listener to handle clicks outside the search input.
        document.addEventListener('click', function(event) {
            let isClickInside = searchInput.contains(event.target);

            if (!isClickInside) {
                // If the click is outside, hide the search input.
                searchInput.style.display = "none";

                // Remove the event listener once it's not needed.
                document.removeEventListener('click', arguments.callee);
            }
        });
    } else {
        searchInput.style.display = "none";
    }
}

// Prevent the event listener from hiding the search when clicking the search icon.
document.querySelector('.icon-search').addEventListener('click', function(event) {
    event.stopPropagation();
});
