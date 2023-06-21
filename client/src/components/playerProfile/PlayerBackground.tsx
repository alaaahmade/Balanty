import React, { ReactElement } from 'react';
import LeftSideBar from '../RootComponents/leftSideBar/LeftSideBar';
import NavBar from '../RootComponents/navBar/NavBar';

const PlayerBackground: React.FC = (): ReactElement => {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', right:0 }}>
        hello
        <LeftSideBar />
      </div>
    </div>
  );
};

export default PlayerBackground;
