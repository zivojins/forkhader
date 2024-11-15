document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Adjust this value for the scroll amount before the background changes
    const scrollTriggerHeight = 50;

    function checkScroll() {
        if (window.scrollY > scrollTriggerHeight) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // Check scroll on load and when the user scrolls
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check in case the page is already scrolled
});
