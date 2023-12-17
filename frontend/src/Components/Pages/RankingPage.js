import { clearPage } from '../../utils/render';
import {initializeGdpr} from '../../utils/gdprUtils';
import { isAuthenticated1, isAuthenticated2, getAuthenticatedUser1, getAuthenticatedUser2 } from '../../utils/auths';

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

  // Fetch stats for Player 1 if connected
  let statsPlayer1;
  if (isAuthenticated1()) {
    statsPlayer1 = await getAuthenticatedUser1();
  }

  // Fetch stats for Player 2 if connected
  let statsPlayer2;
  if (isAuthenticated2()) {
    statsPlayer2 = await getAuthenticatedUser2();
  }

  // Create additional rows for Player 1 and Player 2 stats
  if (statsPlayer1) {
    createPlayerStatsRow(statsPlayer1, table, 'Player 1');
  }

  if (statsPlayer2) {
    createPlayerStatsRow(statsPlayer2, table, 'Player 2');
  }

  rankingWrapper.appendChild(table);
  backgroundDiv.appendChild(rankingWrapper);
  main.appendChild(backgroundDiv);
}

function createPlayerStatsRow(stats, table, playerName) {
  const statsRow = document.createElement('tr');
  const playerNameCell = document.createElement('td');
  playerNameCell.textContent = playerName;
  statsRow.appendChild(playerNameCell);

  // Assuming stats has properties like 'elo', 'wins', 'losses'
  ['elo', 'wins', 'losses'].forEach((stat) => {
    const td = document.createElement('td');
    td.textContent = stats[stat];
    statsRow.appendChild(td);
  });

  table.appendChild(statsRow);
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
