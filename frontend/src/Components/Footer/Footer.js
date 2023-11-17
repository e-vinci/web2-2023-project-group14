const Footer = () => {
  renderFooter();
};

function renderFooter() {
  const footer = document.querySelector('footer');
  footer.innerHTML = `<div class="row">
    <div class="col footerColor py-3 text-center">
      Créé par Hubert Lopaciuk, Igor Sterniczuk, Robert Ailenei, Flaviu Bilic et Laurent
      Beckman.
    </div>
  </div>`;
}

export default Footer;
