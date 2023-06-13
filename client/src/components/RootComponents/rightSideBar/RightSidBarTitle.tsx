import { Typography } from '@mui/material';
import { ReactElement } from 'react';

interface RightSidBarTitleProps {
  title: string;
}

const RightSidBarTitle = ({ title }: RightSidBarTitleProps): ReactElement => {
  return (
    <Typography
      sx={{
        fontWeight: 'bold',
        fontSize: '18px',
        mt: '15px',
      }}
    >
      {title}
    </Typography>
  );
};

export default RightSidBarTitle;
