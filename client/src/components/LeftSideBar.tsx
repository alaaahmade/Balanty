import { Box, Button, Typography } from '@mui/material';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFillAdd, BsFillFilePersonFill } from 'react-icons/bs';
import { MdStadium } from 'react-icons/md';
import { ReactElement } from 'react';
import UserComponent from './UserComponent';
import SidBarLink from './SidBarLink';

const LeftSideBar = (): ReactElement => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '250px',
        minHeight: '100vh',
        left: '10em',
        top: '5em',
        backgroundColor: '#FFFFFF',
        borderWidth: ' 0.4px 0.4px 0.4px 0.4px',
        borderStyle: 'solid',
        borderColor: '#000000',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '20px',
      }}
    >
      <UserComponent />

      <p
        style={{
          width: '100%',
          height: '0.5px',
          backgroundColor: '#2CB674',
          marginTop: '30px',
        }}
      />
      <SidBarLink text="الصفحة الرئيسية" icon={<AiFillHome />} />
      <SidBarLink text="اللاعبين" icon={<BsPersonFillAdd />} />
      <SidBarLink text="الملاعب" icon={<MdStadium />} />
      <SidBarLink text="اخر اللاعبين" icon={<BsFillFilePersonFill />} />

      <Box
        sx={{
          width: '80%',
          height: '110px',
          backgroundColor: '#D9D9D9',
          borderRadius: '5px',
          mt: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '12px',
            width: '80%',
            textAlign: 'center',
          }}
        >
          يمكنك انشاء مباراة ودعوة اصدقائك للانضمام اليك
        </Typography>
        <Button
          sx={{
            width: '135px',
            height: '35px',
            background: '#2CB674',
            borderRadius: '5px',
            gap: '10px',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#2CB674',
              border: '1px solid #2CB674',
            },
          }}
        >
          انشاء مباراة
        </Button>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
