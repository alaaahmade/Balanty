import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  styled,
  Box,
  InputLabel,
} from '@mui/material';
import { textAlign } from '@mui/system';
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
}

const CenteredCard = styled(Card)({
  margin: 'auto',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  height: '300px',
  padding: '10px',
  border: '1px solid ',
});

const MatchCardContainer = styled(Box)({
  display: 'flex',
  gap: '40px',
  alignItems: 'center',
  justifyContent: 'center',
});

const MatchCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <Box sx={{ paddingTop: '5px' }}>
      <CenteredCard
        sx={{
          backgroundColor: theme => theme.palette.primary.grayColor,
          borderColor: theme => theme.palette.primary.grayColor,
        }}
      >
        <MatchCardContainer>
          <MatchCardContent sx={{ width: '50%', textAlign: 'right' }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mr: '-30px',
                color: theme => theme.palette.primary.contrastText,
              }}
            >
              {match.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                m: '10px 20px 10px 0px',
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
                    color: theme => theme.palette.primary.contrastText,
                    ml: '10px',
                  }}
                >
                  : الوقت
                </InputLabel>
              </Typography>
              <Typography variant="body1">
                {match.seats}
                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                    ml: '10px',
                    color: theme => theme.palette.primary.contrastText,
                  }}
                >
                  : المقاعد المتاحة
                </InputLabel>
              </Typography>

              <Typography variant="body1">
                <InputLabel
                  sx={{
                    fontWeight: 'bold',
                    display: 'inline',
                    ml: '10px',
                    color: theme => theme.palette.primary.contrastText,
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
                    ml: '10px',
                    color: theme => theme.palette.primary.contrastText,
                  }}
                >
                  :المسؤول عن اللعبة
                </InputLabel>
              </Typography>
              {match.Players.map(player => (
                <img src={player.cover} alt="Player Cover" key={player.id} />
              ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                width: '100%',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                mb: '10px',
                mr: '-30px',
              }}
            >
              <StyledButton
                sx={{
                  width: '80px',
                  height: '30px',
                  borderRadius: '5px',
                  gap: '10px',
                  borderColor: '#2CB674',
                }}
              >
                انضم
              </StyledButton>
              <StyledButton
                sx={{
                  width: '80px',
                  height: '30px',
                  marginBottom: '10px',
                }}
              >
                زيارة
              </StyledButton>
            </Box>
          </MatchCardContent>
          <img
            style={{
              width: '55%',
              height: '280px',
              borderRadius: '5px',
              // marginRight: '15px',
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
