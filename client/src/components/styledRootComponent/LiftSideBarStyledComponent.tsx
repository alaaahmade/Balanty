import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const CreateMatchBox = styled(Box)({
  width: '80%',
  height: '110px',
  backgroundColor: '#D9D9D9',
  borderRadius: '5px',
  mt: '120px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '40px',
});

export const StyledUserCart = styled(Box)({
  width: '100%',
  height: '50px',
  background: '#D9D9D9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '15px',
});

export const StyledImag = styled(Box)({
  width: '37px',
  height: '37px',
  cursor: 'pointer',
  borderRadius: '50%',
  outline: '1px solid rgb(133 133 133)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const SideLink = styled(NavLink)({
  fontSize: '18px',
  padding: '10px 30px 10px 0',
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: '30px',
  gap: '20px',
  cursor: 'pointer',
  transition: '0.2s',
  '&:hover': {
    color: '#2CB674',
    padding: '15px 30px 15px 0',
    backgroundColor: '#D9D9D9',
  },
});
