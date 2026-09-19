document.addEventListener("DOMContentLoaded", () => {
    const experienceSection = document.getElementById("experience");

    if (!experienceSection || typeof portfolioExperience === "undefined") {
        return;
    }

    experienceSection.innerHTML = `
        <div class="section-container">

            <div class="section-header">
                <span class="section-kicker">// EXPERIENCE</span>

                <h2 class="section-title">
                    Professional <span class="gradient-text">Journey</span>
                </h2>

                <p class="section-description">
                    My experience across computerized system validation
                    and full-stack web development.
                </p>
            </div>

            <div class="experience-timeline">

                ${portfolioExperience
                    .map(
                        (experience, index) => `
                        <article class="experience-item reveal">

                            <div class="experience-marker">
                                <span>${String(index + 1).padStart(2, "0")}</span>
                            </div>

                            <div class="experience-card">

                                <div class="experience-top">

                                    <div>
                                        <span class="experience-type">
                                            ${experience.type}
                                        </span>

                                        <span class="experience-period">
                                            ${experience.period}
                                        </span>
                                    </div>

                                    <span class="experience-number">
                                        0${index + 1}
                                    </span>

                                </div>

                                <h3 class="experience-role">
                                    ${experience.role}
                                </h3>

                                <h4 class="experience-company">
                                    ${experience.company}
                                </h4>

                                <p class="experience-location">
                                    📍 ${experience.location}
                                </p>

                                <p class="experience-description">
                                    ${experience.description}
                                </p>

                                <div class="experience-tech">
                                    ${experience.technologies
                                        .map(
                                            (tech) =>
                                                `<span>${tech}</span>`
                                        )
                                        .join("")}
                                </div>

                            </div>

                        </article>
                    `
                    )
                    .join("")}

            </div>
        </div>
    `;

    // Reveal animation
    const items = experienceSection.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    items.forEach((item) => observer.observe(item));
});