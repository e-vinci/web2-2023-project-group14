import { clearPage } from '../../utils/render';
import {initializeGdpr} from '../../utils/gdprUtils';


const RankingPage = () => {
  clearPage();
  renderRankingTable();
  // animateTable();
};

async function renderRankingTable() {
  const main = document.querySelector('main');

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'h-100 backgroundLogin';
  backgroundDiv.id = 'containerGdpr';

  const rankingWrapper = document.createElement('div');
  rankingWrapper.className = 'ranking-wrapper d-flex justify-content-center align-items-center'; // Add 'ranking-wrapper' class

  // Assuming you want to create a table, you can use the following example code
  const table = document.createElement('table');
  table.className = 'ranking-table text-center col-lg-6 border border-3 border-dark footerColor my-5 formDiv';

  // Create table headers
  const headers = ['Rank', 'Player','Ranking Points', 'Wins', 'Losses'];
  const headerRow = document.createElement('tr');

  headers.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.className = 'border-bottom border-dark';
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // eslint-disable-next-line no-unused-vars
  const rankingData = await getRanking();
  console.log('rankingData: ', rankingData)

  // Create sample data (replace this with your actual ranking data)
  /*
  const rankingData = [
    { rank: 1, player: 'Player 1', wins: 10, loss: 5 },
    { rank: 2, player: 'Player 2', wins: 8 , loss: 7},
    { rank: 3, player: 'Player 3', wins: 6, loss: 10 },
    
    // Add more rows as needed
  ];
  */

  // Create table rows with ranking data
  let rank = 0;
  rankingData.forEach((data) => {
    const row = document.createElement('tr');
    // eslint-disable-next-line no-plusplus
    rank++;
    const tdRank = document.createElement('td');
    tdRank.textContent = rank;
    row.append(tdRank);
    Object.values(data).forEach((value) => {
      const td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  rankingWrapper.appendChild(table);
  backgroundDiv.appendChild(rankingWrapper);
  main.appendChild(backgroundDiv);
}

/*
function animateTable() {
  const rankingWrapper = document.querySelector('.ranking-wrapper');

  // Set initial styles for the animation
  rankingWrapper.style.opacity = 0;
  rankingWrapper.style.transform = 'translateY(-50px)';

  // Trigger the animation after a short delay
  setTimeout(() => {
    rankingWrapper.style.transition = 'opacity 0.5s, transform 0.5s';
    rankingWrapper.style.opacity = 1;
    rankingWrapper.style.transform = 'translateY(250px)';
  }, 300); // Adjust the delay as needed
}
*/
async function getRanking() {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/ranking`);
    if (!response.ok) throw new Error(`fetch error:: ranking : ${response.status} : ${response.statusText}`);

    const ranking = await response.json();
    console.log('ranking after fetch: ', ranking);

    setTimeout(() => {
      initializeGdpr('#containerGdpr');
     }, 0);

    return ranking;
  } catch (err) {
    /* eslint-disable no-console */
    console.error('getAllScores::error ', err);
    throw err;
  }
}

export default RankingPage;
