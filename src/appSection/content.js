class Content {
  static element = document.createElement("main");

  static init() {
    fetch("/html/hero.html")
      .then((response) => response.text())
      .then((html) => {
        this.element.innerHTML = html;
      });
    return this.element;
  }

  static innerElements() {
    return {
      hambugerIcon: document.getElementById("hamburger"),
      crossIcon: document.getElementById("cross"),
    };
  }

  static setupEventListener() {
    const innerElements = this.innerElements();
    innerElements.hambugerIcon.addEventListener("click", () => {
      innerElements.hambugerIcon.style.display = "none";
    });
  }
}

export { Content };
