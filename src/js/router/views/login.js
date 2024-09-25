import { onLogin } from "../../ui/auth/login";

const form = document.forms.login;

form.addEventListener("submit", onLogin);
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const result = await loginUser(email, password);
        localStorage.setItem("accessToken", result.accessToken);
        window.location.href = "/index.html"; // Redirect to home page
    } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please try again.");
    }
});