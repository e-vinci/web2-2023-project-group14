import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import RankingPage from '../Pages/RankingPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/ranking': RankingPage,
  '/login': LoginPage,
  '/register': RegisterPage,
};

export default routes;
