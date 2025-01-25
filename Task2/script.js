document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (!name || !email || !password) {
    errorMessage.textContent = "All fields are required!";
    return;
  }

  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  errorMessage.textContent = "";
  alert("Form submitted successfully!");
});
