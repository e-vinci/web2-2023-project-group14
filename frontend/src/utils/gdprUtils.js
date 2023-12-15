import { Modal } from "bootstrap";

const STORE_NAME = 'userGdpr';

const getUserSessionData = () => {
  const retrievedUser = localStorage.getItem(STORE_NAME);
  if (!retrievedUser) return undefined;
  return JSON.parse(retrievedUser);
};

const setUserSessionData = () => {
  const agreement = {
    hasSeenGdpr: false
  };
  const storageValue = JSON.stringify(agreement);
  localStorage.setItem(STORE_NAME, storageValue);
};

const renderGdpr = () => {
    const modalGdpr = document.createElement('div');
    modalGdpr.id = "gdprModal"
  
    modalGdpr.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div class="modal-dialog modal-xl">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Privacy Policy for Armada Assault (GDPR)</h5>
          </div>
          <div class="modal-body">
            <h4>1. Introduction</h4>
            
            <p>We are committed to respecting and protecting your online privacy. This Privacy Policy outlines the information we collect and how we use that information.</p>
            
            <h4>2. Data We Collect</h4>
            
            <p>When creating an account on our website, we require the following information:</p>
              <ul>
                <li>Email address</li>
                <li>Username</li>
                <li>Login credentials</li>
              </ul>
            
            <p>We also store the following data related to your activities on our website:</p>
              <ul>
                <li>Wins and losses</li>
                <li>Ranking points</li>
              </ul>
            
            <p>Based on this data, we assign players a rank.<p>
            
            <h4>3. How We Use Your Data</h4>
            
            <p>The data we collect is used to provide and improve our services, and to offer a personalized gaming experience. We do not share your personal data with third parties.</p>
            
            <h4>4. Your Rights Under the GDPR</h4>
            
            <p>As per the General Data Protection Regulation (GDPR), you have the right to access, rectify, and delete your personal data.<p>
            
            <h4> 5. Non-Registered Users </h4>
            
            <p>If you do not register or log in, we do not collect any data and the game does not save any score.<p>
            
            <h4> 6. Contact Us </h4>
            
            <p>If you have any questions about this Privacy Policy, please contact us at flaviu.bilic@student.vinci.be.<p>
            
            <h4>7. Changes to This Privacy Policy</h4>
            
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          </div>
          <div class="modal-footer">
            <button id="myBtnGdpr" type="button" class="btn btn-secondary" data-bs-dismiss="modal">I understand</button>
          </div>
        </div>
      </div>
    </div>`
  
    return modalGdpr;
  }

const initializeGdpr = (containerSelector) => {
let userData = getUserSessionData();

if (!userData) {
    setUserSessionData();
    userData = getUserSessionData();
}

if (userData && userData.hasSeenGdpr === false) {
    const container = document.querySelector(containerSelector);
    if (container) {
    container.appendChild(renderGdpr());

    setTimeout(() => {
        const buttonGdpr = document.getElementById("myBtnGdpr");
        if (buttonGdpr) {
        buttonGdpr.addEventListener("click", () => {
            userData.hasSeenGdpr = true;
            localStorage.setItem(STORE_NAME, JSON.stringify(userData));
            const gdprModal = document.getElementById("gdprModal");
            if (gdprModal) {
            gdprModal.remove();
            }
        });
        setTimeout(() => {
            const myModal = new Modal(document.getElementById('exampleModal'));
            myModal.show();
        }, 1500);
        

        } else {
        console.log("Button with id 'myBtnGdpr' was not found in the DOM.");
        }
    }, 0);
    } else {
    console.log("Container not found.");
    }
}
};
  
  export default initializeGdpr;