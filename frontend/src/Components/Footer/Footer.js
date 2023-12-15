const Footer = () => {
  renderFooter();
};

function renderFooter() {
  const footer = document.querySelector('footer');
  footer.innerHTML = `<div class="row">
    <div class="col footerColor py-3 text-center">
      Créé par Robert Ailenei, Laurent Beckman, Flaviu Bilic, Hubert Lopaciuk and Igor Sterniczuk.
    </div>
  </div>`;
}

export default Footer;
