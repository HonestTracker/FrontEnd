document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.trim() === "") {
            alert("Please enter a message.");
            return;
        }

        // If all validation passes, you can proceed to submit the form
        // For demonstration, we will just alert the user
        alert("Form submitted successfully!");
    });

    function validateEmail(email) {
        // Basic email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});