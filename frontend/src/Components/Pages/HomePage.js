import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import playNowImage from '../../assets/PlayNow.png';

const HomePage = () => {
  clearPage();

  // Get the main element
  const main = document.querySelector('main');


  // Create an image element for the "Play Now" button
  const playNowButton = document.createElement('img');
  // Use the imported image path
  playNowButton.src = playNowImage;
  playNowButton.alt = 'Play Now';
  playNowButton.className = 'play-now-button';

  // Add a cursor style to the button
  playNowButton.style.cursor = 'pointer';

  playNowButton.addEventListener('click', () => {
    // Redirect to the game page when the image is clicked
    Navigate('/game');
  });

  // Append the image button to the main element
  main.appendChild(playNowButton);
};

export default HomePage;
