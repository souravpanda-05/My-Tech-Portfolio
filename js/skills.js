// document.addEventListener("DOMContentLoaded", () => {
//     const skillsSection = document.getElementById("skills");

//     console.log("Skills section:", skillsSection);
//     console.log("Skills data:", typeof portfolioSkills);

//     if (!skillsSection) {
//         console.error("ERROR: #skills section not found.");
//         return;
//     }

//     if (typeof portfolioSkills === "undefined") {
//         console.error("ERROR: portfolioSkills data not loaded.");
//         return;
//     }

//     skillsSection.innerHTML = `
//         <div class="section-container">

//             <div class="section-header">
//                 <span class="section-kicker">// MY EXPERTISE</span>

//                 <h2 class="section-title">
//                     Technical <span class="gradient-text">Skills</span>
//                 </h2>

//                 <p class="section-description">
//                     Technologies and tools I use across development,
//                     testing and validation.
//                 </p>
//             </div>

//             <div class="skills-grid">
//                 ${portfolioSkills.map((group) => `
//                     <div class="skill-card">

//                         <div class="skill-card-header">
//                             <div class="skill-icon">
//                                 ${group.icon}
//                             </div>

//                             <div>
//                                 <h3>${group.category}</h3>
//                                 <span>${group.skills.length} skills</span>
//                             </div>
//                         </div>

//                         <div class="skill-tags">
//                             ${group.skills.map((skill) => `
//                                 <span class="skill-tag">${skill}</span>
//                             `).join("")}
//                         </div>

//                     </div>
//                 `).join("")}
//             </div>

//         </div>
//     `;

//     console.log("✅ Skills section loaded successfully.");
// });/
document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");

    if (!skillsSection || typeof portfolioSkills === "undefined") {
        return;
    }

    const skillIcons = {
        "Python": "🐍",
        "JavaScript": "🟨",
        "C": "©️",

        "HTML5": "🌐",
        "CSS3": "🎨",
        "React.js": "⚛️",
        "Node.js": "🟢",
        "Express.js": "🚂",
        "Tailwind CSS": "💨",

        "MySQL": "🐬",
        "MongoDB": "🍃",

        "Manual Testing": "🔍",
        "Computer System Validation (CSV)": "✅",
        "IQ/OQ/PQ": "📋",
        "GxP": "🧪",
        "21 CFR Part 11": "📜",

        "Git": "🔀",
        "GitHub": "🐙",

        "Full-Stack Development": "💻",
        "MERN": "🚀",
        "Software Testing": "🧪",
        "CSV": "✔️",

        "MS Excel": "📊",
        "VS Code": "💙",
        "Jupyter Notebook": "📓"
    };

    skillsSection.innerHTML = `
        <div class="section-container">

            <div class="section-header">
                <span class="section-kicker">// MY EXPERTISE ⚡</span>

                <h2 class="section-title">
                    Technical <span class="gradient-text">Skills</span> 🧠
                </h2>

                <p class="section-description">
                    Technologies, tools and technical areas I work with.
                </p>
            </div>

            <div class="skills-grid">
                ${portfolioSkills.map((group) => `
                    <article class="skill-card">

                        <div class="skill-card-header">

                            <div class="skill-icon">
                                ${group.icon}
                            </div>

                            <div>
                                <h3>${group.category}</h3>

                                <span>
                                    ${group.skills.length} skills
                                </span>
                            </div>

                        </div>

                        <div class="skill-tags">
                            ${group.skills.map((skill) => `
                                <span class="skill-tag">
                                    <span class="skill-tag-icon">
                                        ${skillIcons[skill] || "💠"}
                                    </span>
                                    ${skill}
                                </span>
                            `).join("")}
                        </div>

                    </article>
                `).join("")}
            </div>

        </div>
    `;
});