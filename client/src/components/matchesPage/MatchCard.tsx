import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  styled,
  Box,
  InputLabel,
} from '@mui/material';

import axios from 'axios';

import { StyledButton } from '../styledRootComponent/SideComponents';

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

interface MatchCardProps {
  match: Match;
  join: boolean;
  setJoin: Dispatch<SetStateAction<boolean>>;
}

const CenteredCard = styled(Card)({
  margin: 'auto',
  marginTop: '2%',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  height: '300px',
  padding: '10px 25px 10px 10px',
  border: '1px solid #eee',
});

const MatchCardContainer = styled(Box)({
  display: 'flex',
  gap: '40px',
});

const MatchCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const MatchCard: React.FC<MatchCardProps> = ({ match, join, setJoin }) => {
  const navigate = useNavigate();

  const handleJoin = async () => {
    try {
      await axios.get(`/api/v1/matches/join/${match.id}`);
      setJoin(!join);
    } catch (error) {
      navigate('/serverError');
    }
  };
  return (
    <Box sx={{ paddingTop: '40px', width: '100%' }}>
      <CenteredCard>
        <MatchCardContainer sx={{ paddingLeft: '10px' }}>
          <MatchCardContent sx={{ width: '300px' }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {match.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <Typography variant="body1">
                {new Date(match.startDate).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                    color: '#000000',
                  }}
                >
                  الوقت
                </InputLabel>
              </Typography>
              <Typography variant="body1">
                {match.seats}
                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                    color: '#000000',
                  }}
                >
                  :عدد المقاعد
                </InputLabel>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <Typography variant="body1">
                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                    color: '#000000',
                  }}
                >
                  الملعب:
                </InputLabel>
                {match.stadiumMatch.username}
              </Typography>
              <Typography variant="body1">
                {match.ownerUser.username}
                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                    color: '#000000',
                  }}
                />

                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                    color: '#000000',
                  }}
                >
                  :المسؤول عن اللعبة
                </InputLabel>
              </Typography>
            </Box>
            {match.Players.map(player => (
              <img src={player.cover} alt="Player Cover" key={player.id} />
            ))}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <StyledButton
                sx={{
                  width: '65px',
                  height: '30px',
                  marginBottom: '10px',
                }}
              >
                زيارة
              </StyledButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              <StyledButton
                sx={{
                  width: '65px',
                  height: '30px',
                  background: '#eee',
                  borderRadius: '5px',
                  gap: '10px',
                  color: '#2CB674',
                  borderColor: '#2CB674',
                }}
                onClick={handleJoin}
              >
                انضم
              </StyledButton>
              <StyledButton
                sx={{
                  width: '100px',
                  height: '30px',
                }}
              >
                معرفة المزيد
              </StyledButton>
            </Box>
          </MatchCardContent>
          <img
            style={{
              width: '350px',
              height: '280px',
              top: '6px',
              left: '1px',
              borderRadius: '5px',
            }}
            src={match.stadiumMatch.Stadium.stadiumGallery[0].image}
            alt="Cover"
          />
        </MatchCardContainer>
      </CenteredCard>
    </Box>
  );
};

export default MatchCard;
