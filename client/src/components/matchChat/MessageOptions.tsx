import { Box, IconButton } from '@mui/material';
import React, {
  ReactElement,
  FC,
  SetStateAction,
  Dispatch,
  Key,
  useEffect,
} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import { Socket } from 'socket.io-client';
import { IMatchMessage } from '../../interfaces';

const MessageOptionsBox = styled(Box)({
  display: 'none',
  alignItems: 'center',
  gap: '0',
  transition: '0.3s ease',
});

const MessageOptions: FC<{
  id: Key | null | undefined;
  socket: Socket;
  matchMessages: IMatchMessage[];
  setMatchMessages: Dispatch<SetStateAction<IMatchMessage[]>>;
}> = ({ id, socket, matchMessages, setMatchMessages }): ReactElement => {
  const handleDeleteClick = async () => {
    socket.emit('delete', {
      id,
    });
  };

  useEffect(() => {
    socket.on('messageDeleted', (deletedMessage: IMatchMessage) => {
      const messages = matchMessages.filter(
        (message: IMatchMessage) => message.id !== deletedMessage?.id,
      );
      setMatchMessages(messages);
    });
  }, [socket, matchMessages]);

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
    </MessageOptionsBox>
  );
};

export default MessageOptions;
