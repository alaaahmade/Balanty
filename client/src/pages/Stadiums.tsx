import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import axios from 'axios';

import {
  Alert,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import { SkeletonLoader, StadiumCard, StadiumPageBox } from '../components';

import { StadiumDataProps } from '../interfaces';

const StadiumsPage = (): ReactElement => {
  const [stadiumData, setStadiumData] = useState<StadiumDataProps[]>([]);
  const [stadiumSearch, setStadiumSearch] = useState<StadiumDataProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [first, setFirst] = useState<boolean>(true);
  const [end, setEnd] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clearIcon, setClearIcon] = useState(false);
  const [value, setValue] = useState<string>('');
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

  const handleChange = async (element: ChangeEvent<HTMLInputElement>) => {
    setValue(element.target.value);
    setClearIcon(true);
    try {
      const { data } = await axios.get(
        `/api/v1/stadiums/search?search=${element.target.value}`,
      );
      setStadiumSearch(data.data);
    } catch (error) {
      navigate('/serverError');
    }
  };

  const handleClear = () => {
    setClearIcon(false);
    setValue('');
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
      <Box
        sx={{
          width: 'calc(100% - 800px)',
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          value={value}
          placeholder="بحث"
          onChange={handleChange}
          sx={{
            width: '100%',
            borderColor: '#2CB674',
            direction: 'right',
            '& input': {
              textAlign: 'right',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: clearIcon && (
              <InputAdornment
                position="end"
                onClick={handleClear}
                style={{ cursor: 'pointer' }}
              >
                <ClearIcon style={{ color: '#999' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {!value ? (
        stadiumData.map(stadium => (
          <StadiumCard key={stadium.id} stadiumData={stadium} />
        ))
      ) : stadiumSearch.length ? (
        stadiumSearch.map(stadium => (
          <StadiumCard key={stadium.id} stadiumData={stadium} />
        ))
      ) : (
        <Alert
          sx={{ marginTop: '30px', backgroundColor: '#2CB674' }}
          severity="info"
        >
          ! لا يوجد ملاعب بهذا الاسم
        </Alert>
      )}
      {first && <SkeletonLoader />}
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
