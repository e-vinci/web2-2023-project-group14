import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import Classement from '../Pages/Classement';
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/classement': Classement,
  '/login': LoginPage,
  '/register': RegisterPage
};

export default routes;
