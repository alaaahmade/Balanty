import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MatchCard from './MatchCard';

interface Match {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  seats: number;
  stadiumMatch: {
    username: string;
    Stadium: {
      stadiumGallery: {
        image: string;
      }[];
    };
  };
  ownerUser: {
    username: string;
  };
  // eslint-disable-next-line no-use-before-define
  Players: Player[];
}

interface Player {
  id: number;
  avatar: string;
  age: number;
  position: string;
  cover: string;
  bio: string;
}

const MatchesPage = (): React.ReactElement => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/v1/matches');
        setMatches(response.data.data);
      } catch (err) {
        setError('Error fetching match data');
        navigate('/serverError');
      }
    })();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        matches.map(match => <MatchCard key={match.id} match={match} />)
      )}
    </div>
  );
};

export default MatchesPage;
