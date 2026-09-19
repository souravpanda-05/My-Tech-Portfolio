document.addEventListener("DOMContentLoaded", () => {
    const projectsSection = document.getElementById("projects");

    if (!projectsSection) return;

    if (typeof portfolioProjects === "undefined") {
        console.error("ERROR: portfolioProjects data not loaded.");
        return;
    }

    renderProjects();

    function renderProjects() {
        projectsSection.innerHTML = `
            <div class="section-container">

                <div class="section-header">
                    <span class="section-kicker">// MY WORK</span>

                    <h2 class="section-title">
                        Featured <span class="gradient-text">Projects</span>
                    </h2>

                    <p class="section-description">
                        Selected projects across full-stack development,
                        backend technologies and computerized system validation.
                    </p>
                </div>

                <div class="projects-grid">
                    ${portfolioProjects
                        .map((project, index) => createProjectCard(project, index))
                        .join("")}
                </div>

            </div>
        `;

        activateReveal();
    }

    function createProjectCard(project, index) {
        return `
            <article class="project-card reveal">

                <div class="project-number">
                    0${index + 1}
                </div>

                <div class="project-card-top">

                    <div class="project-icon">
                        ${project.icon}
                    </div>

                    <span class="project-category">
                        ${project.category}
                    </span>

                </div>

                <span class="project-period">
                    ${project.period}
                </span>

                <h3 class="project-title">
                    ${project.title}
                </h3>

                <p class="project-description">
                    ${project.description}
                </p>

                <div class="project-technologies">
                    ${project.technologies
                        .map(
                            (tech) =>
                                `<span class="tech-tag">${tech}</span>`
                        )
                        .join("")}
                </div>

                <div class="project-actions">

                    ${
                        project.github
                            ? `
                            <a
                                href="${project.github}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="project-link"
                            >
                                GitHub ↗
                            </a>
                            `
                            : ""
                    }

                    ${
                        project.live
                            ? `
                            <a
                                href="${project.live}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="project-link project-link-primary"
                            >
                                Live Demo ↗
                            </a>
                            `
                            : ""
                    }

                </div>

                <div class="project-card-line"></div>

            </article>
        `;
    }

    function activateReveal() {
        const elements = projectsSection.querySelectorAll(".reveal");

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

        elements.forEach((element) => observer.observe(element));
    }
});