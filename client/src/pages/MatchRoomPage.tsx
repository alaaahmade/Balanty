import { ReactElement, FC } from 'react';
import MatchChat from '../components/matchChat/MatchChat';

const MatchRoomPage: FC = (): ReactElement => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <MatchChat />
    </section>
  );
};

export default MatchRoomPage;
