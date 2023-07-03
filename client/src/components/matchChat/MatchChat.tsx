import React, {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
} from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Alert } from '@mui/material';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {
  AddMessageBar,
  IconBackground,
  MessageInput,
  Wrapper,
} from './MatchChat.styled';
import Message from './Message';
import { IMatchDataProps } from '../../interfaces';

import ChatImage from '../../assets/chat.svg';

const MatchChat = () => {
  const { pathname } = useLocation();
  const matchId = Number(pathname.split('/')[2]);

  const [matchData, setMatchData] = useState<IMatchDataProps>({
    status: 0,
    data: {
      match: {
        MatchMessages: [],
        createdAt: '',
        description: '',
        endDate: '',
        id: 0,
        ownerId: 0,
        seats: 0,
        stadiumId: 0,
        startDate: '',
        title: '',
        updatedAt: '',
      },
    },
  });

  const [messageInput, setMessageInput] = useState<string>('');
  const [newMessage, setNewMessage] = useState<object | null>(null);
  const [isIconPickerShown, setIsIconPickerShown] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [messageActionIndex, setMessageActionIndex] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement>();

  const fakeLoggedUserId = 2;
  const matchMessages = matchData?.data?.match?.MatchMessages;

  const handleScrollChat = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    handleScrollChat();
    (async () => {
      try {
        const response = await axios.get(`/api/v1/message/match/${matchId}`);
        setMatchData(response.data);
      } catch (error) {
        // eslint-disable-next-line no-alert
        console.log('Error when accessing match', error);
      }
    })();
  }, [newMessage]);

  const addMessage = () => {
    if (messageInput.trim()) {
      (async () => {
        try {
          const response = await axios.post(`/api/v1/message`, {
            senderId: fakeLoggedUserId,
            matchId: matchData?.data?.match?.id,
            message: messageInput.trim(),
          });
          setMessageInput('');
          setNewMessage(response.data);
          setIsIconPickerShown(false);
          handleScrollChat();
        } catch (error) {
          // eslint-disable-next-line no-alert
          console.log('Error when accessing match', error);
        }
      })();
    }
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      addMessage();
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessageInput(prevValue => prevValue + emoji);
  };

  return (
    <Wrapper ref={scrollContainerRef}>
      <section
        style={{
          position: 'sticky',
          top: '0',
          left: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 0',
          background: '#fff',
          borderBottom: '1px solid #eee',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <IconBackground>
            <VideocamOutlinedIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
          <IconBackground>
            <CallOutlinedIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
        </div>
        <Typography variant="h4" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
          {matchData?.data?.match?.title}
        </Typography>
      </section>

      <div style={{ flexGrow: '2', marginTop: '0.5rem' }}>
        {matchMessages?.length > 0 ? (
          matchMessages.map((message, i, arr) => {
            return (
              <Message
                key={message.id}
                id={message.id}
                message={message.message}
                time={message.createdAt}
                senderAvatar={
                  // message.UserId === fakeLoggedUserId &&
                  message.UserId !== arr[i - 1]?.UserId
                    ? 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'
                    : null
                }
                sender={message.UserId}
                isReceived={message.UserId !== fakeLoggedUserId}
                setIsEdit={setIsEdit}
                setMessageActionIndex={setMessageActionIndex}
              />
            );
          })
        ) : (
          <>
            <img
              src={ChatImage}
              alt="Chat"
              style={{
                display: 'block',
                margin: '0 auto',
                width: '220px',
                height: '220px',
              }}
            />
            <Typography
              component="span"
              style={{
                display: 'block',
                textAlign: 'center',
                color: '#2CB674',
                fontWeight: '500',
              }}
            >
              No Message Added yet
            </Typography>
          </>
        )}
      </div>
      {isIconPickerShown && (
        <div
          style={{
            display: 'block',
            position: 'sticky',
            bottom: '4rem',
          }}
        >
          <Picker
            data={data}
            onEmojiSelect={(emoji: { native: string }) =>
              handleEmojiSelect(emoji.native)
            }
          />
        </div>
      )}

      <AddMessageBar>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <IconBackground>
            <AttachFileIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
          <IconBackground
            onClick={() => setIsIconPickerShown(!isIconPickerShown)}
          >
            <InsertEmoticonIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
        </div>
        <MessageInput
          value={
            isEdit ? matchMessages[messageActionIndex].message : messageInput
          }
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="اكتب رسالتك"
        />
        <IconBackground
          style={{
            width: '43px',
            height: '43px',
            background: '#2CB674',
          }}
        >
          <SendIcon
            onClick={() => addMessage()}
            style={{
              fill: '#fff',
              transform: 'rotate(-30deg)',
              transformOrigin: 'center',
              marginTop: '-5px',
              marginRight: '-3px',
            }}
          />
        </IconBackground>
      </AddMessageBar>
    </Wrapper>
  );
};

export default MatchChat;
