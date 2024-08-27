// JavaScript for Search Functionality
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const blogPosts = document.querySelectorAll(".blog-post");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();
        
        blogPosts.forEach(function(post) {
            const location = post.getAttribute("data-location").toLowerCase();
            
            if (location.includes(query)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    });
});
