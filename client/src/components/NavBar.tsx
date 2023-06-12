import { Box, Input, Typography } from '@mui/material';
import { ReactElement, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = (): ReactElement => {
  const [search, setSearch] = useState('');
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        width: '100%',
        height: '65px',
        left: 0,
        top: 0,
        backgroundColor: '#01031C',
        borderBottom: '0.5px solid #000000',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '30px',
          width: '100px',
          backgroundColor: '#D9D9D9',
          borderRadius: '20px',
        }}
      >
        Logo
      </Typography>
      <label
        htmlFor="search"
        style={{
          position: 'absolute',
          left: '67%',
          top: '17px',
          zIndex: 2,
        }}
      >
        <SearchIcon
          sx={{
            color: '#3BB64B',
            fontWeight: 'bold',
            fontSize: '30px',
          }}
        />
      </label>
      <Input
        id="search"
        sx={{
          width: '40%',
          height: '40px',
          background: '#D9D9D9',
          borderRadius: '5px',
          padding: '20px',
          br: '4px',
          outline: '0',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
      />
      <img
        src="icons/burger.png"
        alt="burger"
        style={{
          cursor: 'pointer',
          width: '45px',
          height: '55px',
        }}
      />
    </Box>
  );
};

export default NavBar;
