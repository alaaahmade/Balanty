import React, { Key, Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import MessageOptions from './MessageOptions';
import { CustomizeLink, MessageBox } from './MatchChat.styled';

interface Props {
  id: Key | null | undefined;
  message: string;
  senderName: string | number;
  senderAvatar: string | null;
  isReceived: boolean;
  setIsDeleted: Dispatch<SetStateAction<object>>;
  role: string | undefined;
}

const Message = ({
  id,
  message,
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
          <MessageBox
            isReceived
            style={{
              backgroundColor: isReceived ? '#F2FCF5' : '#2CB674',
              color: isReceived ? '#000' : '#fff',
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
