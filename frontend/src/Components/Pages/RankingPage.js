import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';

const RankingPage = () => {
  clearPage();
  renderGoBackHomeButton();
  renderRankingTable();
};

function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(submit);
}

function renderRankingTable() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  main.appendChild(submit);
}

export default RankingPage;
