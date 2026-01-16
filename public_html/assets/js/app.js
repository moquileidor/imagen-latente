window.App = (() => {
  function initNav() {
    const menuBtn = document.getElementById("menuBtn");
    const menuIcon = document.getElementById("menuIcon");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu && menuIcon) {
      menuBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.toggle("hidden");
        menuBtn.setAttribute("aria-expanded", !isHidden);
        menuIcon.textContent = isHidden ? "☰" : "✕";
      });

      mobileMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          menuBtn.setAttribute("aria-expanded", "false");
          menuIcon.textContent = "☰";
        });
      });
    }

    // Smooth scroll with navbar offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#inicio') return; // Skip empty or home links

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80; // navbar height
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      });
    });
  }

  function initFooterYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const whatsapp = form.whatsapp.value.trim();
    const type = form.type.value;
    const priority = form.priority.value;
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`[${priority.toUpperCase()}] Solicitud de ${type} — Imagen Latente`);
    const body = encodeURIComponent(
      `Nombre/Medio: ${name}\n` +
      `Email: ${email}\n` +
      `WhatsApp: ${whatsapp}\n` +
      `Tipo de Solicitud: ${type}\n` +
      `Prioridad: ${priority}\n\n` +
      `Detalle del Evento / ID de Foto:\n${message}\n`
    );

    // En Fase 1: mailto simple
    const to = "ariel@example.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    // Feedback visual simple
    alert("Se ha abierto tu cliente de correo con la solicitud. ¡Gracias!");
    return false;
  }

  function init() {
    initNav();
    initFooterYear();
  }

  return { init, handleContactSubmit };
})();

document.addEventListener("DOMContentLoaded", () => window.App.init());
