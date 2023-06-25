import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { FC, ReactElement } from 'react';
import { BioBox, FlexBox, LocationTypo } from './styledStadiumProfile';
import { UserData } from '../../interfaces/StadiumProfile';

const BioSection: FC<UserData> = ({ userData }): ReactElement => {
  return (
    <BioBox sx={{}}>
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
          {userData?.username}
        </Typography>
      </FlexBox>
      <Typography sx={{ p: '10px', textAlign: 'right' }}>
        ملعب الاتحاد هو ملعب كرة قدم مميز يحمل اسم نادي الاتحاد. يتميز ببنيته
        الحديثة والمرافق الرياضية المتطورة. يعتبر محطة هامة للفرق والأندية
        المحلية في تنظيم المباريات والمسابقات الرياضية.
      </Typography>
      <FlexBox
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <Typography>{userData?.Stadium.price} شيكل</Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          : السعر بالساعة
        </Typography>
      </FlexBox>
      <FlexBox
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <Typography>{userData?.Stadium.ground}</Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          : الأرضية
        </Typography>
      </FlexBox>
      <FlexBox
        sx={{
          flexDirection: 'column',
        }}
      >
        <LocationTypo>
          {userData?.Stadium.address}
          <PlaceIcon
            sx={{
              color: 'green',
              mb: '15px',
            }}
          />
        </LocationTypo>
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
