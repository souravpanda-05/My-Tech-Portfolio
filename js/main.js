document.addEventListener("DOMContentLoaded", () => {
    const bootScreen = document.getElementById("boot-screen");
    const mainSite = document.getElementById("main-site");

    // Lock scrolling while boot screen is active
    document.body.style.overflow = "hidden";

    // Hide boot screen after loading
    setTimeout(() => {
        if (bootScreen) {
            bootScreen.classList.add("hidden");
        }

        if (mainSite) {
            mainSite.classList.add("site-loaded");
        }

        document.body.style.overflow = "";
    }, 3000);

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Update footer year automatically
    const yearElements = document.querySelectorAll("[data-year]");
    const currentYear = new Date().getFullYear();

    yearElements.forEach((element) => {
        element.textContent = currentYear;
    });

    console.log("Sourav.dev portfolio initialized 🚀");
});