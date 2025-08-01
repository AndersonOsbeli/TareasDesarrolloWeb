const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
  alert("¡Bienvenido a los Sitios Turísticos de Guatemala! 🇬🇹\nExplora los destinos más hermosos de nuestro país.");
}