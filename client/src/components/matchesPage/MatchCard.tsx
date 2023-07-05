import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  styled,
  Box,
  InputLabel,
} from '@mui/material';
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
        image: any;
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
}

const CenteredCard = styled(Card)({
  margin: 'auto',
  marginTop: '10%',
  display: 'flex',
  justifyContent: 'center',
  width: '60%',
  padding: '10px 5% 10px 10px',
  border: '1px solid grey',
});

const MatchCardContainer = styled(Box)({
  display: 'flex',
  gap: '80px',
});

const MatchCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <Box>
      <CenteredCard>
        <MatchCardContainer sx={{ paddingLeft: '10px' }}>
          <img
            style={{
              width: '400px',
              height: '400px',
              top: '6px',
              left: '1px',
              borderRadius: '5px',
            }}
            src={match.stadiumMatch.Stadium.stadiumGallery[0].image}
            alt="Cover"
          />
          <MatchCardContent sx={{ width: '350px' }}>
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
                marginBottom: '10%',
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
                marginBottom: '10%',
              }}
            >
              <Typography variant="body1">
                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
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
                  }}
                />

                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                  }}
                >
                  :المسؤول عن اللعبة
                </InputLabel>
              </Typography>
            </Box>
            {match.Players.map(player => (
              <img src={player.cover} alt="Player Cover" key={player.id} />
            ))}
            <StyledButton
              sx={{
                width: '65px',
                height: '30px',
                marginBottom: '10%',
              }}
            >
              زيارة
            </StyledButton>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10%',
              }}
            >
              <StyledButton
                sx={{
                  width: '65px',
                  height: '30px',
                }}
              >
                انضام
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
        </MatchCardContainer>
      </CenteredCard>
    </Box>
  );
};

export default MatchCard;
