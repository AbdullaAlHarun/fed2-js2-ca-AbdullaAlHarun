import { apiLogin } from '../../api/auth/login.js';
 
 
export async function onLogin(event) {
  event.preventDefault();
 
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
 
  const result = await apiLogin({ email, password });
 
  if (result.error) {
    alert("Login failed: " + result.error);
  } else {
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("userID", result.userID);
 
    alert("Login successful! Welcome, " + (result.userID || "User") + "!");
 
    window.location.href = "/";
  }
}