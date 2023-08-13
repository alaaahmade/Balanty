import { useNavigate } from 'react-router-dom';

import { Typography, Box, InputLabel } from '@mui/material';

import axios from 'axios';

import { useContext } from 'react';
import { StyledButton } from '../styledRootComponent/SideComponents';
import { customPalette } from '../../interfaces';
import { MatchCardProps } from '../../interfaces/matches';
import {
  CenteredCard,
  MatchCardContainer,
  MatchCardContent,
} from './Matche.styled';
import { MatchesContext } from '../../context/MyMatchesContext';

const MatchCard: React.FC<MatchCardProps> = ({
  match,
  join,
  setJoin,
}: MatchCardProps) => {
  const seatsNum = match.seats - match.Players.length;
  const navigate = useNavigate();
  const { getMyMatches } = useContext(MatchesContext);

  const handleJoin = async () => {
    try {
      await axios.get(`/api/v1/matches/join/${match.id}`);
      setJoin(!join);
      getMyMatches();
    } catch (error) {
      navigate('/serverError');
    }
  };

  return (
    <Box sx={{ paddingTop: '5px' }}>
      <CenteredCard
        sx={{
          backgroundColor: theme =>
            (theme.palette as customPalette).customColors.grayColor,
          borderColor: theme =>
            (theme.palette as customPalette).customColors.grayColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MatchCardContainer>
          <Box>
            <MatchCardContent>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: theme => theme.palette.primary.contrastText,
                  mr: '70px',
                }}
              >
                {match.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: '15px',
                  color: theme => theme.palette.primary.contrastText,
                  m: '10px 80px 10px 0px',
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
                  {match.seats}/{seatsNum}
                  <InputLabel
                    sx={{
                      fontWeight: 'bold',
                      display: 'inline',
                      color: theme => theme.palette.primary.contrastText,
                      ml: '5px',
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
                }}
              >
                <StyledButton
                  sx={{
                    borderColor: '#2CB674',
                  }}
                  onClick={handleJoin}
                >
                  انضم
                </StyledButton>
                <StyledButton
                  type="submit"
                  onClick={() => {
                    navigate(`/profile/stadium/${match.stadiumId}`);
                  }}
                >
                  زيارة الملعب
                </StyledButton>
              </Box>
            </MatchCardContent>
          </Box>
        </MatchCardContainer>
        <Box
          sx={{
            width: '55%',
            height: '280px',
            borderRadius: '5px',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${match.stadiumMatch.Stadium.stadiumGallery[0].image})`,
          }}
        />
      </CenteredCard>
    </Box>
  );
};

export default MatchCard;
