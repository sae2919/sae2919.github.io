const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const hamIcon = document.querySelector('.hamburger-icon');
const crossIcon = document.querySelector('.cross-icon');

// Toggle menu visibility and icon display
hamburger.addEventListener('click', function () {
    // Check the current state of the icons
    if (menu.style.display === "block" || menu.style.display === "") {
        // If the menu is currently visible, hide it and show the hamburger icon
        menu.style.display = "none";
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
    } else {
        // If the menu is currently hidden, show it and display the cross icon
        menu.style.display = "block";
        hamIcon.style.display = "none";
        crossIcon.style.display = "inline-block";
    }
});
