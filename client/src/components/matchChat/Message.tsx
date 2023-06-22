import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

interface Props {
  message: string;
  time: string;
  sender: string;
  senderAvatar: string;
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
    <section>
      {isReceived ? (
        <div style={{ display: 'flex' }}>
          <Avatar src={senderAvatar} />
          <Box
            sx={{
              background: '#ccc',
              textAlign: 'left',
              marginBottom: '4px',
              padding: '5px 10px',
            }}
          >
            {message}
          </Box>
        </div>
      ) : (
        <Box
          sx={{
            background: 'yellow',
            textAlign: 'right',
            marginBottom: '4px',
            padding: '5px 10px',
          }}
        >
          {message}
        </Box>
      )}
    </section>
  );
};

export default Message;
