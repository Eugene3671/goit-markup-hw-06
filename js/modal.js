(() => {
  const openModalBtns = document.querySelectorAll("[data-modal-open]");
  const closeModalBtns = document.querySelectorAll("[data-modal-close]");

  openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal-open");
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      modal.classList.add("is-open");
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("[data-modal]");
      modal.classList.remove("is-open");
    });
  });
})();

