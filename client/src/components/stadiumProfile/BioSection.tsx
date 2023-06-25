import { ReactElement } from 'react';

import { Typography, Box } from '@mui/material';

import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { BioBox, FlexBox, LocationTypo } from './StadiumProfile.styled';

import EditInput from './EditInput';

import { UserData } from '../../interfaces/StadiumProfile';

type Props = {
  userData: UserData;
};
const BioSection = ({ userData }: Props): ReactElement => {
  const { description } = userData.Stadium;
  const { price } = userData.Stadium;
  const { ground } = userData.Stadium;
  const { address } = userData.Stadium;
  const { username } = userData;
  const { phone } = userData;

  return (
    <BioBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
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
          {username}
        </Typography>
      </FlexBox>

      <EditInput lastValue={description} multiline />
      <FlexBox
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <EditInput lastValue={phone} multiline={false} />

        <Typography
          sx={{
            width: '200px',
            fontWeight: 'bold',
          }}
        >
          : رقم الهاتف
        </Typography>
      </FlexBox>
      <FlexBox
        sx={{
          justifyContent: 'flex-end',
        }}
      >
        <EditInput
          lastValue={price ? `شيكل${price}` : 'قم بكتابة السعر'}
          multiline={false}
        />

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
        <EditInput lastValue={ground} multiline={false} />
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
          <EditInput lastValue={address} multiline={false} />

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
