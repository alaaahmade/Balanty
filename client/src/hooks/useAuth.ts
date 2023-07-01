import { useEffect } from 'react';
import { User } from './useUser';
import { useUser, useLocalStorage } from './index';

const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const loggedUser = getItem('user');
    if (loggedUser) {
      addUser(JSON.parse(loggedUser));
    }
  }, []);

  const login = (loggedUser: User) => {
    addUser(loggedUser);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};

export default useAuth;
