import { Box, Rating, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '..';
import {
  ButtonBox,
  CardContainer,
  DetailsBox,
  FlexBox,
  ImageBox,
  StadiumCardBox,
} from './StadiumPage.styled';
import { StadiumDataProps } from '../../interfaces';

const StadiumCard: FC<{ stadiumData: StadiumDataProps }> = ({
  stadiumData,
}) => {
  const [image, setImage] = useState<string>('');

  const { username, Stadium, StadiumsReviews, id } = stadiumData;
  const { description, address, stadiumGallery } = Stadium;

  const navigate = useNavigate();

  const averageRating =
    StadiumsReviews.reduce((sum, review) => sum + review.value, 0) /
    StadiumsReviews.length;

  const handleGoToProfile = () => {
    navigate(`/profile/stadium/${id}`);
  };

  useEffect(() => {
    setImage(stadiumGallery[0]?.image);
  }, []);

  return (
    <StadiumCardBox>
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
                defaultValue={averageRating}
                precision={0.5}
                sx={{
                  direction: 'rtl',
                }}
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
          backgroundImage: `url(${image})`,
        }}
      />
    </StadiumCardBox>
  );
};

export default StadiumCard;
