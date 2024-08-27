class Header {
  static element = document.createElement("div");

  static init() {
    fetch("/html/header.html")
      .then((response) => response.text())
      .then((html) => {
        this.element.innerHTML = html;
        this.setupEventListener();
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

export { Header };
