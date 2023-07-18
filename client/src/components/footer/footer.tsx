import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledFooter, StyledLinks, StyledIcons } from './footer.styled';
import { Logo, ScrollLink } from '../header/Header.styled';

const Footer: React.FC = (): ReactElement => {
  return (
    <StyledFooter>
      <Link to="/">
        <Logo
          style={{ marginLeft: '0' }}
          src="https://res.cloudinary.com/df3ydvucj/image/upload/v1689453636/%D8%A8%D9%84%D9%86%D8%AA%D9%8A_1-01_1_qqlmfb.svg"
          alt="logo"
        />
      </Link>
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
          <Link to="/" style={{ color: '#fff' }}>
            <Facebook />
          </Link>
          <Link to="/" style={{ color: '#fff' }}>
            <Twitter />
          </Link>
          <Link to="/" style={{ color: '#fff' }}>
            <LinkedIn />
          </Link>
          <Link to="/" style={{ color: '#fff' }}>
            <Instagram />
          </Link>
        </StyledIcons>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
