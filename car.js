// Function to handle search icon click
document.getElementById("search-icon").addEventListener("click", function() {
    document.querySelector(".search-box").classList.toggle("active");
});

// Function to handle search functionality
document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var searchQuery = this.value.toLowerCase();
        switch (searchQuery) {
            case "audi":
                window.location.href = "audipage.html";
                break;
            case "bmw":
                window.location.href = "bmwpage.html";
                break;
            case "toyota":
                window.location.href = "toyotapage.html";
                break;
            case "porsche":
                window.location.href = "porschepage.html";
                break;
            default:
                alert("Sorry, no page found for your search query.");
        }
    }
});



//header
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);

});
