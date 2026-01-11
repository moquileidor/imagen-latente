window.App = (() => {
  function initNav() {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      mobileMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      });
    }
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
