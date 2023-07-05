import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  };
  ownerUser: {
    username: string;
  };
  Players: [];
}

const MatchesPage = (): React.ReactElement => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/v1/matches');
        console.log(response, 'kjhgfd');

        setMatches(response.data.data);
      } catch (err) {
        setError('Error fetching match data');
        console.log(err);
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
