document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.warn("Theme toggle button not found.");
        return;
    }

    const savedTheme = localStorage.getItem("portfolio-theme");

    // Apply saved theme
    if (savedTheme === "light") {
        document.documentElement.classList.add("light-theme");
    }

    updateThemeIcon();

    // Toggle theme
    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("light-theme");

        const isLight =
            document.documentElement.classList.contains("light-theme");

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

        updateThemeIcon();
    });

    // Update button icon
    function updateThemeIcon() {
        const isLight =
            document.documentElement.classList.contains("light-theme");

        themeToggle.innerHTML = isLight ? "☀" : "☾";
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
        themeToggle.setAttribute(
            "aria-pressed",
            isLight ? "true" : "false"
        );
    }
});