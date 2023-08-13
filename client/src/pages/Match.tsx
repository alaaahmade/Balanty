import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { InputAdornment, TextField, Alert, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import MatchCard from '../components/matchesPage/MatchCard';

import { open } from '../context';

import { Match, customPalette } from '../interfaces';

const MatchesPage = (): React.ReactElement => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string>('');
  const [join, setJoin] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  const getMatches = async () => {
    try {
      const response = await axios.get('/api/v1/matches');
      const playerMatches = response.data.playerMatches.map(
        (match: { matchId: number }) => match.matchId,
      );
      const filteredMatches = response.data.data.filter(
        (math: Match) => !playerMatches.includes(math.id),
      );
      setMatches(filteredMatches);
    } catch (err) {
      setError('Error fetching match data');
      navigate('/serverError');
    }
  };
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.trim()) {
      try {
        const response = await axios.get(
          `/api/v1/matches/search?search=${event.target.value.trim()}`,
        );
        const playerMatches = response.data.playerMatches.map(
          (match: { matchId: number }) => match.matchId,
        );
        const filteredMatches = response.data.data.filter(
          (math: Match) => !playerMatches.includes(math.id),
        );
        setMatches(filteredMatches);
      } catch (err) {
        setError('Error fetching match data');
        navigate('/serverError');
      }
    } else {
      getMatches();
    }
  };

  const { openPage } = useContext(open);

  useEffect(() => {
    getMatches();
  }, [openPage, join]);
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        value={value}
        placeholder="بحث"
        onChange={handleChange}
        sx={{
          width: 'calc(100% - 560px)',
          border: '1px solid ',
          borderColor: theme =>
            (theme.palette as customPalette).customColors.grayColor,
          borderRadius: '4px',
          direction: 'right',
          // m: '6% 0 20px 0',
          position: 'absolute',
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: theme => theme.palette.primary.contrastText,
          backgroundColor: theme =>
            (theme.palette as customPalette).customColors.grayColor,
          '& input': {
            color: theme => theme.palette.primary.contrastText,
            textAlign: 'right',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  color: theme => theme.palette.primary.contrastText,
                }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              // onClick={handleClear}
              style={{ cursor: 'pointer' }}
            >
              <ClearIcon style={{ color: '#999' }} />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          pt: '10.5%',
        }}
      >
        {error ? (
          <p>{error}</p>
        ) : matches.length > 0 ? (
          matches.map(match => (
            <MatchCard
              key={match.id}
              match={match}
              setJoin={setJoin}
              join={join}
            />
          ))
        ) : (
          <Alert
            sx={{
              marginTop: '30px',
              backgroundColor: '#2CB674',
              width: '300px',
              ml: '50%',
              transform: 'translate(-50%)',
            }}
            severity="info"
          >
            ! لا يوجد مباريات في الوقت الحالي
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default MatchesPage;
