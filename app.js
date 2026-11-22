(() => {
  const content = window.GUIDE_CONTENT;
  const root = document.getElementById("content");
  const nav = document.getElementById("navigation");
  const crumb = document.getElementById("crumb");
  const sideUpdated = document.getElementById("updated-side");
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("scrim");

  sideUpdated.textContent = content.updated || "—";

  function render(pageId) {
    const page = content.pages[pageId] || content.pages.overview;
    root.innerHTML = page.html;
    crumb.textContent = page.crumb || page.title;
    document.title = `${page.title} | HIRO BOT`;
    nav.querySelectorAll(".nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === pageId);
    });
    history.replaceState(null, "", `#${pageId}`);
    sidebar.classList.remove("open");
    scrim.classList.remove("show");
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  window.addEventListener("hashchange", () => {
    const pageId = location.hash.replace("#", "");
    render(content.pages[pageId] ? pageId : "overview");
  });

  nav.addEventListener("click", event => {
    const button = event.target.closest("[data-page]");
    if (button) render(button.dataset.page);
  });

  document.getElementById("menu-toggle").addEventListener("click", () => {
    sidebar.classList.toggle("open");
    scrim.classList.toggle("show");
  });
  scrim.addEventListener("click", () => {
    sidebar.classList.remove("open");
    scrim.classList.remove("show");
  });

  const initial = location.hash.replace("#", "");
  render(content.pages[initial] ? initial : "overview");
})();
