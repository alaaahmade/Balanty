import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import MatchCard from '../components/matchesPage/MatchCard';
import { open } from '../context';

interface Player {
  id: number;
  avatar: string;
  age: number;
  position: string;
  cover: string;
  bio: string;
}

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
  Players: Player[];
}

const MatchesPage = (): React.ReactElement => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string>('');

  const { openPage } = useContext(open);

  const navigate = useNavigate();

  const getMatches = async () => {
    try {
      const response = await axios.get('/api/v1/matches');
      setMatches(response.data.data);
    } catch (err) {
      setError('Error fetching match data');
      navigate('/serverError');
    }
  };

  useEffect(() => {
    getMatches();
  }, [openPage]);

  return (
    <Box
      sx={{
        pt: '10%',
      }}
    >
      {error ? (
        <p>{error}</p>
      ) : (
        matches.map(match => <MatchCard key={match.id} match={match} />)
      )}
    </Box>
  );
};

export default MatchesPage;
