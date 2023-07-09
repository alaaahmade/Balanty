import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Rating, Theme, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useTheme } from '@emotion/react';
import { StyledButton } from '..';
import {
  ButtonBox,
  CardContainer,
  DetailsBox,
  FlexBox,
  ImageBox,
  StadiumCardBox,
} from './StadiumsPage.styled';

import { StadiumDataProps, customPalette } from '../../interfaces';

const StadiumCard: FC<{ stadiumData: StadiumDataProps }> = ({
  stadiumData,
}): ReactElement => {
  const { username, Stadium, StadiumsReviews, id } = stadiumData;
  const { description, address, stadiumGallery } = Stadium;

  const navigate = useNavigate();

  const currentTheme = useTheme();

  const averageRating =
    StadiumsReviews.reduce((sum, review) => sum + +review.value, 0) /
    StadiumsReviews.length;

  const handleGoToProfile = () => {
    navigate(`/profile/stadium/${id}`);
  };

  return (
    <StadiumCardBox
      sx={{
        boxShadow: `-2px 2px 5px  ${
          ((currentTheme as Theme).palette as customPalette).customColors
            .grayColor
        }, 1px -1px 2px ${
          ((currentTheme as Theme).palette as customPalette).customColors
            .grayColor
        }`,
        backgroundColor: theme =>
          (theme.palette as customPalette).customColors.grayColor,
        color: theme => theme.palette.primary.contrastText,
      }}
    >
      <CardContainer>
        <DetailsBox>
          <Typography
            sx={{
              mb: '15px',
              textAlign: 'right',
            }}
            variant="h6"
          >
            {username}
          </Typography>
        </DetailsBox>
        <FlexBox
          sx={{
            mb: '15px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'right',
              width: '70%',
            }}
          >
            ...{description && (description || '').slice(0, 23)}
          </Typography>
          <Typography>: الوصف</Typography>
        </FlexBox>
        <FlexBox
          sx={{
            mb: '15px',
          }}
        >
          <Typography
            sx={{
              textAlign: 'right',
            }}
          >
            {address}
          </Typography>
          <Typography>: العنوان</Typography>
        </FlexBox>

        <FlexBox>
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <Box
              sx={{
                color: 'yellow',
              }}
            >
              <Rating
                name="half-rating"
                value={averageRating}
                precision={0.5}
                sx={{
                  transform: 'rotateY(180deg)',
                }}
                readOnly
              />
            </Box>
          </Box>
          <Typography>: التقييم</Typography>
        </FlexBox>
        <ButtonBox
          sx={{
            mt: '15px',
          }}
        >
          <StyledButton onClick={handleGoToProfile}>
            <ArrowBackIcon /> معرفة المزيد
          </StyledButton>
        </ButtonBox>
      </CardContainer>

      <ImageBox
        sx={{
          backgroundImage: `url(${stadiumGallery[0]?.image})`,
        }}
      />
    </StadiumCardBox>
  );
};

export default StadiumCard;
