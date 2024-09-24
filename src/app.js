// app.js
import "./css/style.css";
import router from "./js/router";

export function updateLogoutButton() {
    const accessToken = localStorage.getItem("accessToken");
    const logoutBtn = document.getElementById("logout-btn");

    if (accessToken) {
        logoutBtn.style.display = "block"; // Show logout button
    } else {
        logoutBtn.style.display = "none"; // Hide logout button
    }
}

// Call the function to update the button visibility on page load
updateLogoutButton();

// Function to handle logout
document.getElementById("logout-btn").addEventListener("click", function() {
    // Clear the access token and user profile from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userProfile");

    alert("You have been logged out.");
    
    // Redirect to the homepage (or login page)
    window.location.href = "/index.html"; // Redirect to home page or any other page
});

// Your router and other logic
await router(window.location.pathname);
