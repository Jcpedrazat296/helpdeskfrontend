const API_URL = "https://helpdesk-4hxw.onrender.com";
const token = localStorage.getItem("token");

console.log("TOKEN EN DASHBOARD:", token);

if (!token) {
  alert("No hay sesión, regresando al login");
  window.location.href = "index.html";
}

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
