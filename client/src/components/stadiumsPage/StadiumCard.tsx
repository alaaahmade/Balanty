import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import { FC, ReactElement, useEffect, useState } from 'react';
import { StyledButton } from '..';
import {
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
  const [stars, setStars] = useState<number>(0);
  const [starsArr, setStarsArr] = useState<ReactElement[]>([]);
  const { username, Stadium, StadiumsReviews } = stadiumData;
  const { description, address } = Stadium;

  const totalReviews = +StadiumsReviews.length;
  const sumOfRatings = +StadiumsReviews.reduce(
    (acc, review) => acc + +review.value,
    0,
  );
  const averageRating = sumOfRatings / totalReviews;

  const getStars = () => {
    for (let i = 0; i <= Math.ceil(stars); i + 1) {
      setStarsArr(prev => [...prev, <StarIcon />]);
    }
  };

  useEffect(() => {
    if (Number.isNaN(averageRating)) {
      setStars(0);
    } else {
      setStars(averageRating);
    }
    getStars();
  }, [stadiumData]);

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
            ...{description && (description || '').slice(0, 30)}
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
              {starsArr}
              {/* <StarIcon /> */}
              {/* <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon /> */}
            </Box>
          </Box>
          <Typography>: التقييم</Typography>
        </FlexBox>
        <FlexBox
          sx={{
            mt: '15px',
          }}
        />
        <StyledButton>
          <ArrowBackIcon /> معرفة المزيد
        </StyledButton>
      </CardContainer>

      <ImageBox
        sx={{
          backgroundImage:
            'url(https://digitalhub.fifa.com/m/52166e010ebdf873/original/1299995505-jpg.jpg)',
        }}
      />
    </StadiumCardBox>
  );
};

export default StadiumCard;
