import { clearPage } from '../../utils/render';

const RankingPage = () => {
  clearPage();
  renderRankingTable();
};

  /* function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const backButton = document.createElement('input');
  backButton.value = 'Go back to HomePage';
  backButton.className = 'btn btn-secondary mt-3';
  backButton.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(backButton);
} */

function renderRankingTable() {
  const main = document.querySelector('main');

  // Assuming you want to create a table, you can use the following example code
  const table = document.createElement('table');
  table.className = 'ranking-table';

  // Create table headers
  const headers = ['Rank', 'Player', 'Wins'];
  const headerRow = document.createElement('tr');

  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // Create sample data (replace this with your actual ranking data)
  const rankingData = [
    { rank: 1, player: 'Player 1', wins: 10 },
    { rank: 2, player: 'Player 2', wins: 8 },
    // Add more rows as needed
  ];

  // Create table rows with ranking data
  rankingData.forEach(data => {
    const row = document.createElement('tr');
    Object.values(data).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  main.appendChild(table);
}

export default RankingPage;
