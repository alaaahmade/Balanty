import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface SidBarLinkProps {
  text: string;
  icon: React.ReactNode;
}

const SidBarLink = ({ text, icon }: SidBarLinkProps): ReactElement => {
  return (
    <Box
      sx={{
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '20px',
        mt: '30px',
        fontSize: '25px',
        cursor: 'pointer',
        transition: '0.2s',
        '&:hover': {
          color: '#2CB674',
          outline: '1px solid #2CB674',
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        {/* الصفحة الرئيسية */}
        {text}
      </Typography>
      {icon}
      {/* <AiFillHome
        
      /> */}
    </Box>
  );
};

export default SidBarLink;
