import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledButton } from '../components';

const StadiumsPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 'calc(100% - 560px)',
          // border: '1px solid ',
          boxShadow: '-2px 2px 5px #ccc, 1px -1px 2px #cccccc4a',
          height: '250px',
          display: 'flex',
          borderRadius: '5px',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#d9d9d938',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '95%',
            direction: 'right',
            padding: '0px 40px 10px 10px',
            textAlign: 'right',
          }}
        >
          <Box
            sx={{
              width: '100%',
              direction: 'right',
              mb: '15px',
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
            }}
          >
            <Typography
              sx={{
                textAlign: 'right',
              }}
              variant="h6"
            >
              ملعب الساحة
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              direction: 'right',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '15px',
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
          </Box>
          <Box
            sx={{
              width: '100%',
              direction: 'right',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '15px',
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
          </Box>

          <Box
            sx={{
              width: '100%',
              direction: 'right',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '15px',
            }}
          >
            <Typography
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
            </Typography>
            <Typography>: التقييم</Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              direction: 'right',
              mt: '15px',
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
            }}
          >
            <StyledButton>
              <ArrowBackIcon /> معرفة المزيد
            </StyledButton>
          </Box>
        </Box>

        <Box
          sx={{
            width: '50%',
            height: '100%',
            borderRadius: '5px',
            backgroundImage:
              'url(https://digitalhub.fifa.com/m/52166e010ebdf873/original/1299995505-jpg.jpg)',
            backgroundSize: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default StadiumsPage;
