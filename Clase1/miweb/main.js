// ===== VARIABLES GLOBALES =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const welcomeBtn = document.getElementById('welcome-btn');
const infoBtn = document.getElementById('info-btn');

// ===== ALERTA DE BIENVENIDA AL CARGAR =====
window.addEventListener('load', function() {
    // Pequeño delay para que la página cargue completamente
    setTimeout(() => {
        alert('¡Bienvenido a mi sitio web! 🎉\\n\\nExplora todas las funcionalidades y no olvides probar el cambio de tema.');
    }, 500);
});

// ===== FUNCIONALIDAD DE CAMBIO DE TEMA =====
function initTheme() {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Aplicar tema guardado o preferencia del sistema
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Aplicar nuevo tema
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Guardar en localStorage
    localStorage.setItem('theme', newTheme);
    
    // Actualizar icono
    updateThemeIcon(newTheme);
    
    // Efecto visual al cambiar tema
    document.body.style.transition = 'all 0.3s ease';
    
    // Mostrar notificación
    showNotification(`Tema ${newTheme === 'dark' ? 'oscuro' : 'claro'} activado`);
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Cambiar a tema claro');
    } else {
        themeIcon.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Cambiar a tema oscuro');
    }
}

// ===== SISTEMA DE NOTIFICACIONES =====
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px var(--shadow);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ===== FUNCIONES DE LOS BOTONES =====
function handleWelcomeClick() {
    const messages = [
        '¡Gracias por visitarnos! 🎉',
        '¡Bienvenido a bordo! 🚀',
        '¡Excelente elección! ⭐',
        '¡Comencemos esta aventura! 🌟'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showNotification(randomMessage);
    
    // Efecto visual en el botón
    welcomeBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        welcomeBtn.style.transform = 'scale(1)';
    }, 150);
}

function handleInfoClick() {
    const info = `
🌟 Información del Sitio Web:

✨ Tecnologías utilizadas:
• HTML5 semántico
• CSS3 con variables personalizadas
• JavaScript ES6+
• Diseño responsivo
• Temas claro/oscuro

🎨 Características:
• Cambio de tema dinámico
• Animaciones suaves
• Notificaciones interactivas
• Diseño moderno y accesible

🚀 ¡Gracias por explorar!
    `;
    
    alert(info);
}

// ===== EFECTOS ADICIONALES =====
function addScrollEffects() {
    const cards = document.querySelectorAll('.content-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tema
    initTheme();
    
    // Event listeners para botones
    themeToggle.addEventListener('click', toggleTheme);
    welcomeBtn.addEventListener('click', handleWelcomeClick);
    infoBtn.addEventListener('click', handleInfoClick);
    
    // Efectos de scroll
    addScrollEffects();
    
    // Detectar cambios en preferencias del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
});

// ===== FUNCIONES DE UTILIDAD =====
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Prevenir errores de consola
window.addEventListener('error', function(e) {
    console.log('Error capturado:', e.message);
});

console.log('🚀 Mi Sitio Web cargado correctamente!');
console.log('💡 Prueba el botón de cambio de tema en la esquina superior derecha.');