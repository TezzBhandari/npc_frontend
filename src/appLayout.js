import { Content } from "./appSection/content";
import { Header } from "./appSection/header";
import { Footer } from "./appSection/footer";

class AppLayout {
  static init() {
    const appElement = document.getElementById("app");
    if (appElement !== null) {
      appElement.appendChild(Header.init());
      appElement.appendChild(Content.init());
      appElement.appendChild(Footer.init());
    }
  }
}

export { AppLayout };
