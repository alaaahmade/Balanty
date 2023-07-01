import { useEffect } from 'react';
import useUser, { User } from './useUser';
import useLocalStorage from './useLocalStorage';

const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const loggedUser = getItem('user');
    if (loggedUser) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = () => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};

export default useAuth;
