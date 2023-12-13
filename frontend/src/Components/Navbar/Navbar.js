// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
// import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import logoImage from '../../img/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';
import Navigate from '../Router/Navigate';
import { renderImage } from '../../utils/render';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  renderNavbar();
};

function renderNavbar() {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const nonAuthUserNavBar = `
  <nav class="navbar navbar-expand-lg navbar-dark footerColor">
        <div class="container-fluid navbar-container">
          <a class="navbar-brand d-flex align-itms-center" href="#" data-uri="/"> 
          <div class="logo ms-3 me-1"></div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-uri="/game">Game</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-uri="/ranking">Ranking</a>
                </li>          
                <li class="nav-item">
                  <a class="nav-link" href="#" data-uri="/resource">Resource Hub</a>
                </li>                       
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="btn nav-link auth-btn px-3" href="#" data-uri="/login">Se connecter</a>
              </li>   
              <li class="nav-item ms-3">
                <a class="btn nav-link auth-btn me-3 px-3" href="#" data-uri="/register">S'inscrire</a>
              </li>                         
            </ul>
          </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = nonAuthUserNavBar;
  renderImage(logoImage, 'logo-img-div', 40, '.logo');

  const logo = document.querySelector('.logo');
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    Navigate('/');
  });
}

export default Navbar;
