// forms.js
function showForm(type) {
  let valid = true;
  let missingFields = [];

  if (type === 'login') {
    const username = document.getElementById('username')?.value.trim();
    const password = document.getElementById('password')?.value.trim();

    if (!username) {
      missingFields.push("Username");
      valid = false;
    }
    if (!password) {
      missingFields.push("Password");
      valid = false;
    }
  }

  if (type === 'signup') {
    const firstName = document.getElementById('firstName')?.value.trim();
    const lastName = document.getElementById('lastName')?.value.trim();
    const dob = document.getElementById('dob')?.value.trim();
    const username = document.getElementById('username')?.value.trim();
    const password = document.getElementById('password')?.value.trim();

    if (!firstName) { missingFields.push("First Name"); valid = false; }
    if (!lastName) { missingFields.push("Last Name"); valid = false; }
    if (!dob) { missingFields.push("Date of Birth"); valid = false; }
    if (!username) { missingFields.push("Username"); valid = false; }
    if (!password) { missingFields.push("Password"); valid = false; }
  }

  // Show alert if missing fields
  if (!valid) {
    alert("Please fill in the following fields:\n" + missingFields.join(", "));
    return false; // Stop form submission
  }

  console.log(`${type} form is valid — submitting...`);
  return true; // Allow form submission
}

// Password toggle function
function togglePasswordVisibility(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);

  if (!input || !toggle) return;

  toggle.addEventListener("click", () => {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    toggle.textContent = isHidden ? "🙈" : "👁️";
  });
}

// Initialize toggles on page load
document.addEventListener("DOMContentLoaded", () => {
  togglePasswordVisibility("password", "togglePassword");
});