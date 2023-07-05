import React, {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
  useContext,
} from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Typography from '@mui/material/Typography';
import axios, { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {
  AddMessageBar,
  IconBackground,
  MessageInput,
  Wrapper,
} from './MatchChat.styled';
import Message from './Message';
import { CustomErrorResponse, IMatchDataProps } from '../../interfaces';

import ChatImage from '../../assets/chat.svg';
import { AuthContext } from '../../context';
import ErrorAlert from '../ErrorAlert';

const MatchChat = () => {
  const { pathname } = useLocation();
  const matchId = Number(pathname.split('/')[3]);

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
  const [isDeleted, setIsDeleted] = useState<object | null>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const scrollContainerRef = useRef<HTMLDivElement>();

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const matchMessages = matchData?.data?.match?.MatchMessages;

  const handleScrollChat = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  function isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined;
  }

  useEffect(() => {
    handleScrollChat();
    (async () => {
      try {
        const response = await axios.get(`/api/v1/message/match/${matchId}`);
        setMatchData(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError<CustomErrorResponse>;
          if (axiosError.response) {
            const errorResponse = axiosError.response.data.data;
            if (errorResponse?.status === 500) {
              navigate('/servererror');
            }
            setErrorMessage(errorResponse?.message);
          }
        } else {
          setErrorMessage((error as Error).message);
        }
      }
    })();
  }, [newMessage, isDeleted]);

  const addMessage = () => {
    if (messageInput.trim()) {
      (async () => {
        try {
          const response = await axios.post(`/api/v1/message`, {
            senderId: user?.id,
            matchId: matchData?.data?.match?.id,
            message: messageInput.trim(),
          });
          setMessageInput('');
          setNewMessage(response.data);
          setIsIconPickerShown(false);
          handleScrollChat();
        } catch (error) {
          if (isAxiosError(error)) {
            const axiosError = error as AxiosError<CustomErrorResponse>;
            if (axiosError.response) {
              const errorResponse = axiosError.response.data.data;
              if (errorResponse?.status === 500) {
                navigate('/servererror');
              }
              setErrorMessage(errorResponse?.message);
            }
          } else {
            setErrorMessage((error as Error).message);
          }
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
      <Box
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
          zIndex: '1000',
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
      </Box>

      <div style={{ flexGrow: '2', marginTop: '0.5rem' }}>
        {matchMessages?.length > 0 ? (
          matchMessages.map((message, i, arr) => {
            return (
              <Message
                key={message.id}
                id={message.id}
                message={message.message}
                senderAvatar={
                  message.UserId !== user?.id &&
                  message.UserId !== arr[i - 1]?.UserId
                    ? message?.User?.Player?.avatar ||
                      'https://res.cloudinary.com/df3ydvucj/image/upload/v1688546902/user_txwkqq.webp'
                    : null
                }
                senderName={message.User?.username}
                isReceived={message.UserId !== user?.id}
                setIsDeleted={setIsDeleted}
                role={message.User?.role}
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
          value={messageInput}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="اكتب رسالتك"
        />
        <IconBackground
          onClick={() => addMessage()}
          style={{
            width: '43px',
            height: '43px',
            background: '#2CB674',
          }}
        >
          <SendIcon
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
      {errorMessage && (
        <ErrorAlert
          style={{
            width: '80%',
            right: '0.5rem',
            top: '4rem',
          }}
          errorMessage={errorMessage}
        />
      )}
    </Wrapper>
  );
};

export default MatchChat;
