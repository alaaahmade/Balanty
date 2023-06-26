import { ReactElement, FC } from 'react';
import RootLayout from '../layouts/RootLayout';
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
      <RootLayout />
      <MatchChat />
    </section>
  );
};

export default MatchRoomPage;
