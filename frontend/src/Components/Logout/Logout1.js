import { clearAuthenticatedUser1 } from '../../utils/auths';
// eslint-disable-next-line import/no-cycle
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const Logout1 = () => {
  clearAuthenticatedUser1();
  Navbar();
  Navigate('/');
};

export default Logout1;