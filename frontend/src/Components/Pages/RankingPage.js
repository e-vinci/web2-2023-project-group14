import { clearPage } from '../../utils/render';
import {initializeGdpr} from '../../utils/gdprUtils';


const RankingPage = () => {
  clearPage();
  renderRankingTable();
};

async function renderRankingTable() {
  const main = document.querySelector('main');

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'h-100 backgroundLogin';
  backgroundDiv.id = 'containerGdpr';

  const rankingWrapper = document.createElement('div');
  rankingWrapper.className = 'ranking-wrapper d-flex justify-content-center align-items-center';

  const table = document.createElement('table');
  table.className = 'ranking-table text-center col-lg-6 border border-3 border-dark footerColor my-5 formDiv';

  const headers = ['Rank', 'Player', 'Ranking Points', 'Wins', 'Losses'];
  const headerRow = document.createElement('tr');

  headers.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.className = 'border-bottom border-dark';
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  const rankingData = await getRanking();

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


async function getRanking() {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/ranking`);
    if (!response.ok) throw new Error(`fetch error:: ranking : ${response.status} : ${response.statusText}`);

    const ranking = await response.json();

    setTimeout(() => {
      initializeGdpr('#containerGdpr');
    }, 0);

    return ranking;
  } catch (err) {
    console.error('getAllScores::error ', err);
    throw err;
  }
}

export default RankingPage;
