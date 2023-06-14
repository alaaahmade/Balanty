import React, { FC, ReactElement } from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationWrap } from './BestStadiums.styled';

interface Props {
  image: string;
  name: string;
  rate: number;
  address: string;
  description: string;
}

const Stadium: FC<Props> = ({
  image,
  name,
  rate,
  address,
  description,
}): ReactElement => {
  return (
    <Card
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        width: 'unset',
      }}
    >
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent sx={{ pl: '0', pr: '0' }}>
        <div
          style={{
            display: 'flex',
            direction: 'rtl',
            justifyContent: 'space-between',
          }}
        >
          <Typography component="h2" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Rating
            sx={{ direction: 'ltr' }}
            name="read-only"
            value={rate}
            precision={0.5}
            readOnly
          />
        </div>
        <LocationWrap>
          <LocationOnIcon />
          <Typography component="h3" sx={{ fontWeight: 'bold' }}>
            {address}
          </Typography>
        </LocationWrap>
        <Typography
          sx={{ direction: 'rtl' }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Stadium;
