import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const RegisterPage = () => {
  clearPage();
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');

  const registerWrapper = document.createElement('div');
  registerWrapper.className = 'd-flex justify-content-center align-items-center h-75 mt-5 pt-5';
  const formWrapper = document.createElement('div');
  formWrapper.className = 'container border border-3 border-dark rounded-5 w-50 footerColor';
  const formTop = document.createElement('div');
  formTop.className = 'form-top border-bottom border-2 border-dark w-100';
  const formTopDiv = document.createElement('div');
  const formTopTitle = document.createElement('h1');
  formTopDiv.className = 'text-center p-3 ';
  formTopTitle.innerHTML = 'Inscription';

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

  const passwordConfDiv = document.createElement('div');
  passwordConfDiv.className = 'mb-4 mx-4';

  const passwordConfLabel = document.createElement('label');
  passwordConfLabel.className = 'form-label ps-1';
  passwordConfLabel.htmlFor = 'passwordConf';
  passwordConfLabel.innerHTML = 'Confirmation de mot de passe';

  const passwordConf = document.createElement('input');
  passwordConf.type = 'password';
  passwordConf.id = 'passwordConf';
  passwordConf.required = true;
  passwordConf.placeholder = 'confirmation de mot de passe';
  passwordConf.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

  const submitDiv = document.createElement('div');
  submitDiv.className = 'text-center mb-4';
  const submit = document.createElement('input');
  submit.value = "S'inscrire";
  submit.type = 'submit';
  submit.className = 'btn btn-dark';

  const alreadyAccountDiv = document.createElement('div');
  const alreadyAccountP = document.createElement('p');
  alreadyAccountDiv.className = 'text-center';
  alreadyAccountDiv.innerHTML = `Déjà un compte? <a href="/login">Connectez-vous</a>`;

  usernameDiv.appendChild(usernameLabel);
  usernameDiv.appendChild(username);

  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(password);

  passwordConfDiv.appendChild(passwordConfLabel);
  passwordConfDiv.appendChild(passwordConf);

  submitDiv.appendChild(submit);

  form.appendChild(usernameDiv);
  form.appendChild(passwordDiv);
  form.appendChild(passwordConfDiv);
  form.appendChild(submitDiv);

  alreadyAccountDiv.appendChild(alreadyAccountP);

  formBottom.appendChild(form);
  formBottom.appendChild(alreadyAccountDiv);

  formTopDiv.appendChild(formTopTitle);

  formTop.appendChild(formTopDiv);

  formWrapper.appendChild(formTop);
  formWrapper.appendChild(formBottom);

  registerWrapper.appendChild(formWrapper);

  main.appendChild(registerWrapper);

  submit.addEventListener('click', () => {
    Navigate('/');
  });
}

export default RegisterPage;
