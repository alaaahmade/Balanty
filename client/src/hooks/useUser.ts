// import { useContext } from 'react';
// import { AuthContext } from '../context';
// import { useLocalStorage } from './index';

// export interface User {
//   id: number;
//   username: string;
//   email: string;
//   avatar: string;
//   authToken?: string;
// }

// const useUser = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const { setItem } = useLocalStorage();

//   const addUser = (userData: User) => {
//     setUser(userData);
//     setItem('user', JSON.stringify(userData));
//   };

//   const removeUser = () => {
//     setUser(null);
//     setItem('user', '');
//   };

//   return { user, addUser, removeUser };
// };

// export default useUser;
