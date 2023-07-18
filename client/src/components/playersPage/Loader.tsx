import { Skeleton } from '@mui/material';
import { DotsLoaderBox } from './PlayerPage.styled';
import { customPalette } from '../../interfaces';

const SkeletonLoader = () => {
  return (
    <DotsLoaderBox>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Skeleton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            sx={{
              bgcolor: theme =>
                (theme.palette as customPalette).customColors.grayColor,
              borderRadius: '5px',
              width: '500px',
              height: '100px',
              marginTop: '22px',
              padding: '0 2rem',
            }}
            variant="rectangular"
          />
        ))}
    </DotsLoaderBox>
  );
};

export default SkeletonLoader;
