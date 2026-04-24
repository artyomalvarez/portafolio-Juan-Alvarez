/**
 * script.js - Dinamismo para el Portafolio
 */

// 1. Mensaje de bienvenida en consola
console.log("¡Bienvenido al portafolio de Juan Alvarez!");

// 2. Interacción para cambiar texto (Ejemplo: Al hacer clic en el botón de contacto)
const btnSecundario = document.querySelector('.btn-secondary');
const heroParrafo = document.querySelector('.hero-p');

if (btnSecundario && heroParrafo) {
    btnSecundario.addEventListener('click', (e) => {
        // Evitamos el salto si es un enlace vacío para el ejemplo
        heroParrafo.textContent = "¡Gracias por tu interés! Desliza para contactarme.";
        heroParrafo.style.color = "#09f";
    });
}

// 3. Punto de entrada único (Smart Loader)
window.onload = () => {
    // Si el script encuentra elementos de la tienda, lanza el modal de Mascotas
    if (document.querySelector('.hero-pets') || document.querySelector('.header-pets')) {
        initPetsModal();
    } else { 
        // Si no, lanza el modal del Portafolio
        initWelcomeModal();
    }
};

/**
 * Crea y muestra el modal de bienvenida dinámicamente
 */
function initWelcomeModal() {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0; /* Centrado moderno que usa mascotas */
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      padding: 16px;
      box-sizing: border-box;
    `;

    document.body.appendChild(overlay);

    const tarjeta = document.createElement("div");
    tarjeta.style.cssText = `
      background: #1f2937;
      border: 1px solid #374151;
      border-radius: 16px;
      padding: 2rem;
      width: 100%;
      max-width: 360px;
      text-align: center;
      font-family: sans-serif;
      box-sizing: border-box;
    `;

    tarjeta.innerHTML = `
      <p style="margin:0 0 4px;color:#a855f7;font-size:13px;font-weight:500;">{juanjochef}</p>
      <h2 style="margin:0 0 8px;color:#f9fafb;font-size:20px;font-weight:600;">¡Hola! Soy Juan Alvarez</h2>
      <p style="margin:0 0 1.5rem;color:#9ca3af;font-size:14px;line-height:1.6;">
        Estudiante de cocina y programador junior.<br>Bienvenido a mi portafolio.
      </p>
      <button id="btnCerrar" style="
        width: 100%;
        background: #7c3aed;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 12px 0;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 12px;
      ">Ver mi trabajo →</button>
      <p id="textoCerrar" style="color:#6b7280;font-size:12px;cursor:pointer;margin:0;">
        Quizás más tarde
      </p>
    `;

    overlay.appendChild(tarjeta);
    document.body.style.overflow = "hidden";

    const cerrar = () => {
        overlay.remove();
        document.body.style.overflow = "";
    };

    document.getElementById("btnCerrar").onclick = cerrar;
    document.getElementById("textoCerrar").onclick = cerrar;
    overlay.onclick = (e) => { if (e.target === overlay) cerrar(); };
}

/**
 * Modal específico para la tienda WOLF & COLD
 * Usa la misma lógica de centrado que el portafolio
 */
function initPetsModal() {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0; 
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      padding: 16px;
      box-sizing: border-box;
    `;

    const tarjeta = document.createElement("div");
    tarjeta.style.cssText = `
      background: #1a1a1a;
      border: 1px solid #3a3a3a;
      border-radius: 16px;
      padding: 2rem;
      max-width: 360px;
      width: 100%;
      text-align: center;
      font-family: sans-serif;
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(108, 99, 255, 0.3);
    `;

    tarjeta.innerHTML = `
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:#6c63ff;"></div>
      <div style="width:56px;height:56px;background:#2d2b4a;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0.5rem auto 1rem;">🐾</div>
      <p style="margin:0 0 4px;color:#a78bfa;font-size:13px;font-weight:500;letter-spacing:0.05em;">WOLF & COLD</p>
      <h2 style="margin:0 0 8px;color:#e8e8e8;font-size:20px;font-weight:600;">¡Bienvenido a la tienda!</h2>
      <p style="margin:0 0 1.5rem;color:#999;font-size:14px;line-height:1.6;">
        Encuentra el compañero perfecto y todo lo que necesitas para cuidarlo con amor.
      </p>
      <button id="btnVerMascotas" style="width:100%;background:#6c63ff;color:white;border:none;border-radius:10px;padding:12px 0;font-size:14px;font-weight:500;cursor:pointer;margin-bottom:12px;">Ver mascotas →</button>
      <p id="btnCerrarWolf" style="color:#666;font-size:12px;cursor:pointer;margin:0;">Quizás más tarde</p>
    `;

    document.body.appendChild(overlay);
    overlay.appendChild(tarjeta);
    document.body.style.overflow = "hidden";

    const cerrar = () => {
        overlay.remove();
        document.body.style.overflow = "";
    };

    document.getElementById("btnVerMascotas").onclick = cerrar;
    document.getElementById("btnCerrarWolf").onclick = cerrar;
    overlay.onclick = (e) => { if (e.target === overlay) cerrar(); };
}

// --- Funcionalidad del Menú Hamburguesa ---

// Selecciona los elementos del DOM
const initMobileMenu = () => {
    const menuBurgerButton = document.querySelector('.menuburger button');
    const closeMenuButton = document.querySelector('.cerrar-menu');
    const navElement = document.querySelector('nav') || document.querySelector('.nav-area');

    if (menuBurgerButton && closeMenuButton && navElement) {
        menuBurgerButton.onclick = () => {
            navElement.classList.add('nav-visible');
        };

        closeMenuButton.onclick = () => {
            navElement.classList.remove('nav-visible');
        };

        navElement.querySelectorAll('a').forEach(link => {
            link.onclick = () => navElement.classList.remove('nav-visible');
        });
    }
};

// Llamamos a la función del menú
initMobileMenu();