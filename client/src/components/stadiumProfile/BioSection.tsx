import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { BioBox, FlexBox, LocationTypo } from './styledStadiumProfile';
import EditInput from './EditInput';

const BioSection = () => {
  return (
    <BioBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // ml: '3%',
        mt: '-98px',
      }}
    >
      <FlexBox
        sx={{
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
        <Typography variant="h5" sx={{ ml: '5px' }}>
          ملعب الاتحاد
        </Typography>
      </FlexBox>
      <EditInput
        lastValue="ملعب الاتحاد هو ملعب كرة قدم مميز يحمل اسم نادي الاتحاد. يتميز ببنيته
        الحديثة والمرافق الرياضية المتطورة. يعتبر محطة هامة للفرق والأندية
        المحلية في تنظيم المباريات والمسابقات الرياضية."
        multiline
      />

      <FlexBox
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <EditInput lastValue="35 شيكل" multiline={false} />

        <Typography
          sx={{
            width: '200px',
            fontWeight: 'bold',
          }}
        >
          : السعر الساعة
        </Typography>
      </FlexBox>
      <FlexBox
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <EditInput lastValue="عشبية" multiline={false} />
        <Typography
          sx={{
            fontWeight: 'bold',
            width: '100px',
          }}
        >
          : الأرضية
        </Typography>
      </FlexBox>
      <FlexBox
        sx={{
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <FlexBox
          sx={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <EditInput lastValue="غزة-الرمال-شارع الوحدة" multiline={false} />

          <LocationTypo
            sx={{
              width: '100px',
            }}
          >
            <PlaceIcon
              sx={{
                color: 'green',
                mb: '15px',
              }}
            />
          </LocationTypo>
        </FlexBox>
        <FlexBox>
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
          </Box>
          <Typography
            sx={{
              fontWeight: 'bold',
            }}
          >
            : اضافة تقييم
          </Typography>
        </FlexBox>
      </FlexBox>
    </BioBox>
  );
};

export default BioSection;
