/* eslint-disable no-unused-vars */
import { clearPage } from '../../utils/render';

const ResourcePage = () =>{
    clearPage();

    const colValuesBootstrap = 'col-md-6  d-flex flex-column ';
    const headTitlesValues = 'title-main-h2 text-center  m-2 mx-xl-5 glow-div';
    const contentValuesBootstrap = 'textContentResource text-justify p-2 mx-2 p-xl-5 mx-xl-5 equal-height-content glow-div';

    const main = document.querySelector('main');

    // Creation of the main div containing the whole page (used for background image mainly)
    const container = document.createElement('div');
    container.className = 'resourcePageBackGround mainText row secondSection py-4';

    // Creation of the first section (Introduction Resource Hub)
    const section1ResourceHub = document.createElement('div');
    section1ResourceHub.className = colValuesBootstrap;
    const section1ResourceHubTitle = document.createElement('h2');
    section1ResourceHubTitle.textContent = 'Resource Hub';
    section1ResourceHubTitle.className = headTitlesValues;
    const section1ResourceHubContent = document.createElement('p');
    section1ResourceHubContent.className = contentValuesBootstrap;
    const text1 = `This webpage contains the list of assets, songs, and images that we used for creating our game. We would like to thank and acknowledge the original creators of these resources for their amazing work. If you are interested in using any of these resources for your own projects, please visit the links provided and follow the terms and conditions of the respective authors.`;
    section1ResourceHubContent.innerHTML = text1;

    section1ResourceHub.appendChild(section1ResourceHubTitle);
    section1ResourceHub.appendChild(section1ResourceHubContent);

     // Creation of the second section (Assets)
     const section2Assets = document.createElement('div');
     section2Assets.className = colValuesBootstrap;
     const section2AssetsTitle = document.createElement('h2');
     section2AssetsTitle.className= headTitlesValues;
     const section2AssetsContent = document.createElement('p');
     section2AssetsContent.className = contentValuesBootstrap;

     section2AssetsTitle.textContent = 'Assets';
     const text2 = `The game features six different characters and a map that are based on the following assets: 
     <ul class="noTextJustify">
        <li> Exterminator:<a href="https://penusbmic.itch.io/sci-fi-character-pack-12" class="page-specific-link" target="_blank"> Sci-Fi Character Pack 12 by penusbmic </a> </li>
        <li> Archer:<a href="https://legnops.itch.io/red-hood-character" class="page-specific-link" target="_blank"> Red Hood Character by Legnops </a> </li>
        <li> Necromancer:<a href="https://creativekind.itch.io/necromancer-free" class="page-specific-link" target="_blank"> Necromancer Free by CreativeKind </a> </li>
        <li> Warrior:<a href="https://creativekind.itch.io/nightborne-warrior" class="page-specific-link" target="_blank"> Nightborne Warrior by CreativeKind </a></li>
        <li> Knight:<a href="https://chierit.itch.io/elementals-fire-knight" class="page-specific-link" target="_blank"> Elementals: Fire Knight by Chierit</a> </li>
        <li> Player bases:<a href="https://creativekind.itch.io/flying-obelisk" class="page-specific-link" target="_blank"> Flying Obelisk by CreativeKind </a> </li>
        <li> Map:<a href="https://www.reddit.com/r/inkarnate/comments/10ufx37/a_simple_grassland_encounter_map/" class="page-specific-link" target="_blank"> A simple grassland encounter map by u/InkarnateOfficial</a> </li>
     </ul>`
     section2AssetsContent.innerHTML = text2;

     section2Assets.appendChild(section2AssetsTitle);
     section2Assets.appendChild(section2AssetsContent);

     // Creation of the third section (Songs)
     const section3Songs = document.createElement('div');
     section3Songs.className = colValuesBootstrap;
     const section3SongsTitle = document.createElement('h2');
     section3SongsTitle.className = headTitlesValues;
     const section3SongsContent = document.createElement('p');
     section3SongsContent.className = contentValuesBootstrap;

     section3SongsTitle.textContent = 'Songs';
     const text3 = `The game uses the following songs for different scenes and scenarios:
     <ul class="noTextJustify">
        <li> Start of the game scene: <a href="https://www.youtube.com/watch?v=vx7S3v7u7jY" class="page-specific-link" target="_blank"> “Fission” by Ludwig Göransson  </a></li>
        <li> Main game scene during fights: <a href="https://www.youtube.com/watch?v=atgjKEgSqSU" class="page-specific-link" target="_blank"> “Aria Math (Minecraft Volume Beta)” by C418 </a></li>
        <li> Winner scene: <a href="https://www.youtube.com/watch?v=Y0Qfuqk2Q5g" class="page-specific-link" target="_blank">“Casey Tells the Truth” by West Dylan Thordson </a> </li>
     </ul>
     Disclaimer: We do not own the rights to these songs and we are using them for non-commercial purposes only. 
     We respect the intellectual property of the original composers and we are willing to remove these songs from the game upon their request. If you are the owner of any of these songs and you have any issues with their usage, please contact me at flaviu.bilic@student.vinci.be and I will comply with your wishes.`
     section3SongsContent.innerHTML = text3;

     section3Songs.appendChild(section3SongsTitle);
     section3Songs.appendChild(section3SongsContent);

     // Creation of fourth section (Images)
     const section4Images = document.createElement('div');
     section4Images.className = colValuesBootstrap;
     const section4ImagesTitle = document.createElement('h2');
     section4ImagesTitle.className = headTitlesValues;
     const section4ImagesContent = document.createElement('p');
     section4ImagesContent.className = contentValuesBootstrap;

     section4ImagesTitle.textContent = 'Images';
     const text4 = `The images that we used for the website were generated by BingAI, a powerful tool that can create realistic and artistic images from text prompts.`
     section4ImagesContent.textContent = text4;
     section4Images.appendChild(section4ImagesTitle);
     section4Images.appendChild(section4ImagesContent);

     // Appending everything to the main
     container.appendChild(section1ResourceHub);
     container.appendChild(section2Assets);
     container.appendChild(section3Songs);
     container.appendChild(section4Images);
     
     main.appendChild(container);
}

export default ResourcePage;