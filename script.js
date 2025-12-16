const API_URL = "https://tu-backend.onrender.com";

function probarAPI() {
  fetch(API_URL + "/")
    .then(res => res.json())
    .then(data => {
      document.getElementById("resultado").textContent =
        JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error(error);
      alert("Error conectando con el backend");
    });
}