import { Box, IconButton } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import { IconBackground } from './MatchChat.styled';

const MessageOptionsBox = styled(Box)({
  display: 'none',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '0.3s ease',
});

const MessageOptions: FC<{ id: number }> = ({ id }): ReactElement => {
  return (
    <MessageOptionsBox className="message-options">
      <IconButton
        onClick={() => console.log('object')}
        sx={{
          width: '30px',
          height: '30px',
          '&:hover': { background: '#CCD2E3' },
        }}
      >
        <DeleteIcon
          sx={{ cursor: 'pointer', color: '#818181', fontSize: '20px' }}
        />
      </IconButton>
      <IconButton
        onClick={() => console.log('object')}
        sx={{
          width: '30px',
          height: '30px',
          '&:hover': { background: '#CCD2E3' },
        }}
      >
        <EditIcon
          sx={{ cursor: 'pointer', color: '#818181', fontSize: '20px' }}
        />
      </IconButton>
    </MessageOptionsBox>
  );
};

export default MessageOptions;
