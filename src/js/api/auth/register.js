
document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault(); 

  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const bio = document.getElementById("bio").value;
  const avatarUrl = document.getElementById("avatarUrl").value;



  const userData = {
    name,
    email,
    password,
    bio: bio || "", // Optional field
    avatar: avatarUrl ? { url: avatarUrl } : undefined,

  };

  try {
   
    const response = await fetch("https://v2.api.noroff.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

  
    if (response.status === 201) {
      const result = await response.json();
      alert("Registration successful!");
    
      window.location.href = "/auth/login/";
    } else {
      const error = await response.json();
      console.error(error);
      alert("Registration failed: " + error.errors[0].message); 
    }
  } catch (error) {
    console.error("Error registering:", error);
    alert("An error occurred during registration. Please try again later.");
  }
});
