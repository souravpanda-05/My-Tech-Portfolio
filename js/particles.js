document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("particles-container");

    if (!container) return;

    const particleCount = 45;

    // Container setup
    container.style.position = "absolute";
    container.style.inset = "0";
    container.style.overflow = "hidden";
    container.style.pointerEvents = "none";
    container.style.zIndex = "1";

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");

        particle.classList.add("particle");

        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 8 + 5;
        const delay = Math.random() * 6;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;

        particle.style.setProperty(
            "--particle-duration",
            `${duration}s`
        );

        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
});