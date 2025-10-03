document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  const messageDiv = document.getElementById("message");
  const userDetails = document.getElementById("userDetails");

  try {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      messageDiv.textContent = "Registration successful 🎉";
      messageDiv.className = "message success";

      document.getElementById("userId").textContent = data.user.id;
      document.getElementById("userName").textContent = data.user.username;

      userDetails.classList.remove("hidden");
    } else {
      messageDiv.textContent = data.message || "Registration failed!";
      messageDiv.className = "message error";
      userDetails.classList.add("hidden");
    }
  } catch (err) {
    messageDiv.textContent = "⚠️ Server error!";
    messageDiv.className = "message error";
  }
});
