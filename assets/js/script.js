const navBar = document.getElementById('lower-nav');

window.addEventListener("scroll", () => {
    if (window.innerWidth >= 768) {
        if (window.scrollY >= 50) {
            navBar.classList.add("nav_active");
        }
        else {
            navBar.classList.remove("nav_active");
        }
    }
});
const hamburger = document.getElementById('hamburger');
const lowerNav = document.getElementById('lower-nav');

// Function to close the side navigation
function closeSideNav() {
    lowerNav.classList.remove('active');
}

// Toggle the side navbar when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    lowerNav.classList.toggle('active');
});

// Listen for clicks outside of the side navigation to close it
document.addEventListener('click', (event) => {
    const isClickInsideNav = lowerNav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger) {
        closeSideNav();
    }
});

// Prevent clicks inside the side nav from closing it
lowerNav.addEventListener('click', (event) => {
    event.stopPropagation();
});
