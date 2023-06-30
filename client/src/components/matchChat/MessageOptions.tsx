import { Box, IconButton } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import axios from 'axios';

const MessageOptionsBox = styled(Box)({
  display: 'none',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '0.3s ease',
});

const MessageOptions: FC<{ id: number }> = ({ id }): ReactElement => {
  const handleEditClick = async () => {
    const editedMessage = await axios.put(
      `http://localhost:8080/api/v1/message/`,
      {
        id,
        updatedMessage: 'fff',
      },
    );
  };
  const handleDeleteClick = async () => {
    await axios.delete(`http://localhost:8080/api/v1/message/2`);
  };

  return (
    <MessageOptionsBox className="message-options">
      <IconButton
        onClick={handleDeleteClick}
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
        onClick={handleEditClick}
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
