import React from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';

interface Props {
  message: string;
  time: string;
  sender: string;
  // eslint-disable-next-line react/require-default-props
  senderAvatar?: string;
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
      {isReceived ? (
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
          }}
        >
          {senderAvatar ? (
            <Avatar src={senderAvatar} />
          ) : (
            <div style={{ width: '40px', height: '40px' }} />
          )}
          <Box
            sx={{
              background: '#F2FCF5',
              textAlign: 'left',
              marginBottom: '4px',
              padding: '5px 10px',
              width: 'fit-content',
              borderRadius: '20px',
            }}
          >
            {message}
          </Box>
        </div>
      ) : (
        <>
          {/* <p>{time}</p> */}
          <Box
            sx={{
              background: '#2CB674',
              color: '#fff',
              borderRadius: '20px',
              textAlign: 'right',
              marginBottom: '4px',
              padding: '5px 10px',
              width: 'fit-content',
              direction: 'rtl',
              alignSelf: 'right',
            }}
          >
            {message}
          </Box>
        </>
      )}
    </section>
  );
};

export default Message;
