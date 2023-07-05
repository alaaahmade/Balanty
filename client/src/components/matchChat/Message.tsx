import React, { Key, Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import MessageOptions from './MessageOptions';
import { CustomizeLink } from './MatchChat.styled';

interface Props {
  id: Key | null | undefined;
  message: string;
  // time: string;
  senderName: string | number;
  // eslint-disable-next-line react/require-default-props
  senderAvatar?: string | null;
  isReceived: boolean;
  setIsDeleted: Dispatch<SetStateAction<object>>;
  role: string | undefined;
}

const Message = ({
  id,
  message,
  // time,
  senderAvatar,
  senderName,
  isReceived,
  setIsDeleted,
  role,
}: Props) => {
  return (
    <Box sx={{ mt: senderAvatar ? '10px' : 'auto' }}>
      {senderAvatar && (
        <CustomizeLink to={`/profile/${role}/${id}`}>
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
            <MessageOptions setIsDeleted={setIsDeleted} id={id} />
          )}
          {senderAvatar && <Avatar sx={{ mt: '-35px' }} src={senderAvatar} />}
          {!senderAvatar && isReceived && (
            <div style={{ width: '40px', height: '40px' }} />
          )}
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
        </Box>
      </section>
    </Box>
  );
};

export default Message;
