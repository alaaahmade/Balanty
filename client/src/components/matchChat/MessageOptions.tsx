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
  index: number;
  updatedMessage: string;
  setUpdatedMessage: Dispatch<SetStateAction<string>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setMessageActionIndex: Dispatch<SetStateAction<number | null>>;
  setIsDeleted: Dispatch<SetStateAction<object>>;
}> = ({
  id,
  index,
  updatedMessage,
  setUpdatedMessage,
  setIsEdit,
  setMessageActionIndex,
  setIsDeleted,
}): ReactElement => {
  const handleEditClick = async () => {
    setIsEdit(true);
    setMessageActionIndex(index);
    const editedMessage = await axios.put(`/api/v1/message`, {
      id,
      newMessage: updatedMessage,
    });
    setUpdatedMessage(editedMessage.data.data.updatedMessage);
  };
  const handleDeleteClick = async () => {
    const deletedMessage = await axios.delete(`/api/v1/message/${id}`);
    setIsDeleted(deletedMessage);
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
