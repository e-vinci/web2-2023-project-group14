import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import RankingPage from '../Pages/RankingPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ResourcePage from '../Pages/ResourcePage';
import Logout1 from '../Logout/Logout1';
import Logout2 from '../Logout/Logout2';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/ranking': RankingPage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/resource': ResourcePage,
  '/logout1': Logout1,
  '/logout2': Logout2,
};

export default routes;
