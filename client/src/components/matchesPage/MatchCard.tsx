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
import { customPalette } from '../../interfaces';
import { MatchCardProps } from '../../interfaces/matches';

const CenteredCard = styled(Card)({
  margin: 'auto',
  marginBottom: '10px',
  display: 'flex',
  justifyContent: 'center',
  width: 'calc(100% - 560px)',
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
          <Box
            sx={{
              width: '100%',
            }}
          >
            <MatchCardContent
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: theme => theme.palette.primary.contrastText,
                }}
              >
                {match.title}
              </Typography>
              <Box
                sx={{
                  width: '100%',
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
