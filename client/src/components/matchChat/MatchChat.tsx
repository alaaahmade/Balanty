import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { Fab, Typography } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import { AddMessageBar, MessageInput, Wrapper } from './MatchChat.styled';
// import Message from './Message';

const MatchChat = () => {
  return (
    <Wrapper>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 0',
          borderBottom: '1px solid #eee',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h4" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
          Match title
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Fab
            style={{
              width: '35px',
              height: '35px',
              background: '#F2FCF5',
              boxShadow:
                '0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 10px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.1)',
            }}
            aria-label="add"
            size="small"
          >
            <VideocamOutlinedIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </Fab>
          <Fab
            style={{
              width: '35px',
              height: '35px',
              background: '#F2FCF5',
              boxShadow:
                '0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 10px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.1)',
            }}
            aria-label="add"
            size="small"
          >
            <CallOutlinedIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </Fab>
        </div>
      </section>
      <EmojiPicker />
      {/* <Message
        message="Hi G13 aaaaaaaaaaaaaaaa"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived
      />
      <Message
        message="Hi G13 aaaaaaaaaaaaaaaa"
        time={Date.now().toString()}
        sender="ahmed"
        isReceived
      />
      <Message
        message="Hi G13 fffffffffffffffff"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived={false}
      />
      <Message
        message="Hi G13 tttttttttttttt"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived
      />
      <Message
        message="Hi G13 ghhhhhhhhhhhhhhhhhhh"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived={false}
      /> */}
    </Wrapper>
  );
};

export default MatchChat;
