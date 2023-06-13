import { Typography } from '@mui/material';
import { ReactElement } from 'react';

interface RightSideBarTitleProps {
  title: string;
}

const RightSideBarTitle = ({ title }: RightSideBarTitleProps): ReactElement => {
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

export default RightSideBarTitle;
