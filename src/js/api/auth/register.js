document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault(); 

  
  const registerForm = document.getElementById("registerForm");
  if (!registerForm) {
    console.error("Register form not found.");
    return;
  }

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

  
      setTimeout(() => {
        window.location.href = "/auth/login/";
      }, 2000); 
    } else {
      const error = await response.json();
      console.error(error);
      
      
      if (error.errors && error.errors.length > 0) {
        alert("Registration failed: " + error.errors[0].message);
      } else {
        alert("Registration failed. Please try again.");
      }
    }
  } catch (error) {
    console.error("Error registering:", error);
    alert("An error occurred during registration. Please try again later.");
  }
});
