import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { StadiumCard, StadiumPageBox } from '../components';

import { StadiumDataProps } from '../interfaces';

const StadiumsPage = (): ReactElement => {
  const [stadiumData, setStadiumsData] = useState<StadiumDataProps[]>([]);

  const navigate = useNavigate();
  const Stadiums = async () => {
    try {
      const { data } = await axios.get('/api/v1/stadiums/all');
      setStadiumsData(data.data);
    } catch (error) {
      navigate('/serverError');
    }
  };

  useEffect(() => {
    Stadiums();
  }, []);
  return (
    <StadiumPageBox
      sx={{
        mt: '5.5%',
      }}
    >
      {stadiumData &&
        stadiumData.map(stadium => (
          <StadiumCard key={stadium.id} stadiumData={stadium} />
        ))}
    </StadiumPageBox>
  );
};

export default StadiumsPage;
