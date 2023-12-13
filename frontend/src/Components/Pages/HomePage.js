/* eslint-disable no-unused-vars */
// Import necessary dependencies
import anime from 'animejs/lib/anime.es';
import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import playNowImage from '../../assets/PlayNow.png';
import archerAsset from '../../assets/artwork_wiki/archerWiki.png';
import exterminatorAsset from '../../assets/artwork_wiki/exterminatorWiki.png';
import knightAsset from '../../assets/artwork_wiki/knightWiki.png';
import necromancerAsset from '../../assets/artwork_wiki/necromancerWiki.png';
import warriorAsset from '../../assets/artwork_wiki/warriorWiki.png';

const HomePage = () => {
  // Clear the page content
  clearPage();

  // Get the main element
  const main = document.querySelector('main');

  // Create a "Play Now 1" button image element
  const playNowButton = document.createElement('img');
  playNowButton.src = playNowImage; // Set image path
  playNowButton.alt = 'Play Now'; // Set alt text for accessibility
  playNowButton.className = 'play-now-button glow-div'; // Apply button styles

  // Add cursor style and functionality when clicked
  playNowButton.style.cursor = 'pointer';
  playNowButton.addEventListener('click', () => {
    // Redirect to the game page when the button is clicked
    Navigate('/game');
  });

   // Create a "Play Now 1" button image element
   const playNowButtonEnd = document.createElement('img');
   playNowButtonEnd.src = playNowImage; // Set image path
   playNowButtonEnd.alt = 'Play Now'; // Set alt text for accessibility
   playNowButtonEnd.className = 'play-now-button glow-div mb-5'; // Apply button styles
 
   // Add cursor style and functionality when clicked
   playNowButtonEnd.style.cursor = 'pointer';
   playNowButtonEnd.addEventListener('click', () => {
     // Redirect to the game page when the button is clicked
     Navigate('/game');
   });

  // Create an intro container
  const introContainer = document.createElement('div');
  introContainer.className = ' mainText';

  // Create 1 out of 3 section for background pourposes
  const divSection1 = document.createElement('div');
  divSection1.className = 'firstSection pb-4';

  // First Section - Title and Description
  const introRow1 = document.createElement('div');
  introRow1.className = 'row justify-content-center slide1 slide_Initial_Position_Left';
  const introCol1 = document.createElement('div');
  introCol1.className = 'col-sm-10 col-md-6 text-center';
  const introTitle1 = document.createElement('h1');
  introTitle1.textContent = 'Embark on an Epic Journey';
  introTitle1.className = 'title-main-h1 glow-div';
  introCol1.appendChild(introTitle1);
  introRow1.appendChild(introCol1);
  divSection1.appendChild(introRow1);

  const introRow2 = document.createElement('div');
  introRow2.className = 'row justify-content-center slide2 slide_Initial_Position_Left ';
  const introCol2 = document.createElement('div');
  introCol2.className = 'col-sm-10 col-md-6';
  const introText1 = document.createElement('p');
  introText1.textContent =
    'Step into a world where bravery meets darkness, valor confronts malevolence, and mysteries await your discovery. Before diving into the adventure, immerse yourself in the captivating lore that defines our fantastical realm.';
  introText1.className = 'textContent px-2';
  introCol2.appendChild(introText1);
  introRow2.appendChild(introCol2);
  divSection1.appendChild(introRow2);

  // Animation first section - Row 1 - Slide form left to right
  setTimeout(() => {
    const slide1 = document.getElementsByClassName('slide1');

    // Set initial properties for the off-screen position
    anime({
      targets: slide1,
      translateX: '-100%',
      opacity: 0,
      duration: 0,
    });
  
    // Animation to slide in and fade in
    anime({
      targets: slide1,
      translateX: '0',
      opacity: 1,
      duration: 1500,
      easing: 'easeInOutQuad',
    });
  }, 200); 

  // Animation first section - Row 2 - Slide form left to right
  setTimeout(() => {
    const slide2 = document.getElementsByClassName('slide2');

    // Set initial properties for the off-screen position
    anime({
      targets: slide2,
      translateX: '-100%',
      opacity: 0,
      duration: 0,
    });
  
    // Animation to slide in and fade in
    anime({
      targets: slide2,
      translateX: '0',
      opacity: 1,
      duration: 1500,
      easing: 'easeInOutQuad',
    });
  }, 700); // Delay the animation for 1 second (1000 milliseconds)

  // Second Section - Title and Description
  const introRow3 = document.createElement('div');
  introRow3.className = 'row justify-content-center slide3 slide_Initial_Position_Right';
  const introCol3 = document.createElement('div');
  introCol3.className = 'col-sm-10 col-md-6 text-center';
  const introTitle2 = document.createElement('h2');
  introTitle2.textContent = 'Unveil the Mysteries...';
  introTitle2.className = 'title-main-h2 glow-div';
  introCol3.appendChild(introTitle2);
  introRow3.appendChild(introCol3);
  divSection1.appendChild(introRow3);

  const introRow4 = document.createElement('div');
  introRow4.className = 'row justify-content-center slide4 slide_Initial_Position_Right';
  const introCol4 = document.createElement('div');
  introCol4.className = 'col-sm-10 col-md-6';
  const introText2 = document.createElement('p');
  introText2.textContent =
    'Engage with the enigmatic tales of heroes and villains, where each character bears a unique story waiting to be unraveled. Explore their intertwined destinies, a symphony of light and shadow, through the choice of their narratives before you start your own saga.';
  introText2.className = 'px-2 textContent';
  introCol4.appendChild(introText2);
  introRow4.appendChild(introCol4);
  divSection1.appendChild(introRow4);

   // Animation second section - Row 3 - Slide form right to left
   setTimeout(() => {
    const slide3 = document.getElementsByClassName('slide3');

    // Set initial properties for the off-screen position
    anime({
      targets: slide3,
      translateX: '100%',
      opacity: 0,
      duration: 0,
    });
  
    // Animation to slide in and fade in
    anime({
      targets: slide3,
      translateX: '0',
      opacity: 1,
      duration: 1500,
      easing: 'easeInOutQuad',
    });
  }, 2500); // Delay the animation for 1 second (1000 milliseconds)

  // Animation first section - Row 2 - Slide form left to right
  setTimeout(() => {
    const slide4 = document.getElementsByClassName('slide4');

    // Set initial properties for the off-screen position
    anime({
      targets: slide4,
      translateX: '100%',
      opacity: 0,
      duration: 0,
    });
  
    // Animation to slide in and fade in
    anime({
      targets: slide4,
      translateX: '0',
      opacity: 1,
      duration: 1500,
      easing: 'easeInOutQuad',
    });
  }, 3000); // Delay the animation for 1 second (1000 milliseconds)

  // Third Section - "Play Now" button
  const introRow5 = document.createElement('div');
  introRow5.className = 'row justify-content-center appears';
  const introCol5 = document.createElement('div');
  introCol5.className = 'text-center';
  introCol5.appendChild(playNowButton);
  introRow5.appendChild(introCol5);
  divSection1.appendChild(introRow5);

  // Fourth Section - "Lore story"
  const introRow6 = document.createElement('div');
  introRow6.className = 'row justify-content-center appearsDelay';
  const introCol6 = document.createElement('div');
  introCol6.className = 'col-sm-10 col-md-6 text-center';
  const introTitle3 = document.createElement('h2');
  introTitle3.textContent = 'Discover our story and universe...';
  introTitle3.className = 'title-main-h2 glow-div';
  introCol6.appendChild(introTitle3);
  introRow6.appendChild(introCol6);
  divSection1.appendChild(introRow6);

  const introTextLong = `
  <p>Amidst the whispering trees and veils of mist that draped the mystical forest, an unlikely alliance emerged, a tapestry woven with threads of bravery, darkness, valor, and enigma.</p>
  <p>At the heart of this shadowy realm stood a young girl, the Archer, draped in her iconic red hood, her bow strung with determination. She navigated the labyrinthine woods, confronting creatures of nightmare, each encounter etching tales of resilience into the fabric of her being. Her unwavering courage, honed through trials, painted her as a beacon of hope in this enigmatic world.</p>
  <p>Beside her strode the Knight, a figure towering in red armor, his fiery longblade casting warm hues against the gloom. His noble heart beat in unison with the virtues of valor and honor, his presence illuminating the darkness that threatened to engulf the forest. He embodied the very essence of chivalry, a guardian of light in this shadowy domain.</p>
  <p>In the depths of the mist-laden groves, a black automaton, the Exterminator, stood sentinel. Its darkened form, wielding a weapon not for malice but protection, served as a silent guardian, guided by a virtuous code that transcended its metallic frame. Amidst the haunting fog, it stood as a symbol of justice, a silent sentinel warding off encroaching darkness.</p>
  <p>Yet, in the deeper recesses, cloaked in black, was the Necromancer, a haunting figure whose very aura exuded an ominous energy. His staff aflame with crimson fire pierced through the obscurity, marking his malevolent dominion over forbidden arts. His presence whispered of dark forces at play, a harbinger of danger in the murky depths.</p>
  <p>And emerging from the shadows, a devilish entity, the Warrior, a being dark as the abyss itself, with horns that seemed to pierce the very fabric of reality. His purple eyes radiated an eerie glow, his electrified sword crackling with ominous energy. His malevolent presence cast a foreboding shadow across the land, marking him as the undisputed antagonist of this surreal world.</p>
  <p>As fate wove their destinies together, these disparate figures found themselves entwined in a dance of opposing forces. The Archer's resolve clashed with the Necromancer's dark influence, while the Knight's valor stood against the Warrior's malevolence. The Exterminator, a silent witness, stood vigilant amidst the clash, a beacon of justice amidst the chaos.</p>
  <p>Their intertwined stories, a symphony of light and shadow, bravery and malevolence, painted the canvas of this fantastical world, a tale waiting to be unfurled, inviting explorers to delve into the depths of mystery, courage, and the eternal struggle between darkness and light.</p>
  `;

  const accordion1 = `<div class="accordion" id="accordionLore">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
          Read more!
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionLore">
        <div class="accordion-body">
        ${introTextLong}
        </div>
      </div>
    </div>
  </div>
  `;

  const introRow7 = document.createElement('div');
  introRow7.className = 'row justify-content-center appearsDelay';
  const introCol7 = document.createElement('div');
  introCol7.className = 'col-sm-10 col-md-10';
  const introText3 = document.createElement('div');
  introText3.innerHTML = accordion1;

  introText3.className = 'textContent';
  introCol7.appendChild(introText3);
  introRow7.appendChild(introCol7);
  divSection1.appendChild(introRow7);

  // Animation - Appears
  setTimeout(() => {
    const appears1 = document.getElementsByClassName('appears');
  
    // Animation to slide in and fade in
    anime({
      targets: appears1,
      opacity: 1,
      duration: 1500,
      easing: 'easeInOutQuad',
    });
  }, 4000);

  // Animation - Appears
  setTimeout(() => {
    const appearsDelay = document.getElementsByClassName('appearsDelay');
  
    // Animation to slide in and fade in
    anime({
      targets: appearsDelay,
      opacity: 1,
      duration: 1500,
      easing: 'easeInOutQuad',
    });
  }, 5800);

  // cards imports
  const archerImg = document.createElement('img');
  archerImg.src = archerAsset; // Set image path
  archerImg.alt = 'Archer artwork'; // Set alt text for accessibility

  const extImg = document.createElement('img');
  extImg.src = exterminatorAsset; // Set image path
  extImg.alt = 'Exterminator artwork'; // Set alt text for accessibility

  const knightImg = document.createElement('img');
  knightImg.src = knightAsset; // Set image path
  knightImg.alt = 'Knight artwork'; // Set alt text for accessibility

  const necroImg = document.createElement('img');
  necroImg.src = necromancerAsset; // Set image path
  necroImg.alt = 'Necromancer artwork'; // Set alt text for accessibility

  const warriorImg = document.createElement('img');
  warriorImg.src = warriorAsset; // Set image path
  warriorImg.alt = 'Warrior artwork'; // Set alt text for accessibility

  // cards content
  const archerCardBodyText = `<p>In the heart of an enigmatic forest, shrouded in the mystery of ancient whispers, there stands a young girl, a figure of both innocence and unwavering courage. Wrapped in a vibrant red hood, she appears almost ethereal against the backdrop of looming trees and the lurking shadows that dance amidst the foliage.</p>
  <p>With every step through this labyrinth of secrets, the girl confronts terrifying creatures, their twisted forms challenging her mettle. Yet, she stands resolute, her bow taut with determination, each arrow fired a testament to her unyielding spirit. Each monstrous adversary becomes a stepping stone, fortifying her resolve and sculpting her into a beacon of bravery in this darkened realm.</p>
  <p>Her story is not merely one of survival but of transformation, from a solitary figure navigating the unknown to a beacon of hope cutting through the veil of the mysterious forest. Each challenge embraced, each battle won, etches her name into the lore of this surreal world as a true heroine, a young archer of unparalleled strength and unwavering will.</p>`;

  const extCardBodyText = `<p>Deep within the mist-laden embrace of an ancient forest, an imposing figure stands guard amidst the ominous shadows, a blackened automaton, its metallic frame bearing the scars of time and trials. This solemn guardian, despite its foreboding appearance, is not a harbinger of malevolence but a vigilant protector wielding its weapon not in aggression but in defense.</p>
  <p>Through the veil of fog and uncertainty, this machine holds steadfast, guided by an inner code of righteousness that surpasses its mechanical existence. Its presence is a beacon of justice amid the eerie wilderness, a silent sentinel watching over the enigmatic depths of the forest.</p>
  <p>This guardian's tale is one of quiet heroism, its metallic heart pulsating with a noble purpose. In the stillness of the misty groves, it embodies not fear but a sense of security, a vigilant force ensuring the delicate balance between light and shadow remains undisturbed, a silent warrior standing resolute against the encroaching darkness.</p>`;

  const knightCardBodyText = `<p>Within the heart of the darkened woods, cloaked in an aura of mystery, stands a knight adorned in resplendent red armor. His towering figure, a contrast against the gloom, holds a fire longblade ablaze with a radiant glow that cuts through the murk, illuminating his path with an unwavering warmth.</p>
  <p>This valiant warrior is more than a mere guardian; he embodies the virtues of honor and courage. His noble heart beats in harmony with the rhythm of his resplendent armor, casting an aura that resonates hope into the shadows. He is a beacon of light in this shadowy world, a symbol of valor and unwavering determination.</p>
  <p>His story, etched in the annals of this mystical realm, is a testament to bravery—a knight who embodies the virtues of righteousness and valor, a stalwart defender whose fiery resolve refuses to be extinguished by the encroaching darkness.</p>`;

  const necroCardBodyText = `<p>Cloaked in the deepest shades of black, adorned with a menacing crimson belt, the necromancer roams the depths of a shrouded, fog-laden forest. His presence, marked by a staff ablaze with crimson fire, pierces through the darkness, casting an ominous glow that betrays the malevolent power he commands.</p>
  <p>In his left hand, a skull rests as a chilling testament to his mastery over the darker arts. His very essence permeates the forest, chilling the air with an aura that whispers of imminent danger. His enigmatic figure, veiled in the fog, is a harbinger of the macabre, a force to be reckoned with, marking the boundaries between life and death with an unsettling prowess.</p>
  <p>This necromancer's tale is one of forbidden knowledge and the wielding of dark forces. His presence, a looming threat within the obscurity, shapes the very fabric of this mysterious world, a sinister enigma whose mere existence sends shivers down the spine of all who dare to tread within the foggy depths.</p>`;

  const warriorCardBodyText = `<p>Emerging from the depths of an impenetrable forest shrouded in dense fog, a malevolent entity strides forth—a devilish figure, dark as the abyss itself. His elongated horns and piercing purple eyes radiate an eerie luminescence, a stark contrast against the murky surroundings. Adorned with a neon purple belt and wielding an electrified sword crackling with ominous energy, he embodies the epitome of darkness.</p>
  <p>Every step he takes resonates with an unsettling power that sends tremors through the very core of the forest. His presence, an embodiment of sinister authority, marks him as the unequivocal antagonist of this realm—a malevolent force whose dominion over dark powers casts a foreboding shadow across the land.</p>
  <p>His tale, whispered in hushed tones among the denizens of this enigmatic world, is a saga of formidable darkness—a warrior whose maleficent prowess and ominous presence strike fear into the hearts of all who dare to cross his path, an undisputed villain reigning supreme within the eerie confines of this fog-shrouded domain.</p>`;

  // cards creations
  const cardArcherContent = `<div class="card my-5 border-archermain card-color">
  <img src="${archerImg.src}" class="card-img-top" alt="Archer image artwork">
  <div class="card-body">
    <h5 class="card-title">The Archer</h5>
    <p class="card-text">${archerCardBodyText}</p>
  </div>
</div>`;

  const cardExtContent = `<div class="card my-5 border-bot-main card-color">
  <img src="${extImg.src}" class="card-img-top" alt="Exterminator image artwork">
  <div class="card-body">
    <h5 class="card-title">The Exterminator</h5>
    <p class="card-text">${extCardBodyText}</p>
  </div>
  </div>`;

  const cardKnightContent = `<div class="card my-5 border-knight-main card-color">
  <img src="${knightImg.src}" class="card-img-top" alt="knight image artwork">
  <div class="card-body">
    <h5 class="card-title">The Knight</h5>
    <p class="card-text">${knightCardBodyText}</p>
  </div>
  </div>`;

  const cardNecroContent = `<div class="card my-5 border-necro-main card-color">
  <img src="${necroImg.src}" class="card-img-top" alt="necro image artwork">
  <div class="card-body">
    <h5 class="card-title">The Necromancer</h5>
    <p class="card-text">${necroCardBodyText}</p>
  </div>
  </div>`;

  const cardWarriorContent = `<div class="card my-5 border-warrior-main card-color">
  <img src="${warriorImg.src}" class="card-img-top" alt="warrior image artwork">
  <div class="card-body">
    <h5 class="card-title">The Warrior</h5>
    <p class="card-text">${warriorCardBodyText}</p>
  </div>
  </div>`;

  // Container for cards
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'container-fluid secondSection'

  const classNameCards = 'col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-2'

  // Fifth Section - "Cards"
  const cardRow1 = document.createElement('div');
  cardRow1.className = 'row justify-content-center appearsDelay';

  const cardColArcher = document.createElement('div');
  cardColArcher.className = classNameCards;
  cardColArcher.innerHTML = cardArcherContent;

  const cardColExt = document.createElement('div');
  cardColExt.className = classNameCards;
  cardColExt.innerHTML = cardExtContent;

  const cardColKnight = document.createElement('div');
  cardColKnight.className = classNameCards;
  cardColKnight.innerHTML = cardKnightContent;

  const cardColNecro = document.createElement('div');
  cardColNecro.className = classNameCards;
  cardColNecro.innerHTML = cardNecroContent;

  const cardColWarrior = document.createElement('div');
  cardColWarrior.className = classNameCards;
  cardColWarrior.innerHTML = cardWarriorContent;

  cardRow1.appendChild(cardColArcher);
  cardRow1.appendChild(cardColExt);
  cardRow1.appendChild(cardColKnight);
  cardRow1.appendChild(cardColNecro);
  cardRow1.appendChild(cardColWarrior);
  cardsContainer.appendChild(cardRow1);

  //  last div for background
  const divSection2 = document.createElement('div');
  divSection2.className = 'thirdSection';

  // Sixth Section - "Before ending"
  const endRow1 = document.createElement('div');
  endRow1.className = 'row justify-content-center appearsDelay';
  const endCol1 = document.createElement('div');
  endCol1.className = 'col-sm-10 col-md-6 text-center';
  const endTitle1 = document.createElement('h2');
  endTitle1.textContent = 'Forge Your Legend';
  endTitle1.className = 'title-main-h2 glow-div';
  endCol1.appendChild(endTitle1);
  endRow1.appendChild(endCol1);
  divSection2.appendChild(endRow1);

  const endRow2 = document.createElement('div');
  endRow2.className = 'row justify-content-center appearsDelay';
  const endCol2 = document.createElement('div');
  endCol2.className = 'col-sm-10 col-md-6';
  const endText2 = document.createElement('p');
  endText2.textContent =
    "Now that you've delved into the rich lore and intricacies of our world, the stage is set for you to become a part of this enthralling tale. Embrace your destiny, choose your character, and step forth into this surreal landscape. Will you uphold the virtues of courage and honor, or shall you succumb to the temptations of darkness? Your legend awaits your creation.";
  endText2.className = 'px-2 textContent';
  endCol2.appendChild(endText2);
  endRow2.appendChild(endCol2);
  divSection2.appendChild(endRow2);

  // Seventh Section - "Ending"
  const endRow3 = document.createElement('div');
  endRow3.className = 'row justify-content-center appearsDelay';
  const endCol3 = document.createElement('div');
  endCol3.className = 'col-sm-10 col-md-6 text-center';
  const endTitle2 = document.createElement('h2');
  endTitle2.textContent = 'Begin Your Adventure';
  endTitle2.className = 'title-main-h2 glow-div';
  endCol3.appendChild(endTitle2);
  endRow3.appendChild(endCol3);
  divSection2.appendChild(endRow3);

  const endRow4 = document.createElement('div');
  endRow4.className = 'row justify-content-center appearsDelay';
  const endCol4 = document.createElement('div');
  endCol4.className = 'col-sm-10 col-md-6';
  const endText4 = document.createElement('p');
  endText4.textContent =
    'Click the play button and immerse yourself in an experience unlike any other. Embark on a journey where every decision shapes your path, where the clash of opposing forces creates an unforgettable adventure. Join us and make your mark in this tapestry of bravery and malevolence.';
  endText4.className = 'px-2 textContent';
  endCol4.appendChild(endText4);
  endRow4.appendChild(endCol4);
  divSection2.appendChild(endRow4);

  // Eigth Section - "Play Now" button at the end
  const endRow5 = document.createElement('div');
  endRow5.className = 'row justify-content-center py-3 appearsDelay';
  const endCol5 = document.createElement('div');
  endCol5.className = 'text-center';
  endCol5.appendChild(playNowButtonEnd);
  endRow5.appendChild(endCol5);
  divSection2.appendChild(endRow5);

  // Append rows to the intro container
  introContainer.appendChild(divSection1);
  introContainer.appendChild(cardsContainer);
  introContainer.appendChild(divSection2);

  // Append the intro container to the main element
  main.appendChild(introContainer);
};

export default HomePage;
