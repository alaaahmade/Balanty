import { Skeleton } from '@mui/material';
import { DotsLoaderBox } from './StadiumsPage.styled';
import { customPalette } from '../../interfaces';

const SkeletonLoader = () => {
  const SkeletonArray = [1, 2, 3];

  return (
    <DotsLoaderBox>
      {SkeletonArray.map(e => (
        <Skeleton
          key={e}
          sx={{
            bgcolor: theme =>
              (theme.palette as customPalette).customColors.grayColor,
            borderRadius: '5px',
          }}
          variant="rectangular"
          width="calc(100% - 560px)"
          height={250}
        />
      ))}
    </DotsLoaderBox>
  );
};

export default SkeletonLoader;
