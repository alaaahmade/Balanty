import { StadiumCard, StadiumPageBox } from '../components';

const StadiumsPage = () => {
  return (
    <StadiumPageBox
      sx={{
        mt: '5.5%',
      }}
    >
      <StadiumCard />
      <StadiumCard />
    </StadiumPageBox>
  );
};

export default StadiumsPage;
