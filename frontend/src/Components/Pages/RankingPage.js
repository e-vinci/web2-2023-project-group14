import { clearPage } from '../../utils/render';

const RankingPage = () => {
  clearPage();
  renderRankingTable();
  animateTable();
};

function renderRankingTable() {
  const main = document.querySelector('main');

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'h-100 backgroundLogin';

  const rankingWrapper = document.createElement('div');
  rankingWrapper.className = 'ranking-wrapper d-flex justify-content-center align-items-center'; // Add 'ranking-wrapper' class

  // Assuming you want to create a table, you can use the following example code
  const table = document.createElement('table');
  table.className = 'ranking-table text-center col-lg-6 border border-3 border-dark footerColor my-5 formDiv';

  // Create table headers
  const headers = ['Rank', 'Player', 'Wins'];
  const headerRow = document.createElement('tr');

  headers.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.className = 'border-bottom border-dark';
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // Create sample data (replace this with your actual ranking data)
  const rankingData = [
    { rank: 1, player: 'Player 1', wins: 10 },
    { rank: 2, player: 'Player 2', wins: 8 },
    { rank: 3, player: 'Player 3', wins: 6 },
    
    // Add more rows as needed
  ];

  // Create table rows with ranking data
  rankingData.forEach((data) => {
    const row = document.createElement('tr');
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

export default RankingPage;
