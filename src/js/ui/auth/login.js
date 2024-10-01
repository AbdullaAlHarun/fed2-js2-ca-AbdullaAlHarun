

import { login } from "../../api/auth/login";


export async function onLogin(event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;

  // Get form data
  const email = form.email.value;
  const password = form.password.value;

  try {
    // Call the login API
    const { token } = await login({ email, password });

    // Store the token in localStorage
    localStorage.setItem("token", token);

    // Optionally, redirect the user to the home page after successful login
    redirectTo("/");

  } catch (error) {
    // Display error message
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.textContent = error.message;
    }
  }
}