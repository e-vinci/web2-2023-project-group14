import { clearAuthenticatedUser1 } from '../../utils/auths';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';

const Delete = () => {
  
  clearAuthenticatedUser1();
  Navbar();
  Navigate('/');
};

export default Delete;