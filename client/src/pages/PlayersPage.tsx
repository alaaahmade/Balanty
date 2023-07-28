import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import SkeletonLoader from '../components/playersPage/Loader';
import Card from '../components/playersPage/PlayerCard';
import { CardsWrapper } from '../components/playersPage/PlayerPage.styled';
import TypeSearch from '../components/playersPage/InputSearch';
import { errorI, PlayerDataProps } from '../interfaces/PlayerPage';

const PlayersPage = (): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const [playerData, setPlayerData] = useState<PlayerDataProps[]>([]);
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(true);
  const [end, setEnd] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPlayerData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `/api/v1/players/search/${page}?search=${searchValue}`,
      );
      setEnd(response.data.data.length);
      setPlayerData([...response.data.data.items]);
      setFirst(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if ((error as errorI).response?.status === 401) {
        navigate('/pageNotFound');
      } else {
        navigate('/serverError');
      }
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (end) {
      fetchPlayerData();
    }
  }, [page]);

  useEffect(() => {
    fetchPlayerData();
  }, [searchValue]);

  return (
    <Box>
      <TypeSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <CardsWrapper>
        {playerData.length > 0
          ? playerData.map(player => (
              <Card key={player.id} playerData={player} />
            ))
          : !first && (
              <Alert
                sx={{ marginTop: '30px', backgroundColor: '#2CB674' }}
                severity="info"
              >
                ! لا يوجد لاعبين بهذا الاسم
              </Alert>
            )}
      </CardsWrapper>
      {first && <SkeletonLoader />}
      {isLoading && (
        <ThreeDots
          height={80}
          width={80}
          radius={9}
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
            marginBottom: '10px',
          }}
        >
          انتهت محتويات الصفحة
        </Typography>
      )}
    </Box>
  );
};

export default PlayersPage;
