import styled from '@emotion/styled';

export const Container = styled('section')`
  background: #f2fcf5;
  padding: 50px 125px;
`;

export const Title = styled('h1')`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #000000;
  margin-bottom: 4rem;
`;

export const StadiumsWrap = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 7%;
  justify-content: space-between;
`;

export const LocationWrap = styled('div')`
  display: flex;
  direction: rtl;
  gap: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
