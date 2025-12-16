const API_URL = "https://helpdesk-4hxw.onrender.com";

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(API_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      document.getElementById("mensaje").style.color = "green";
      document.getElementById("mensaje").textContent = "Login exitoso";

      // Redirigir al dashboard
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      document.getElementById("mensaje").textContent =
        data.message || "Credenciales incorrectas";
    }
  })
  .catch(() => {
    document.getElementById("mensaje").textContent =
      "Error conectando con el servidor";
  });
}

