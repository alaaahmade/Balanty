import { Box, IconButton } from '@mui/material';
import React, {
  ReactElement,
  FC,
  SetStateAction,
  Dispatch,
  useState,
} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import axios from 'axios';

const MessageOptionsBox = styled(Box)({
  display: 'none',
  alignItems: 'center',
  gap: '0',
  transition: '0.3s ease',
});

const MessageOptions: FC<{
  id: number;
  updatedMessage: string;
  setUpdatedMessage: Dispatch<SetStateAction<string>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setMessageActionIndex: Dispatch<SetStateAction<number>>;
}> = ({
  id,
  updatedMessage,
  setUpdatedMessage,
  setIsEdit,
  setMessageActionIndex,
}): ReactElement => {
  const handleEditClick = async () => {
    setIsEdit(true);
    setMessageActionIndex(id);
    const editedMessage = await axios.put(`/api/v1/message`, {
      id,
      newMessage: updatedMessage,
    });
  };
  const handleDeleteClick = async () => {
    await axios.delete(`/api/v1/message/${id}`);
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
