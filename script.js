const API_URL = "https://helpdesk-4hxw.onrender.com";

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(API_URL + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    console.log("LOGIN RESPONSE:", data);

    if (data.token) {
      // GUARDA TOKEN
      localStorage.setItem("token", data.token);

      // REDIRIGE INMEDIATO
      window.location.replace("dashboard.html");
    } else {
      document.getElementById("mensaje").textContent =
        data.message || "Credenciales incorrectas";
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("mensaje").textContent =
      "Error conectando con el servidor";
  });
}


