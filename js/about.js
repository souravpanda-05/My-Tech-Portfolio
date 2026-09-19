document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    aboutSection.innerHTML = `
        <div class="section-container">

            <div class="section-header">
                <span class="section-kicker">// ABOUT ME</span>

                <h2 class="section-title">
                    Know <span class="gradient-text">Me</span>
                </h2>

                <p class="section-description">
                    A quick introduction to my background, technical focus
                    and professional journey.
                </p>
            </div>

            <div class="about-grid">

                <div class="about-content reveal-left">

                    <span class="about-label">
                        WHO I AM
                    </span>

                    <h3>
                        Full-Stack Developer
                        <span class="about-accent">// Python Backend Developer / MERN / CSV  / Software Testing</span>
                    </h3>

                    <p>
                        I am a Computer Science graduate focused on
                        software development, backend technologies,
                        full-stack web development and software testing.
                    </p>

                    <p>
                        My technical background includes Python,
                        JavaScript, React.js, Node.js, Express.js,
                        MongoDB, MySQL, Git and GitHub.
                    </p>

                    <p>
                        I also have professional experience in
                        Computer System Validation, including GxP,
                        IQ/OQ/PQ and 21 CFR Part 11.
                    </p>

                    <div class="about-tags">
                        <span>Python</span>
                        <span>MERN</span>
                        <span>Software Testing</span>
                        <span>CSV</span>
                    </div>

                </div>


                <div class="about-card reveal-right">

                    <div class="about-terminal">

                        <div class="about-terminal-header">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div class="about-terminal-body">

                            <div>
                                <span class="terminal-key">name</span>
                                <span class="terminal-value">
                                    "Sourav Panda"
                                </span>
                            </div>

                            <div>
                                <span class="terminal-key">role</span>
                                <span class="terminal-value">
                                    "Developer"
                                </span>
                            </div>

                            <div>
                                <span class="terminal-key">focus</span>
                                <span class="terminal-value">
                                    "Backend & Full-Stack"
                                </span>
                            </div>

                            <div>
                                <span class="terminal-key">stack</span>
                                <span class="terminal-value">
                                    "Python + MERN"
                                </span>
                            </div>

                            <div>
                                <span class="terminal-key">validation</span>
                                <span class="terminal-value">
                                    "CSV / GxP"
                                </span>
                            </div>

                            <div>
                                <span class="terminal-key">status</span>
                                <span class="terminal-success">
                                    "OPEN_TO_OPPORTUNITIES"
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;
});