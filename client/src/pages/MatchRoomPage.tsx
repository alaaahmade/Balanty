import { ReactElement, FC } from 'react';
import { Socket } from 'socket.io-client';
import MatchChat from '../components/matchChat/MatchChat';

const MatchRoomPage: FC<{ socket: Socket }> = ({ socket }): ReactElement => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <MatchChat socket={socket} />
    </section>
  );
};

export default MatchRoomPage;
