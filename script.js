// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();
        let response = document.getElementById('contactResponse');

        if (name === "" || email === "" || message === "") {
            response.innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
            return;
        }

        response.innerHTML = "<p style='color:green;'>Thank you, " + name + "! Your message has been sent.</p>";
        contactForm.reset();
    });
}

// Enquiry Form
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('nameEnq').value.trim();
        let email = document.getElementById('emailEnq').value.trim();
        let type = document.getElementById('type').value;
        let message = document.getElementById('messageEnq').value.trim();
        let response = document.getElementById('enquiryResponse');

        if (name === "" || email === "" || type === "" || message === "") {
            response.innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
            return;
        }

        response.innerHTML = "<p style='color:green;'>Thank you, " + name + "! Your enquiry about '" + type + "' has been submitted.</p>";
        enquiryForm.reset();
    });
}
