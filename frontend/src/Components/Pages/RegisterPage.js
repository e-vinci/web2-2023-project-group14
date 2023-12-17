// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
// eslint-disable-next-line no-unused-vars
import { setAuthenticatedUser1, setAuthenticatedUser2, clearAuthenticatedUser1, clearAuthenticatedUser2, getAuthenticatedUser1, isAuthenticated1 } from '../../utils/auths';
import Navigate from '../Router/Navigate';
import Navbar from '../Navbar/Navbar';
// eslint-disable-next-line no-unused-vars
import { checkRegistrationPassword, checkRegistrationPassword2, checkRegistrationUsername } from '../../utils/validator';
import {initializeGdpr, renderGdpr} from '../../utils/gdprUtils';

const RegisterPage = () => {
    clearPage();
    renderRegisterForm();
};

// TODO refactor le texte affiché sur la page en anglais stp

async function renderRegisterForm() {
  const tak = getAuthenticatedUser1();
  console.log('dsadas: ', tak)
  Navbar();
  const main = document.querySelector('main');

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'h-100 backgroundLogin';
  backgroundDiv.id = 'containerGdpr';

  setTimeout(() => {
    initializeGdpr('#containerGdpr');
   }, 0);

  const registerWrapper = document.createElement('div');
  registerWrapper.className = 'd-flex justify-content-center align-items-center h-75 pt-5 backgroundLogin';
  const formWrapper = document.createElement('div');
  formWrapper.className = 'container border border-3 border-dark rounded-5 w-50 footerColor mt-5 formDiv';
  const formTop = document.createElement('div');
  formTop.className = 'form-top border-bottom border-2 border-dark w-100';
  const formTopDiv = document.createElement('div');
  const formTopTitle = document.createElement('h1');
  formTopDiv.className = 'text-center p-3 ';
  formTopTitle.innerHTML = 'Register';

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
  usernameLabel.innerHTML = "Username";

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = "username";
  username.required = true;
  username.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

  const passwordDiv = document.createElement('div');
  passwordDiv.className = 'mb-4 mx-4';

  const passwordLabel = document.createElement('label');
  passwordLabel.className = 'form-label ps-1';
  passwordLabel.htmlFor = 'password';
  passwordLabel.innerHTML = 'Password';

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'password';
  password.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

  const passwordConfDiv = document.createElement('div');
  passwordConfDiv.className = 'mb-4 mx-4';

  const passwordConfLabel = document.createElement('label');
  passwordConfLabel.className = 'form-label ps-1';
  passwordConfLabel.htmlFor = 'passwordConf';
  passwordConfLabel.innerHTML = 'Password Confirmation';

  const passwordConf = document.createElement('input');
  passwordConf.type = 'password';
  passwordConf.id = 'passwordConf';
  passwordConf.required = true;
  passwordConf.placeholder = 'password confirmation';
  passwordConf.className = 'form-control mb-3 border border-3 rounded-3 border-dark';

  const submitDiv = document.createElement('div');
  submitDiv.className = 'text-center mb-4';
  const submit = document.createElement('input');
  submit.value = "Register";
  submit.type = 'submit';
  submit.className = 'btn btn-dark';

  const alreadyAccountDiv = document.createElement('div');
  const alreadyAccountP = document.createElement('p');
  alreadyAccountDiv.className = 'text-center';
  alreadyAccountDiv.innerHTML = `Already have an account? <a href="/login">Login now</a>
  <br>Read our  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> confidentiality policy</a>`;

  backgroundDiv.appendChild(renderGdpr());

  const validationErrorDiv = document.createElement('div');
  const validationErrorP = document.createElement('div');
  validationErrorDiv.className = "validation-error-div";
  validationErrorP.className = "validation-error-p";

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
  validationErrorDiv.appendChild(validationErrorP);

  formBottom.appendChild(form);
  formBottom.appendChild(alreadyAccountDiv);
  formBottom.appendChild(validationErrorDiv);

  formTopDiv.appendChild(formTopTitle);

  formTop.appendChild(formTopDiv);

  formWrapper.appendChild(formTop);
  formWrapper.appendChild(formBottom);

  registerWrapper.appendChild(formWrapper);

  backgroundDiv.appendChild(registerWrapper);

  main.appendChild(backgroundDiv);

  form.addEventListener('submit', onRegister);

  // adding confirmation text to the dom for confiramtion
  const confEmailFeedback = document.createElement('div');
  confEmailFeedback.className = 'testAPI my-5'
  backgroundDiv.appendChild(confEmailFeedback);




  };

  /* submit.addEventListener('click', async () => {
    // event.preventDefault(); // I think this is needed; if not, the page refreshes itself and wipes out the response
    // creating the new user object to send for verification to the backend
    const formInfos = document.querySelector('form'); // added for the new approach
    const newUserData = {
      newUserEmail : formInfos.elements.userEmail.value,
      newUserName : formInfos.elements.username.value,
      newUserPassword : formInfos.elements.password.value,
      newUserConfirmedPassword : formInfos.elements.passwordConf.value
    }
  
    try {
      const response = await fetch (`${process.env.API_BASE_URL}/auths/registerTestEmailAPI`, {
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
        
      }
    } catch (err) {
      console.error('RegisterPage::error: ', err);
    }
    onRegister();
    });
*/
/*
    username.addEventListener('input', debounce(async () =>  {
      const registerFormGroup1 = username.parentElement.parentElement;
      const usernameSmall = document.querySelector('.username-small')

      if (username.value.trim() === '') {
        registerFormGroup1.className = "register-form-group failure";
        usernameSmall.innerHTML = "Veuillez introduire un nom d'utilisateur";
      } else {
        const response = await fetch(`${process.env.API_BASE_URL}/users/${username.value}`);
        if (response.ok) {
          registerFormGroup1.className = "register-form-group failure";
          usernameSmall.innerHTML = "Nom d'utilisateur déjà existant";
          usernameValid = false;
        } else {
          const { errors, isValid } = checkRegistrationUsername(username.value);
          if (!isValid) {
            registerFormGroup1.className = "register-form-group failure";
            usernameSmall.innerHTML = `${errors}`;
            usernameValid = false;
          } else {
            registerFormGroup1.className = "register-form-group success";
            usernameSmall.innerHTML = "Nom d'utilisateur disponible";
            usernameValid = true;
          }
          
        }
      }
    }, 1000));
*/

    async function onRegister(e) {
      e.preventDefault();
      const formInfos = document.querySelector('form'); // added for the new approach
      const newUserData = {
        newUserEmail : formInfos.elements.userEmail.value,
        newUserName : formInfos.elements.username.value,
        newUserPassword : formInfos.elements.password.value,
      }

      try {
      const response = await fetch (`${process.env.API_BASE_URL}/auths/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
      });
  
      console.log('Newly registered & authenticated user :');

  
      if (!response.ok) throw new Error(`fetch error : ${response.status} : dsadsa ${response.statusText}`);
      const authenticatedUser = await response.json();
      if(isAuthenticated1()){
        setAuthenticatedUser2(authenticatedUser);
      } else {
        setAuthenticatedUser1(authenticatedUser);
      }

      console.log('Newly registered & authenticated user : ', authenticatedUser);
    }
    catch (err) {
      console.error('RegisterPage::error: ', err);
    }
      // eslint-disable-next-line no-console
      Navbar();

      Navigate('/');
    }

export default RegisterPage;
