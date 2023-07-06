import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import {
  StyledFooter,
  StyledLogo,
  StyledLinks,
  StyledIcons,
} from './footer.styled';
import { ScrollLink } from '../header/Header.styled';

const Footer: React.FC = (): ReactElement => {
  return (
    <StyledFooter
      sx={{
        mt: '30px',
        mb: '-30px',
      }}
    >
      <StyledLogo variant="h6">بلنتي لوغو</StyledLogo>
      <StyledLinks>
        <ScrollLink activeClass="active" smooth spy to="contactUs">
          تواصل معنا
        </ScrollLink>
        <ScrollLink activeClass="active" smooth spy to="servicesLink">
          خدماتنا
        </ScrollLink>
        <ScrollLink activeClass="active" smooth spy to="definitionLink">
          عن موقعنا
        </ScrollLink>
        <ScrollLink activeClass="active" smooth spy to="mainLink">
          الرئيسية
        </ScrollLink>
      </StyledLinks>
      <Typography variant="body2" align="center">
        بلنتي هو موقع حجوزات ملاعب كرة القدم وتشبيك اللاعبين ببعضهم الذي يوفر
        للمستخدمين وسيلة سهلة ومريحة لحجز الملاعب عبر الإنترنت. <br />
        يقدم بلنتي مجموعة متنوعة من الملاعب المتاحة للحجز في مختلف المناطق، مما
        يسمح للمستخدمين بالعثور على الملعب المثالي لاحتياجاتهم.
      </Typography>
      <Box>
        <StyledIcons>
          <Facebook />
          <Twitter />
          <LinkedIn />
          <Instagram />
        </StyledIcons>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
