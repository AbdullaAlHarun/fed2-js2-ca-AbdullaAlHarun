
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault(); 
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const loginData = {
      email,
      password,
    };
  
    try {
      const response = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
  
      if (response.status === 200) {
        const result = await response.json();

        localStorage.setItem("accessToken", result.accessToken);
        alert("Login successful!");
        
 
        window.location.href = "/index.html"; 
      } else {
        const error = await response.json();
        console.error(error);
        document.getElementById("loginError").innerText = error.errors[0].message;
        document.getElementById("loginError").style.display = "block"; 
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login. Please try again later.");
    }
  });
  