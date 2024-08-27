class Footer {
  static element = document.createElement("div");

  static init() {
    fetch("/html/footer.html")
      .then((response) => response.text())
      .then((html) => {
        this.element.innerHTML = html;
      });
    return this.element;
  }
}

export { Footer };
