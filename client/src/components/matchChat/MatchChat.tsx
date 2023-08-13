import React, {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
  useContext,
  FC,
  ReactElement,
} from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import axios, { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Theme, useTheme } from '@mui/material';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Socket } from 'socket.io-client';
import {
  AddMessageBar,
  IconBackground,
  MatchHeaderSection,
  MessageInput,
  MessagesWrapper,
  Wrapper,
} from './MatchChat.styled';
import Message from './Message';
import {
  CustomErrorResponse,
  IMatchDataProps,
  IMatchMessage,
  customPalette,
} from '../../interfaces';

import ChatImage from '../../assets/chat.svg';
import { AuthContext } from '../../context';
import ErrorAlert from '../ErrorAlert';
import { IMessageData } from '../../interfaces/matchInterface';

const MatchChat: FC<{ socket: Socket }> = ({ socket }): ReactElement => {
  const { pathname } = useLocation();
  const matchId = Number(pathname.split('/')[3]);

  const currentTheme = useTheme();

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

  const [matchMessages, setMatchMessages] = useState<IMatchMessage[]>([]);

  const [messageInput, setMessageInput] = useState<string>('');
  const [isIconPickerShown, setIsIconPickerShown] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const scrollContainerRef = useRef<HTMLDivElement>();

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

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
    socket.on('messageResponse', (newData: IMessageData) => {
      setMatchMessages([
        ...matchMessages,
        newData.data.newMessage,
      ] as IMatchMessage[]);
      handleScrollChat();
    });
  }, [socket, matchMessages]);

  const getMessageRequest = async () => {
    try {
      const response = await axios.get(`/api/v1/message/match/${matchId}`);

      setMatchData(response.data);
      setMatchMessages(response.data?.data?.match?.MatchMessages);
    } catch (error) {
      if ((error as { response: { status: number } }).response.status) {
        navigate('/home');
      }
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
  };

  useEffect(() => {
    handleScrollChat();
    getMessageRequest();
  }, [socket]);

  const addMessage = () => {
    if (messageInput.trim()) {
      (async () => {
        try {
          socket.emit('message', {
            senderId: user?.id,
            matchId: matchData?.data?.match?.id,
            message: messageInput.trim(),
          });

          setMessageInput('');
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
    <Wrapper
      ref={scrollContainerRef}
      sx={{
        backgroundColor: (currentTheme.palette as customPalette).customColors
          .grayColor,
      }}
    >
      <MatchHeaderSection>
        <Typography
          variant="h4"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: (currentTheme.palette as customPalette).primary.contrastText,
          }}
        >
          {matchData?.data?.match?.title}
        </Typography>
      </MatchHeaderSection>

      <MessagesWrapper ref={scrollContainerRef}>
        {matchMessages?.length > 0 ? (
          matchMessages.map((message, i, arr) => {
            return (
              <Message
                socket={socket}
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
                senderId={message.UserId}
                isReceived={message.UserId !== user?.id}
                role={message.User?.role}
                matchMessages={matchMessages}
                setMatchMessages={setMatchMessages}
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
      </MessagesWrapper>
      {isIconPickerShown && (
        <Box
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
        </Box>
      )}

      <AddMessageBar>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
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
        </Box>
        <MessageInput
          value={messageInput}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="اكتب رسالتك"
          style={{
            backgroundColor: (currentTheme.palette as customPalette)
              .customColors.grayColor,
            color: (currentTheme.palette as customPalette).primary.contrastText,
          }}
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
