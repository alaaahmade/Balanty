import axios from 'axios';
import { useEffect } from 'react';
import { StadiumCard, StadiumPageBox } from '../components';

const StadiumsPage = () => {
  const Stadiums = async () => {
    const { data } = await axios.get('/api/v1/stadiums/all');
    console.log(data);
  };

  // useEffect(() => {
  //   Stadiums();
  // }, []);
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
