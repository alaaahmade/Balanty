import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StadiumCard, StadiumPageBox } from '../components';

const StadiumsPage = () => {
  const [stadiumData, setStadiumsData] = useState<[]>([]);

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
        stadiumData.map(stadium => <StadiumCard stadiumData={stadium} />)}
    </StadiumPageBox>
  );
};

export default StadiumsPage;
