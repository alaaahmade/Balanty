import styled from '@emotion/styled';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Fab } from '@mui/material';

import { Box } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '50%',
  maxWidth: '700px',
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  border: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flexGrow: '2',
  padding: '0 1rem 0',
  margin: '1rem 0',
  height: '60vh',
  maxHeight: '60vh',
  overflow: 'auto !important',

  '&::-webkit-scrollbar-track': {
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    backgroundColor: '#F2FCF5',
  },

  '&::-webkit-scrollbar': {
    width: '10px',
    backgroundColor: '#2CB674',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '999px',
    backgroundColor: '#2CB674',
  },
});

export const AddMessageBar = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  padding: '0.5rem 0',
  borderTop: '1px solid #eee',
  marginTop: '1rem',
});

export const MessageInput = styled(TextareaAutosize)({
  flexGrow: '2',
  direction: 'rtl',
  height: '40px !important',
  maxHeight: '70px',
  overflow: 'auto !important',
  outline: 'none',
  border: 'none',
  padding: '5px 0.5rem !important',
  borderBottom: '1px solid #CCD2E3 !important',
  resize: 'none',

  '&:focus': {
    outline: 'none',
    border: 'none',
  },

  '&::-webkit-scrollbar-track': {
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    backgroundColor: '#F2FCF5',
  },

  '&::-webkit-scrollbar': {
    width: '5px',
    backgroundColor: '#2CB674',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '999px',
    backgroundColor: '#2CB674',
  },
});

export const IconBackground = styled(Fab)({
  ariaLabel: 'add',
  size: 'small',
  width: '35px',
  height: '35px',
  background: '#F2FCF5',
  boxShadow:
    '0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 10px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.1)',
});
