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
    const message = form.message.value.trim();

    const subject = encodeURIComponent("Consulta — Imagen Latente");
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}\n`
    );

    // En Fase 1: mailto simple (cambia el correo destino si Ariel te lo da)
    const to = "ariel@example.com"; // TODO: reemplazar por correo real si lo entrega
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    return false;
  }

  function init() {
    initNav();
    initFooterYear();
  }

  return { init, handleContactSubmit };
})();

document.addEventListener("DOMContentLoaded", () => window.App.init());
