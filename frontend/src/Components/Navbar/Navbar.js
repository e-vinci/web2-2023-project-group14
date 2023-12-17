// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
// import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import logoImage from '../../img/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';
import Navigate from '../Router/Navigate';
import { renderImage } from '../../utils/render';
// eslint-disable-next-line no-unused-vars
import { isAuthenticated1, isAuthenticated2, getAuthenticatedUser2, getAuthenticatedUser1 } from '../../utils/auths';
// eslint-disable-next-line import/no-cycle
import Logout1 from '../Logout/Logout1';
// eslint-disable-next-line import/no-cycle
import Logout2 from '../Logout/Logout2';

let username1;
let username2;
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
  const user1=getAuthenticatedUser1();
  if (user1) {
    // eslint-disable-next-line prefer-destructuring
    username1 = user1.username;
    console.log(username1); // Affiche le nom d'utilisateur
  }

  const user2=getAuthenticatedUser2();
  if (user2) {
    // eslint-disable-next-line prefer-destructuring
    username2 = user2.username;
    console.log(username2); // Affiche le nom d'utilisateur
  }
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
                <a class="btn nav-link auth-btn px-3" href="#" data-uri="/login">Login</a>
              </li>   
              <li class="nav-item ms-3">
                <a class="btn nav-link auth-btn me-3 px-3" href="#" data-uri="/register">Register</a>
              </li>                         
            </ul>
          </div>
        </div>
      </nav>
  `;
  const oneLeftUserNavbar = `
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
              <li class="nav-item dropdown">
                <a class="btn nav-link auth-btn px-3 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${username1}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#" data-uri="/logout1">Logout</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#" id="delete1" >Delete Account</a></li>
                </ul>
              </li>   
              <li class="nav-item">
                <a class="btn nav-link auth-btn px-3" href="#" data-uri="/login">Login Player 2</a>
              </li>                        
            </ul>
          </div>
        </div>
      </nav>
  `;
  const oneRightUserNavbar = `
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
              <li class="nav-item dropdown">
                <a class="btn nav-link auth-btn px-3 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${username2}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#" data-uri="/logout2">Logout</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#" id="delete2" >Delete Account</a></li>
                </ul>
              </li>   
              <li class="nav-item">
                <a class="btn nav-link auth-btn px-3" href="#" data-uri="/login">Login Player 1</a>
              </li>                        
            </ul>
          </div>
        </div>
      </nav>
  `;
  const twoUserNavbar = `
  <nav class="navbar navbar-expand-lg navbar-dark footerColor" >
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
          <li class="nav-item dropdown">
            <a class="btn nav-link auth-btn px-3 dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="margin-right: 20px;">
            ${username1}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><a class="dropdown-item" href="#" data-uri="/logout1">Logout</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="# id="delete1">Delete Account</a></li>
            </ul>
          </li>   
          <li class="nav-item dropdown">
            <a class="btn nav-link auth-btn px-3 dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="margin-right: 30px;">
            ${username2}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li><a class="dropdown-item" href="#" data-uri="/logout2">Logout</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" id="delete2">Delete Account</a></li>
            </ul>
          </li>                       
        </ul>
      </div>
    </div>
  </nav>
`;



  if(isAuthenticated1() && isAuthenticated2()){
    navbarWrapper.innerHTML = twoUserNavbar;
  }else if(isAuthenticated1()){
    navbarWrapper.innerHTML = oneLeftUserNavbar;
  }else if(isAuthenticated2()){
    navbarWrapper.innerHTML = oneRightUserNavbar;
  }
  else {
    navbarWrapper.innerHTML = nonAuthUserNavBar;
  }
  renderImage(logoImage, 'logo-img-div', 40, '.logo');

  const logo = document.querySelector('.logo');
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    Navigate('/');
  });

  const deleteAccountButton1 = document.getElementById('delete1');
  if (deleteAccountButton1) {
    deleteAccountButton1.addEventListener('click', () => {
      // Show confirmation dialog
      const confirmDeletion = window.confirm('Are you sure you want to delete your account?');
      if (confirmDeletion) {
        // Invoke the function to delete the account (adjust the function name accordingly)
        deleteAccountFunction(username1);
        Logout1();
      }
    });
  }

  const deleteAccountButton2 = document.getElementById('delete2');
  if (deleteAccountButton2) {
    deleteAccountButton2.addEventListener('click', () => {
      // Show confirmation dialog
      const confirmDeletion = window.confirm('Are you sure you want to delete your account?');
      if (confirmDeletion) {
        // Invoke the function to delete the account (adjust the function name accordingly)
        deleteAccountFunction(username2);
        Logout2();
      }
    });
  }

  function deleteAccountFunction(username) {
    // Perform the deletion logic here, such as making an AJAX request to your server
    // You can use the fetch API or any other method to send a request to your server
    // Example using fetch:
    fetch(`${process.env.API_BASE_URL}/auths/deleteUser/${username}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed (e.g., authentication headers)
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to delete account: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the success response from the server
        console.log('Account deleted successfully', data);
        // Redirect to a new page or perform any other actions
      })
      .catch(error => {
        // Handle errors during the deletion process
        console.error('Error deleting account:', error.message);
        // Display an error message to the user or perform other error-handling actions
      });
  }



}

export default Navbar;
