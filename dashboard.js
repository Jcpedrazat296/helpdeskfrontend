const API_URL = "https://helpdeskfrontend-0vjx.onrender.com";
const token = localStorage.getItem("token");

// 🔐 PROTECCIÓN
if (!token) {
  window.location.href = "index.html";
}

// 🔓 LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// 👥 USUARIOS
function cargarUsuarios() {
  fetch(API_URL + "/users", {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("usuarios").textContent =
      JSON.stringify(data, null, 2);
  })
  .catch(() => {
    alert("Error cargando usuarios");
  });
}

// 📁 CASOS
function cargarCasos() {
  fetch(API_URL + "/cases", {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("casos").textContent =
      JSON.stringify(data, null, 2);
  })
  .catch(() => {
    alert("Error cargando casos");
  });
}
