import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import MessageOptions from './MessageOptions';

interface Props {
  message: string;
  time: string;
  sender: string | number;
  // eslint-disable-next-line react/require-default-props
  senderAvatar: string | null;
  isReceived: boolean;
}

const Message = ({
  message,
  time,
  sender,
  senderAvatar,
  isReceived,
}: Props) => {
  return (
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
        {!isReceived && <MessageOptions id={5} />}
        {/* {senderAvatar && <Avatar src={senderAvatar} />} */}
        <Box
          sx={{
            background: isReceived ? '#F2FCF5' : '#2CB674',
            color: isReceived ? '#000' : '#fff',
            textAlign: isReceived ? 'left' : 'right',
            direction: isReceived ? 'ltr' : 'rtl',
            alignSelf: isReceived ? 'left' : 'right',
            marginBottom: '4px',
            padding: '5px 10px',
            width: 'fit-content',
            maxWidth: '300px',
            wordWrap: 'break-word',
            borderRadius: '20px',
          }}
        >
          {message}
        </Box>
        {isReceived && <MessageOptions id={5} />}
      </Box>
    </section>
  );
};

export default Message;
