// Swiper Initialization (unchanged)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Hamburger Menu Toggle for Small Screens
// Hamburger Menu Toggle for Small Screens
const hamburger = document.getElementById("hamburger");
const navbarList = document.querySelector(".navbar-list");
const megaMenu = document.getElementById("megaMenu");

hamburger.addEventListener("click", () => {
    // Ensure megamenu is hidden when toggling the navbar-list
    if (megaMenu.classList.contains("visible")) {
        megaMenu.classList.remove("visible"); // Hide megamenu
    }

    navbarList.classList.toggle("active"); // Toggle navbar-list visibility
});


document.addEventListener("DOMContentLoaded", () => {
    const megaMenu = document.getElementById("megaMenu");
    const storeMenu = document.getElementById("storeMenu");
    const backMenu = document.getElementById("backMenu"); // Select the back menu element

    // Toggle Mega Menu when Store in Navbar is clicked
    storeMenu.addEventListener("click", (e) => {
        e.preventDefault();
        const isMenuVisible = megaMenu.classList.contains("visible");

        // Toggle visibility of mega menu
        if (isMenuVisible) {
            megaMenu.classList.remove("visible");
        } else {
            megaMenu.classList.add("visible");
        }
    });

    // Add event listener to the backMenu to close the mega menu
    backMenu.addEventListener("click", () => {
        megaMenu.classList.remove("visible");
    });

    // Prevent clicks inside megaMenu from triggering back logic (optional safeguard)
    megaMenu.addEventListener("click", (e) => {
        e.stopPropagation(); // Stops the event from bubbling up to unintended targets
    });
});


const shopLatestButton = document.getElementById('shopLatest');
shopLatestButton.addEventListener('click', () => {
    window.location.href = 'https://www.apple.com/store';
}
);

