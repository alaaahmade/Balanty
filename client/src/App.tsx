import { ReactElement } from 'react';

import './App.css';
import Contact from './components/ContactUs';

const App: React.FC = (): ReactElement => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default App;
