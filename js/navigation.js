document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-links");

    // -------------------------------
    // Mobile Menu Toggle
    // -------------------------------
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });
    }

    // -------------------------------
    // Navbar Scroll Effect
    // -------------------------------
    function handleNavbarScroll() {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll();

    // -------------------------------
    // Active Section Highlight
    // -------------------------------
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    function updateActiveSection() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            const target = link.getAttribute("href");

            if (target === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection();
});