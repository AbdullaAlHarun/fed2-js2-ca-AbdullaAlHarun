
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault(); 
  
   
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
   
    const loginData = {
      email,
      password
    };
  
    try {
      // Send POST request to login API
      const response = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });
  
      
      if (response.status === 200) {
        const result = await response.json();
       

        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("userProfile", JSON.stringify(result.data)); 
  
        alert("Login successful!");
  
        console.log("Redirecting to index.html"); 
        window.location.href = "/index.html";
      } else {
        
        document.getElementById("loginError").style.display = "block";
      }
    } catch (error) {
      console.error("Error logging in:", error);
      document.getElementById("loginError").textContent = "An error occurred during login. Please try again.";
      document.getElementById("loginError").style.display = "block";
    }
  });
  