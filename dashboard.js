const API_URL = "https://helpdesk-4hxw.onrender.com";
const token = localStorage.getItem("token");

console.log("TOKEN EN DASHBOARD:", token);

// SI NO HAY TOKEN → LOGIN
if (!token) {
  window.location.replace("index.html");
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.replace("index.html");
}

// CARGAR USUARIOS
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
  .catch(err => console.error(err));
}

