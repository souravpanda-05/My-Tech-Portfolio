document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // SCROLL REVEAL ANIMATION
    // =========================================

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    }

    // =========================================
    // HERO MOUSE PARALLAX
    // =========================================

    const hero = document.querySelector(".hero");
    const heroVisual = document.querySelector(".hero-visual");
    const heroContent = document.querySelector(".hero-content");

    if (hero && heroVisual && heroContent) {

        hero.addEventListener("mousemove", (event) => {

            const rect = hero.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            heroVisual.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

            heroContent.style.transform =
                `translate(${x * -5}px, ${y * -5}px)`;
        });

        hero.addEventListener("mouseleave", () => {
            heroVisual.style.transform = "translate(0, 0)";
            heroContent.style.transform = "translate(0, 0)";
        });
    }

    // =========================================
    // BUTTON HOVER EFFECT
    // =========================================

    const buttons = document.querySelectorAll(
        ".btn, .component-btn"
    );

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            const rect = button.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            button.style.setProperty("--mouse-x", `${x}px`);
            button.style.setProperty("--mouse-y", `${y}px`);
        });

    });

    // =========================================
    // TYPING EFFECT
    // =========================================

    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {

        const text =
            typingElement.dataset.text ||
            typingElement.textContent.trim();

        typingElement.textContent = "";

        let index = 0;

        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;

                setTimeout(typeText, 70);
            }
        }

        setTimeout(typeText, 1200);
    }

});