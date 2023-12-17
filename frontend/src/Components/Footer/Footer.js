import { renderGdpr } from "../../utils/gdprUtils";

const Footer = () => {
  renderFooter();
};

function renderFooter() {
  const footer = document.querySelector('footer');
  footer.innerHTML = `<div class="row">
    <div class="col footerColor py-3 text-center">
      Créé par Robert Ailenei, Laurent Beckman, Flaviu Bilic, Hubert Lopaciuk and Igor Sterniczuk<br>Read our  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">confidentiality policy</a>.
    </div>
  </div>`;

  footer.appendChild(renderGdpr());
}

export default Footer;
