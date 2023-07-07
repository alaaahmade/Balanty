import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import MessageOptions from './MessageOptions';
import { CustomizeLink, MessageBox } from './MatchChat.styled';
import { IMessageProps } from '../../interfaces';

const Message = ({
  socket,
  id,
  senderId,
  message,
  senderAvatar,
  senderName,
  isReceived,
  role,
  matchMessages,
  setMatchMessages,
}: IMessageProps) => {
  return (
    <Box sx={{ mt: senderAvatar && '10px' }}>
      {senderAvatar && (
        <CustomizeLink to={`/profile/${role}/${senderId}`}>
          {senderName}
        </CustomizeLink>
      )}
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isReceived ? 'left' : 'right',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            '&:hover': {
              '.message-options': {
                display: 'flex',
              },
            },
          }}
        >
          {!isReceived && (
            <MessageOptions
              matchMessages={matchMessages}
              setMatchMessages={setMatchMessages}
              socket={socket}
              id={id}
            />
          )}
          {senderAvatar && <Avatar sx={{ mt: '-35px' }} src={senderAvatar} />}
          {!senderAvatar && isReceived && (
            <Box style={{ width: '40px', height: '40px' }} />
          )}
          <MessageBox
            style={{
              backgroundColor: isReceived ? '#F2FCF5' : '#2CB674',
              color: isReceived ? '#000' : '#fff',
              textAlign: isReceived ? 'left' : 'right',
              direction: isReceived ? 'ltr' : 'rtl',
              alignSelf: isReceived ? 'left' : 'right',
            }}
          >
            {message}
          </MessageBox>
        </Box>
      </section>
    </Box>
  );
};

export default Message;
