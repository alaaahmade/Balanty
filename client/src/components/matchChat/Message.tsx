import React, { Key, useState, Dispatch, SetStateAction } from 'react';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import MessageOptions from './MessageOptions';

interface Props {
  id: any;
  message: string;
  time: string;
  sender: string | number;
  // eslint-disable-next-line react/require-default-props
  senderAvatar: string | null;
  isReceived: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  // setUpdatedMessage: Dispatch<SetStateAction<string>>;
  setMessageActionIndex: Dispatch<SetStateAction<number>>;
}

const Message = ({
  id,
  message,
  time,
  senderAvatar,
  sender,
  isReceived,
  setIsEdit,
  setMessageActionIndex,
}: Props) => {
  const [updatedMessage, setUpdatedMessage] = useState<string>('');

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
        {!isReceived && (
          <MessageOptions
            updatedMessage={updatedMessage}
            setUpdatedMessage={setUpdatedMessage}
            setIsEdit={setIsEdit}
            setMessageActionIndex={setMessageActionIndex}
            id={id}
          />
        )}
        {isReceived && senderAvatar ? (
          <Avatar src={senderAvatar} />
        ) : (
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
  );
};

export default Message;
