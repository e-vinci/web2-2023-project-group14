import { clearAuthenticatedUser2 } from '../../utils/auths';
// eslint-disable-next-line import/no-cycle
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const Logout2 = () => {
  clearAuthenticatedUser2();
  Navbar();
  Navigate('/');
};

export default Logout2;