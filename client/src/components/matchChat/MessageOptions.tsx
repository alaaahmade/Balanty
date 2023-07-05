import { Box, IconButton } from '@mui/material';
import React, { ReactElement, FC, SetStateAction, Dispatch, Key } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import axios from 'axios';

const MessageOptionsBox = styled(Box)({
  display: 'none',
  alignItems: 'center',
  gap: '0',
  transition: '0.3s ease',
});

const MessageOptions: FC<{
  id: Key | null | undefined;
  setIsDeleted: Dispatch<SetStateAction<object>>;
}> = ({ id, setIsDeleted }): ReactElement => {
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

      {/* <IconButton
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
      </IconButton> */}
    </MessageOptionsBox>
  );
};

export default MessageOptions;
