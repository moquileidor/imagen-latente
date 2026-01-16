(() => {
  const grid = document.getElementById("galleryGrid");
  const status = document.getElementById("galleryStatus");

  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");

  let images = [];
  let filtered = [];
  let currentIndex = 0;
  let activeFilter = "all";

  function setStatus(text) {
    if (status) status.textContent = text;
  }

  async function loadImages() {
    try {
      setStatus("Cargando galería...");
      const res = await fetch("data/images.json", { cache: "no-store" });
      if (!res.ok) throw new Error("No se pudo cargar images.json");
      images = await res.json();
      applyFilter(activeFilter);
      setStatus(`${filtered.length} fotos`);
    } catch (err) {
      console.error(err);
      setStatus("Error cargando la galería. Revisa data/images.json");
    }
  }

  function applyFilter(filter, query = "") {
    activeFilter = filter;
    const q = query.toLowerCase().trim();

    filtered = images.filter((img) => {
      const matchFilter = filter === "all" || (img.category || "").toLowerCase() === filter;
      const matchQuery = !q ||
        (img.title || "").toLowerCase().includes(q) ||
        (img.category || "").toLowerCase().includes(q);
      return matchFilter && matchQuery;
    });

    render();
    setStatus(`${filtered.length} resultados`);
  }

  function render() {
    if (!grid) return;
    grid.innerHTML = "";

    filtered.forEach((img, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5";
      card.dataset.index = String(idx);

      card.innerHTML = `
        <img
          src="${img.thumb || img.url}"
          alt="${escapeHtml(img.title || "Fotografía")}"
          class="h-64 w-full object-cover transition duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition"></div>
        <div class="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition">
          <div class="text-white font-semibold text-sm">${escapeHtml(img.title || "")}</div>
          <div class="text-zinc-300 text-xs">${escapeHtml(img.category || "")}</div>
        </div>
      `;

      card.addEventListener("click", () => openLightbox(idx));
      grid.appendChild(card);
    });
  }

  function openLightbox(index) {
    if (!filtered.length) return;
    currentIndex = index;

    updateLightbox();
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    document.body.style.overflow = "";
  }

  function updateLightbox() {
    const img = filtered[currentIndex];
    if (!img) return;

    lbImg.src = img.url;
    lbCaption.textContent = img.title || "";
  }

  function next() {
    currentIndex = (currentIndex + 1) % filtered.length;
    updateLightbox();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    updateLightbox();
  }

  function escapeHtml(str) {
    return String(str || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function initSearch() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        applyFilter(activeFilter, e.target.value);
      });
    }
  }

  function initFilters() {
    document.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach(b => {
          b.classList.remove("bg-cyan-600", "text-black");
          b.classList.add("bg-zinc-900", "text-zinc-400");
        });
        btn.classList.add("bg-cyan-600", "text-black");
        btn.classList.remove("bg-zinc-900", "text-zinc-400");

        const searchInput = document.getElementById("searchInput");
        applyFilter(btn.dataset.filter, searchInput ? searchInput.value : "");
      });
    });
  }

  function initLightboxControls() {
    lbClose.addEventListener("click", closeLightbox);
    lbNext.addEventListener("click", next);
    lbPrev.addEventListener("click", prev);

    // Click fuera de la imagen cierra
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Teclado
    document.addEventListener("keydown", (e) => {
      if (lightbox.classList.contains("hidden")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    if (!grid) return;

    initFilters();
    initSearch();
    initLightboxControls();
    await loadImages();
  });
})();
