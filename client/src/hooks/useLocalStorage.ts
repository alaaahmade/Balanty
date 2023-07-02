// import { useState } from 'react';

// const useLocalStorage = () => {
//   const [value, setValue] = useState<string | null>(null);

//   const setItem = (key: string, item: string) => {
//     localStorage.setItem(key, item);
//     setValue(item);
//   };

//   const getItem = (key: string) => {
//     const item = localStorage.getItem(key);
//     setValue(item);
//     return item;
//   };

//   const removeItem = (key: string) => {
//     localStorage.removeItem(key);
//     setValue(null);
//   };

//   return { value, setItem, getItem, removeItem };
// };

// export default useLocalStorage;
