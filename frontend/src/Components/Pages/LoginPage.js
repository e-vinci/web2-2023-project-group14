import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const J1connected = false;
const J2connected = true; // A FAIRE ajouter la logique des users
// ainsi que les eventListener plus bas sur les submit
// et encore d'autres trucs surement

const LoginPage = () => {
  clearPage();
  renderLoginForm();
};

function renderLoginForm() {
  const main = document.querySelector('main');

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'h-100 backgroundLogin d-flex';

  // Div pour la partie gauche
  if (J1connected) {
    const leftSection = document.createElement('div');
    leftSection.className =
      'd-flex justify-content-center align-items-center w-50 pt-5 ';

    const formWrapper2 = document.createElement('div');
    formWrapper2.className =
      'container border border-3 border-dark rounded-5 w-75 footerColor formDiv mt-5';

    const formTop2 = document.createElement('div');
    formTop2.className = 'form-top border-bottom border-2 border-dark w-100';
    const formTopDiv2 = document.createElement('div');
    formTopDiv2.className = 'text-center p-3 ';
    const formTopTitle2 = document.createElement('h1');
    formTopTitle2.innerHTML = 'Joueur 1 est connecté'; // mettre le nom du joueur

    const formBottom2 = document.createElement('div');
    formBottom2.className = 'form-bottom w-100 p-3 ';

    const form2 = document.createElement('form');
    form2.className = 'mb-1';

    const submitDiv2 = document.createElement('div');
    submitDiv2.className = 'text-center mb-4';
    const submit2 = document.createElement('input');
    submit2.value = 'Se déconnecter';
    submit2.type = 'submit';
    submit2.className = 'btn btn-dark';

    submitDiv2.appendChild(submit2);

    form2.appendChild(submitDiv2);

    formBottom2.appendChild(form2);

    formTopDiv2.appendChild(formTopTitle2);

    formTop2.appendChild(formTopDiv2);

    formWrapper2.appendChild(formTop2);
    formWrapper2.appendChild(formBottom2);

    leftSection.appendChild(formWrapper2);

    submit2.addEventListener('click', () => {
      Navigate('/');
    });

    backgroundDiv.appendChild(leftSection);
  } else {
    const leftSection = document.createElement('div');
    leftSection.className =
      'd-flex justify-content-center align-items-center w-50 pt-5';

    const formWrapper2 = document.createElement('div');
    formWrapper2.className =
      'container border border-3 border-dark rounded-5 w-75 footerColor formDiv mt-5';

    const formTop2 = document.createElement('div');
    formTop2.className = 'form-top border-bottom border-2 border-dark w-100';
    const formTopDiv2 = document.createElement('div');
    formTopDiv2.className = 'text-center p-3 ';
    const formTopTitle2 = document.createElement('h1');
    formTopTitle2.innerHTML = 'Connexion Joueur 1';

    const formBottom2 = document.createElement('div');
    formBottom2.className = 'form-bottom w-100 p-3 ';

    const form2 = document.createElement('form');
    form2.className = 'mb-1';

    const usernameDiv2 = document.createElement('div');
    usernameDiv2.className = 'mb-4 mx-4';

    const usernameLabel2 = document.createElement('label');
    usernameLabel2.className = 'form-label ps-1';
    usernameLabel2.htmlFor = 'username';
    usernameLabel2.innerHTML = "Nom d'utilisateur";

    const username2 = document.createElement('input');
    username2.type = 'text';
    username2.id = 'username';
    username2.placeholder = "nom d'utilisateur";
    username2.required = true;
    username2.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

    const passwordDiv2 = document.createElement('div');
    passwordDiv2.className = 'mb-4 mx-4';

    const passwordLabel2 = document.createElement('label');
    passwordLabel2.className = 'form-label ps-1';
    passwordLabel2.htmlFor = 'password';
    passwordLabel2.innerHTML = 'Mot de passe';

    const password2 = document.createElement('input');
    password2.type = 'password';
    password2.id = 'password';
    password2.required = true;
    password2.placeholder = 'mot de passe';
    password2.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

    const submitDiv2 = document.createElement('div');
    submitDiv2.className = 'text-center mb-4';
    const submit2 = document.createElement('input');
    submit2.value = 'Se connecter';
    submit2.type = 'submit';
    submit2.className = 'btn btn-dark';

    const noAccountDiv2 = document.createElement('div');
    const noAccountP2 = document.createElement('p');
    noAccountDiv2.className = 'text-center';
    noAccountDiv2.innerHTML = `Pas encore de compte? <a href="/register">Inscrivez-vous</a>`;

    usernameDiv2.appendChild(usernameLabel2);
    usernameDiv2.appendChild(username2);

    passwordDiv2.appendChild(passwordLabel2);
    passwordDiv2.appendChild(password2);

    submitDiv2.appendChild(submit2);

    form2.appendChild(usernameDiv2);
    form2.appendChild(passwordDiv2);
    form2.appendChild(submitDiv2);

    noAccountDiv2.appendChild(noAccountP2);

    formBottom2.appendChild(form2);
    formBottom2.appendChild(noAccountDiv2);

    formTopDiv2.appendChild(formTopTitle2);

    formTop2.appendChild(formTopDiv2);

    formWrapper2.appendChild(formTop2);
    formWrapper2.appendChild(formBottom2);

    leftSection.appendChild(formWrapper2);

    submit2.addEventListener('click', () => {
      Navigate('/');
    });

    backgroundDiv.appendChild(leftSection);
  }

  // Div pour la partie droite avec le formulaire

  if (J2connected) {
    const rightSection = document.createElement('div');
    rightSection.className =
      'd-flex justify-content-center align-items-center w-50 pt-5 ';

    const formWrapper = document.createElement('div');
    formWrapper.className =
      'container border border-3 border-dark rounded-5 w-75 footerColor formDiv mt-5';

    const formTop = document.createElement('div');
    formTop.className = 'form-top border-bottom border-2 border-dark w-100';
    const formTopDiv = document.createElement('div');
    formTopDiv.className = 'text-center p-3 ';
    const formTopTitle = document.createElement('h1');
    formTopTitle.innerHTML = 'Joueur 2 est connecté'; // mettre le nom du user

    const formBottom = document.createElement('div');
    formBottom.className = 'form-bottom w-100 p-3 ';

    const form = document.createElement('form');
    form.className = 'mb-1';

    const submitDiv = document.createElement('div');
    submitDiv.className = 'text-center mb-4';
    const submit = document.createElement('input');
    submit.value = 'Se déconnecter';
    submit.type = 'submit';
    submit.className = 'btn btn-dark';

    submitDiv.appendChild(submit);

    form.appendChild(submitDiv);

    formBottom.appendChild(form);

    formTopDiv.appendChild(formTopTitle);

    formTop.appendChild(formTopDiv);

    formWrapper.appendChild(formTop);
    formWrapper.appendChild(formBottom);

    rightSection.appendChild(formWrapper);

    submit.addEventListener('click', () => {
      Navigate('/');
    });

    backgroundDiv.appendChild(rightSection);
  } else {
    const rightSection = document.createElement('div');
    rightSection.className =
      'd-flex justify-content-center align-items-center w-50 pt-5 ';

    const formWrapper = document.createElement('div');
    formWrapper.className =
      'container border border-3 border-dark rounded-5 w-75 footerColor formDiv mt-5';

    const formTop = document.createElement('div');
    formTop.className = 'form-top border-bottom border-2 border-dark w-100';
    const formTopDiv = document.createElement('div');
    formTopDiv.className = 'text-center p-3 ';
    const formTopTitle = document.createElement('h1');
    formTopTitle.innerHTML = 'Connexion Joueur 2';

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

    rightSection.appendChild(formWrapper);

    backgroundDiv.appendChild(rightSection);

    submit.addEventListener('click', () => {
      Navigate('/');
    });
  }
  main.appendChild(backgroundDiv);
}

export default LoginPage;
