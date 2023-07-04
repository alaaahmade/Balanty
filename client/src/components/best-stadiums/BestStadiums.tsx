import React, { FC, ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, StadiumsWrap, Title } from './BestStadiums.styled';
import Stadium from './Stadium';
import { StadiumDataProps } from '../../interfaces';

const BestStadiums: FC = (): ReactElement => {
  const [stadiums, setStadiums] = useState([]);

  const navigate = useNavigate();
  const getBestStadiums = async () => {
    try {
      const { data } = await axios.get('/api/v1/stadiums/best');
      setStadiums(data.data);
    } catch (error) {
      navigate('/serverError');
    }
  };

  useEffect(() => {
    getBestStadiums();
  }, []);
  return (
    <Container>
      <Title>أفضل الملاعب</Title>
      <StadiumsWrap>
        {stadiums.map((stadium: StadiumDataProps) => (
          <Stadium
            image={stadium.Stadium.stadiumGallery[0].image}
            name={stadium.username}
            rate={stadium.StadiumsReviews}
            address={stadium.Stadium.address}
            description={stadium.Stadium.description}
          />
        ))}
      </StadiumsWrap>
    </Container>
  );
};

export default BestStadiums;
