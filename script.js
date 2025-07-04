// Select the form fields and error messages
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('errorEmail');
const passwordError = document.getElementById('errorPassword');

// Add event listeners to validate while typing
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      const icon = hamburger.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  
    // Password toggle visibility
    const passwordField = document.querySelector("#password");
    const togglePassword = document.querySelector(".toggle-password");
  
    togglePassword.addEventListener("click", () => {
      const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);
  
      // Toggle the eye icon
      togglePassword.classList.toggle("fa-eye-slash");
      togglePassword.classList.toggle("fa-eye");
    });
  });
  



function validateEmail() {
  const email = emailInput.value;
  if (!email) {
    emailError.textContent = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.textContent = 'Invalid Email Address.';
  } else {
    emailError.textContent = ''; // Clear the error if valid
  }
}
function validatePassword() {
  const password = passwordInput.value;
  if (!password) {
    passwordError.textContent = 'Password Is A Required Field';
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
  } else {
    passwordError.textContent = ''; // Clear the error if valid
  }
}