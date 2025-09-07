// Light/Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ➕➖ Counter Feature
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// ❓ FAQ Toggle
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ✅ Form Validation
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission
  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email address";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If all valid
  if (isValid) {
    document.getElementById("successMsg").textContent = "🎉 Form submitted successfully!";
    this.reset();
  }
});
