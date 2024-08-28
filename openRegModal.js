document.addEventListener("DOMContentLoaded", () => {
  const regToggle = document.getElementById("reg-toggle");
  const regModal = document.getElementById("reg-modal");
  regToggle.addEventListener("click", () => {
    const visible = regModal.getAttribute("data-visible");
    if (visible === null) {
      regModal.setAttribute("data-visible", "true");
      regModal.style.transform = "translateX(0)";
    } else {
      regModal.removeAttribute("data-visible");
      regModal.style.transform = "translateX(100.1%)";
    }
  });
});
