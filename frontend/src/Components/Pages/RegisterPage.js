// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const RegisterPage = async () => {
    clearPage();
    renderRegisterForm();
};

// TODO refactor le texte affiché sur la page en anglais stp

async function renderRegisterForm() {

  const main = document.querySelector('main');

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'h-100 backgroundLogin';

  const registerWrapper = document.createElement('div');
  registerWrapper.className = 'd-flex justify-content-center align-items-center h-75 pt-5 backgroundLogin';
  const formWrapper = document.createElement('div');
  formWrapper.className = 'container border border-3 border-dark rounded-5 w-50 footerColor mt-5 formDiv';
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

  const userEmailDiv = document.createElement('div');
  userEmailDiv.className = 'mb-4 mx-4';

  const userEmailLabel = document.createElement('label');
  userEmailLabel.className = 'form-label ps-1';
  userEmailLabel.htmlFor = 'userEmail';
  userEmailLabel.innerHTML = "User email";

  const userEmail = document.createElement('input');
  userEmail.type = 'text';
  userEmail.id = 'userEmail';
  userEmail.placeholder = "user email";
  userEmail.required = true;
  userEmail.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

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

  userEmailDiv.appendChild(userEmailLabel);
  userEmailDiv.appendChild(userEmail);

  usernameDiv.appendChild(usernameLabel);
  usernameDiv.appendChild(username);

  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(password);

  passwordConfDiv.appendChild(passwordConfLabel);
  passwordConfDiv.appendChild(passwordConf);

  submitDiv.appendChild(submit);

  form.appendChild(userEmailDiv);
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

  backgroundDiv.appendChild(registerWrapper);

  main.appendChild(backgroundDiv);

  // adding confirmation text to the dom for confiramtion
  const confEmailFeedback = document.createElement('div');
  confEmailFeedback.className = 'testAPI my-5'
  backgroundDiv.appendChild(confEmailFeedback);

  submit.addEventListener('click', async (event) => {
    // creating the new user object to send for verification to the backend

    event.preventDefault(); // I think this is needed; if not, the page refreshes itself and wipes out the response

    const newUserData = {
      /*
      newUserEmail: document.getElementById(userEmail).value,
      newUserName: document.getElementById(username).value,
      newUserPassword: document.getElementById(password).value,
      newUserConfirmedPassword: document.getElementById(passwordConf).value
      */
     // test with hardcoded values
      newUserEmail: "flaviubilic@gmail.com",
      newUserName: "flaviu",
      newUserPassword: "flaviu123",
      newUserConfirmedPassword: "flaviu123"
    }
    console.log("checking if values are null here but i don t think so");
    try {
      const response = await fetch ('/api/auths/registerTestEmailAPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)

      });
    
      if (response.ok) {
        const responseData = await response.json();
        confEmailFeedback.innerHTML = JSON.stringify(responseData);
        console.log('Registration successful: ', responseData);
        // Navigate('/'); // just a placeholder currently
        
      } else {
        confEmailFeedback.innerHTML = "Okay so it didn t work but it should have";
        console.log("The email is invalid!");
      }

    } catch (err) {
      console.error('RegisterPage::error: ', err);
    }
  });
}

export default RegisterPage;
