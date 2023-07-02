// import { useContext, useEffect } from 'react';
// import { User } from './useUser';
// import { useUser, useLocalStorage } from './index';
// import { AuthContext } from '../context';

import { useContext } from 'react';
import { AuthContext } from '../context';

// // const useAuth = () => {
// //   const { user, addUser, removeUser } = useUser();
// //   const { getItem } = useLocalStorage();

// //   useEffect(() => {
// //     const loggedUser = getItem('user');
// //     if (loggedUser) {
// //       addUser(JSON.parse(loggedUser));
// //     }
// //   }, []);

// //   const login = (loggedUser: User) => {
// //     addUser(loggedUser);
// //   };

// //   const logout = () => {
// //     removeUser();
// //   };

// //   return { user, login, logout };
// // };

// const useAuth = () => {
//   const { user, setUser } = useContext(AuthContext);

//   useEffect(() => {
//     const loggedUser = localStorage.getItem('user');
//     if (loggedUser) {
//       setUser(JSON.parse(loggedUser));
//       localStorage.setItem('user', JSON.stringify(loggedUser));
//     }
//   }, []);

//   const login = (loggedUser: User) => {
//     setUser(loggedUser);
//     localStorage.setItem('user', JSON.stringify(loggedUser));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.setItem('user', '');
//   };

//   return { user, login, logout };
// };

// export default useAuth;

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
