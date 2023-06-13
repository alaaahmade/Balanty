import styled from '@emotion/styled';
import { Box } from '@mui/system';

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
});

export const StyledUserCart = styled(Box)({
  width: '190px',
  height: '50px',
  background: '#D9D9D9',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  border: '0.1px solid rgb(133 133 133)',
});

export const StyledImag = styled('img')({
  width: '35px',
  height: '35px',
  cursor: 'pointer',
  borderRadius: '50%',
  outline: '2px solid rgb(133 133 133)',
});

export const StyledSideBarLink = styled(Box)({
  width: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '20px',
  fontSize: '25px',
  cursor: 'pointer',
  transition: '0.2s',
  '&:hover': {
    color: '#2CB674',
    outline: '1px solid #2CB674',
    padding: '5px 10px',
  },
});
