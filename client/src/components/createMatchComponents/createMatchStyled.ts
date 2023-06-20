import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const StyledTypo = styled(Typography)({
  color: '#2CB674',
  textAlign: 'right',
  p: '3px 30px ',
  fontWeight: 'bold',
  position: 'absolute',
  right: '0',
});

export const StyledFlexBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  textAlign: 'right',

});
