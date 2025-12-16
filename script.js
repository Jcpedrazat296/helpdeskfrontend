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
    console.log("RESPUESTA LOGIN:", data);

    if (data.token) {
        localStorage.setItem("token", data.token);

        // PRUEBA VISIBLE
        alert("Login correcto, redirigiendo al dashboard");

        // REDIRECCIÓN DIRECTA (SIN setTimeout)
        window.location.href = "dashboard.html";
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

