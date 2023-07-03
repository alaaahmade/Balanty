import { Skeleton } from '@mui/material';
import { DotsLoaderBox } from './StadiumPage.styled';

const DotsLoader = () => {
  const SkeletonArray = [1, 2, 3];

  return (
    <DotsLoaderBox>
      {SkeletonArray.map(() => (
        <Skeleton
          sx={{ bgcolor: 'grey.350', borderRadius: '5px' }}
          variant="rectangular"
          width="calc(100% - 560px)"
          height={250}
        />
      ))}
    </DotsLoaderBox>
  );
};

export default DotsLoader;
