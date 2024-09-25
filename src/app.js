// app.js

document.addEventListener("DOMContentLoaded", function () {
    const accessToken = localStorage.getItem("accessToken");
    const logoutButton = document.getElementById("logout-btn");
    const postsSection = document.getElementById("posts-section");
    const welcomeMessage = document.querySelector("h2"); 

    if (accessToken) {
        
        logoutButton.style.display = "block";
        welcomeMessage.innerText = "Welcome to the app!";
        postsSection.style.display = "block";
    } else {
      
        logoutButton.style.display = "none";
        postsSection.style.display = "none"; 
        welcomeMessage.innerText = "Please log in to see posts."; 
    }

    // Logout functionality
    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("accessToken");
        alert("You have logged out successfully.");
        window.location.href = "/auth/login/"; 
    });
});
