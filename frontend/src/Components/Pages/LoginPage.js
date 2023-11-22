import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const LoginPage = () => {
  clearPage();
  renderLoginForm();
};

function renderLoginForm() {
  const main = document.querySelector('main');
  
  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'h-100 backgroundLogin';

  const loginWrapper = document.createElement('div');
  loginWrapper.className = 'd-flex justify-content-center align-items-center h-75 pt-5 backgroundLogin';
  const formWrapper = document.createElement('div');
  formWrapper.className = 'container border border-3 border-dark rounded-5 w-50 footerColor formDiv mt-5';
  const formTop = document.createElement('div');
  formTop.className = 'form-top border-bottom border-2 border-dark w-100';
  const formTopDiv = document.createElement('div');
  const formTopTitle = document.createElement('h1');
  formTopDiv.className = 'text-center p-3 ';
  formTopTitle.innerHTML = 'Connexion';

  const formBottom = document.createElement('div');
  formBottom.className = 'form-bottom w-100 p-3 ';

  const form = document.createElement('form');
  form.className = 'mb-1';

  const usernameDiv = document.createElement('div');
  usernameDiv.className = 'mb-4 mx-4';

  const usernameLabel = document.createElement('label');
  usernameLabel.className = 'form-label ps-1';
  usernameLabel.htmlFor = 'username';
  usernameLabel.innerHTML = "Nom d'utilisateur";

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = "nom d'utilisateur";
  username.required = true;
  username.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

  const passwordDiv = document.createElement('div');
  passwordDiv.className = 'mb-4 mx-4';

  const passwordLabel = document.createElement('label');
  passwordLabel.className = 'form-label ps-1';
  passwordLabel.htmlFor = 'password';
  passwordLabel.innerHTML = 'Mot de passe';

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'mot de passe';
  password.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

  const submitDiv = document.createElement('div');
  submitDiv.className = 'text-center mb-4';
  const submit = document.createElement('input');
  submit.value = 'Se connecter';
  submit.type = 'submit';
  submit.className = 'btn btn-dark';

  const noAccountDiv = document.createElement('div');
  const noAccountP = document.createElement('p');
  noAccountDiv.className = 'text-center';
  noAccountDiv.innerHTML = `Pas encore de compte? <a href="/register">Inscrivez-vous</a>`;

  usernameDiv.appendChild(usernameLabel);
  usernameDiv.appendChild(username);

  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(password);

  submitDiv.appendChild(submit);

  form.appendChild(usernameDiv);
  form.appendChild(passwordDiv);
  form.appendChild(submitDiv);

  noAccountDiv.appendChild(noAccountP);

  formBottom.appendChild(form);
  formBottom.appendChild(noAccountDiv);

  formTopDiv.appendChild(formTopTitle);

  formTop.appendChild(formTopDiv);

  formWrapper.appendChild(formTop);
  formWrapper.appendChild(formBottom);

  loginWrapper.appendChild(formWrapper);

  backgroundDiv.appendChild(loginWrapper);

  main.appendChild(backgroundDiv);

  submit.addEventListener('click', () => {
    Navigate('/');
  });
}

export default LoginPage;
