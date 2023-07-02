import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import { StyledButton } from '..';
import {
  CardContainer,
  DetailsBox,
  FlexBox,
  ImageBox,
  StadiumCardBox,
} from './StadiumPage.styled';

const StadiumCard = () => {
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
            ملعب الساحة
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
            ...ملعب الساحة هو ملعب
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
            غزة-السرايا
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
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
          </Box>
          <Typography>: التقييم</Typography>
        </FlexBox>
        <FlexBox
          sx={{
            mt: '15px',
          }}
        >
          <StyledButton>
            <ArrowBackIcon /> معرفة المزيد
          </StyledButton>
        </FlexBox>
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
