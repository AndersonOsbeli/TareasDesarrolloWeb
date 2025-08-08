// Cambia el color de fondo de la página aleatoriamente
function cambiarColorFondo() {
  const colores = ['#f4f6fb', '#ffe4e1', '#e0ffe4', '#e1eaff', '#fffbe1', '#f0e1ff'];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor;
  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === colorActual);
  document.body.style.backgroundColor = nuevoColor;
}

// Muestra una alerta con tu nombre y carrera
function mostrarAlerta() {
  alert('Nombre: [Tu Nombre]\nCarrera: [Tu Carrera]');
}

// Validación del formulario (opcional)
document.getElementById('form-contacto').addEventListener('submit', function(e) {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo || !mensaje) {
    alert('Por favor, completa todos los campos.');
    e.preventDefault();
  }
});