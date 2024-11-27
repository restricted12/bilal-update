// Initialize Typed.js for the text effect
const typed = new Typed(".te", {
    strings: ["Frontend Developer", "Web Scraper", "Full-stack Developer"], // Texts to type
    typeSpeed: 100,      // Typing speed in milliseconds
    backSpeed: 100,      // Backspace speed in milliseconds
    backDelay: 1000,     // Delay before backspacing in milliseconds
    loop: true,          // Enable looping of the typing effect
});

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    // Check if elements exist before adding the event listener
    if (menuIcon && navList) {
        // Toggle the 'active' class on the nav list when menu icon is clicked
        menuIcon.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    } else {
        console.error('Menu icon or nav list not found!');
    }
});
