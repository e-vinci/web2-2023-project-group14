const STORE_NAME1 = 'user1';
const STORE_NAME2 = 'user2';

const getAuthenticatedUser1 = () => {
  const serializedUser = localStorage.getItem(STORE_NAME1);
  if (!serializedUser) return undefined;

  const currentUser1 = JSON.parse(serializedUser);
  return currentUser1;
};
const getAuthenticatedUser2 = () => {
  const serializedUser2 = localStorage.getItem(STORE_NAME2);
  if (!serializedUser2) return undefined;

  const currentUser2 = JSON.parse(serializedUser2);
  return currentUser2;
};

const setAuthenticatedUser1 = (authenticatedUser) => {
  const serializedUser = JSON.stringify(authenticatedUser);
  localStorage.setItem(STORE_NAME1, serializedUser);
};
const setAuthenticatedUser2 = (authenticatedUser2) => {
  const serializedUser2 = JSON.stringify(authenticatedUser2);
  localStorage.setItem(STORE_NAME2, serializedUser2);
};

const isAuthenticated1 = () => localStorage.getItem(STORE_NAME1) !== null;
const isAuthenticated2 = () => localStorage.getItem(STORE_NAME2) !== null;


const clearAuthenticatedUser1 = () => {
  localStorage.removeItem(STORE_NAME1);
};
const clearAuthenticatedUser2 = () => {
  localStorage.removeItem(STORE_NAME2);
};

// eslint-disable-next-line object-curly-newline
export { getAuthenticatedUser1, getAuthenticatedUser2, setAuthenticatedUser1, setAuthenticatedUser2, isAuthenticated1, isAuthenticated2, clearAuthenticatedUser1, clearAuthenticatedUser2 };