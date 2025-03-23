document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("auth-form");

    authForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        // Simulate login validation
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username && email && password) {
            alert("Login Successful!");
            window.location.href = "home.html"; // Redirect to home page
        } else {
            alert("Please fill in all fields!");
        }
    });
});





