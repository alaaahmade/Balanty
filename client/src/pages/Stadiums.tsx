import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import axios from 'axios';

import { Typography } from '@mui/material';

import { DotsLoader, StadiumCard, StadiumPageBox } from '../components';

import { StadiumDataProps } from '../interfaces';

const StadiumsPage = (): ReactElement => {
  const [stadiumData, setStadiumData] = useState<StadiumDataProps[]>([]);
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(true);
  const [end, setEnd] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchStadiumsData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/v1/stadiums/all/${page}`);
      setEnd(response.data.data.length);
      setStadiumData(prevData => [...prevData, ...response.data.data]);
      setFirst(false);
      setIsLoading(false);
    } catch (error) {
      navigate('/serverError');
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && end) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (end) {
      fetchStadiumsData();
    }
  }, [page]);
  return (
    <StadiumPageBox
      sx={{
        mt: '5.5%',
      }}
    >
      {stadiumData.map(stadium => (
        <StadiumCard key={stadium.id} stadiumData={stadium} />
      ))}
      {first && <DotsLoader />}
      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          visible
          wrapperStyle={{
            marginBottom: '20px',
          }}
        />
      )}
      {!end && (
        <Typography
          sx={{
            color: '#4fa94d',
            fontWeight: 'bold',
            mb: '10px',
          }}
        >
          انتهت محتويات الصفحة
        </Typography>
      )}
    </StadiumPageBox>
  );
};

export default StadiumsPage;
