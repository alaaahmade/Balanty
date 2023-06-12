import { Box, Typography } from '@mui/material';

interface SidBarLinkProps {
  text: string;
  icon: React.ReactNode;
}

const SidBarLink = ({ text, icon }: SidBarLinkProps) => {
  return (
    <Box
      sx={{
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '20px',
        mt: '20px',
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
          textDecoration: 'underline',
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
