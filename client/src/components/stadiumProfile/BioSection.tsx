import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const BioSection = () => {
  return (
    <Box
      sx={{
        width: '300px',
        mt: '-160px',
        ml: '3%',
        padding: '10px',
        border: '1px solid #ccc',
        backgroundColor: '#F2FCF5',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        borderRadius: '3px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
        <Typography variant="h5">ملعب الاتحاد</Typography>
      </Box>
      <Typography sx={{ p: '10px', textAlign: 'right' }}>
        ملعب الاتحاد هو ملعب كرة قدم مميز يحمل اسم نادي الاتحاد. يتميز ببنيته
        الحديثة والمرافق الرياضية المتطورة. يعتبر محطة هامة للفرق والأندية
        المحلية في تنظيم المباريات والمسابقات الرياضية.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Typography>35 شيكل</Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          : السعر بالساعة
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Typography>عشبية</Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          : الأرضية
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            fontWeight: 'bold',
          }}
        >
          غزة-الرمال-شارع الوحدة
          <PlaceIcon
            sx={{
              color: 'green',
              mb: '15px',
            }}
          />
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              color: 'yellow',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </Box>{' '}
          <Typography
            sx={{
              fontWeight: 'bold',
            }}
          >
            : اضافة تقييم
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BioSection;
