import React, { FC, ReactElement } from 'react';
import { Container, StadiumsWrap, Title } from './BestStadiums.styled';
import Stadium from './Stadium';

interface Props {
  image: string;
  name: string;
  rate: number;
  address: string;
  description: string;
}

const STADIUMS: Props[] = [
  {
    image:
      'https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg',
    name: 'ملعب الاتحاد',
    rate: 3.5,
    address: 'غزة - الرمال - شارع الوحدة',
    description: 'ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ',
  },
  {
    image:
      'https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg',
    name: 'ملعب الاتحاد',
    rate: 4,
    address: 'غزة - الرمال - شارع الوحدة',
    description: 'ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ',
  },
  {
    image:
      'https://www.verizon.com/about/sites/default/files/2022-05/stadium-1230x690.jpg',
    name: 'ملعب الاتحاد',
    rate: 4.5,
    address: 'غزة - الرمال - شارع الوحدة',
    description: 'ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ',
  },
];

const BestStadiums: FC = (): ReactElement => {
  return (
    <Container>
      <Title>أفضل الملاعب</Title>
      <StadiumsWrap>
        {STADIUMS.map(stadium => (
          <Stadium
            image={stadium.image}
            name={stadium.name}
            rate={stadium.rate}
            address={stadium.address}
            description={stadium.description}
          />
        ))}
      </StadiumsWrap>
    </Container>
  );
};

export default BestStadiums;
