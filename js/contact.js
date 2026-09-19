document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (!contactForm) {
        console.log("Contact form not found yet.");
        return;
    }

    const submitButton = contactForm.querySelector(
        'button[type="submit"]'
    );

    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = contactForm.querySelector('[name="name"]');
        const email = contactForm.querySelector('[name="email"]');
        const subject = contactForm.querySelector('[name="subject"]');
        const message = contactForm.querySelector('[name="message"]');

        // -----------------------------
        // Basic Validation
        // -----------------------------

        if (!name || !email || !message) {
            showStatus(
                "Please fill in all required fields.",
                "error"
            );
            return;
        }

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            showStatus(
                "Please complete all required fields.",
                "error"
            );
            return;
        }

        if (!isValidEmail(email.value.trim())) {
            showStatus(
                "Please enter a valid email address.",
                "error"
            );
            return;
        }

        // -----------------------------
        // Loading State
        // -----------------------------

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        showStatus("Sending your message...", "loading");

        // -----------------------------
        // Formspree Submission
        // -----------------------------
        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                contactForm.reset();

                showStatus(
                    "Message sent successfully! 🚀",
                    "success"
                );
            } else {
                showStatus(
                    "Something went wrong. Please try again.",
                    "error"
                );
            }
        } catch (error) {
            console.error("Contact form error:", error);

            showStatus(
                "Unable to send the message right now.",
                "error"
            );
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }
        }
    });

    // -----------------------------
    // Email Validation
    // -----------------------------

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // -----------------------------
    // Status Message
    // -----------------------------

    function showStatus(message, type) {
        if (!formStatus) return;

        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
    }
});