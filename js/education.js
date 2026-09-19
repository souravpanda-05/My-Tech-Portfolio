document.addEventListener("DOMContentLoaded", () => {
    const educationSection = document.getElementById("education");

    if (!educationSection || typeof portfolioEducation === "undefined") {
        return;
    }

    educationSection.innerHTML = `
        <div class="section-container">

            <div class="section-header">
                <span class="section-kicker">// EDUCATION</span>

                <h2 class="section-title">
                    Academic <span class="gradient-text">Journey</span>
                </h2>

                <p class="section-description">
                    My academic background and educational milestones.
                </p>
            </div>

            <div class="education-timeline">
                ${portfolioEducation
                    .map((education, index) => `
                        <article class="education-item reveal">

                            <div class="education-marker">
                                <span>${String(index + 1).padStart(2, "0")}</span>
                            </div>

                            <div class="education-card">

                                <div class="education-top">

                                    <span class="education-type">
                                        ${education.type}
                                    </span>

                                    <span class="education-period">
                                        ${education.period}
                                    </span>

                                </div>

                                <h3 class="education-degree">
                                    ${education.degree}
                                </h3>

                                <h4 class="education-institution">
                                    ${education.institution}
                                </h4>

                                <p class="education-location">
                                    📍 ${education.location}
                                </p>

                                <div class="education-result">
                                    <span>RESULT</span>
                                    <strong>${education.result}</strong>
                                </div>

                            </div>

                        </article>
                    `)
                    .join("")}
            </div>

        </div>
    `;

    const revealItems = educationSection.querySelectorAll(".reveal");

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

    revealItems.forEach((item) => observer.observe(item));
});