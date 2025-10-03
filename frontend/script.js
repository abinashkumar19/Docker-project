const API_URL = "http://localhost:5000/api"; // change localhost -> EC2 IP when deployed

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (data.user) {
    document.getElementById("userDetails").style.display = "block";
    document.getElementById("userId").textContent = data.user.id;
    document.getElementById("userName").textContent = data.user.username;
  } else {
    alert(data.message || "Registration failed!");
  }
});
