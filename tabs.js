document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll("#tab");
  const tabContent = document.querySelectorAll("#tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      tabButtons.forEach((btn) => btn.classList.remove("tab-active"));
      this.classList.add("tab-active");

      tabContent.forEach((section) => {
        const contentTarget = section.getAttribute("data-target");
        if (contentTarget === target) {
          section.classList.add("tab-content-active");
        } else {
          section.classList.remove("tab-content-active");
        }
      });
    });
  });
});
