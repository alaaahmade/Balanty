import React, { ReactElement } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import {
  StyledFooter,
  StyledLogo,
  StyledLinks,
  StyledIcons,
} from './footer.styled';

const Footer: React.FC = (): ReactElement => {
  return (
    <StyledFooter>
      <StyledLogo variant="h6">بلنتي لوغو</StyledLogo>
      <StyledLinks>
        <Link href="https://example.com/contact" color="inherit">
          تواصل معنا
        </Link>
        <Link href="https://example.com/services" color="inherit">
          خدماتنا
        </Link>
        <Link href="https://example.com/about" color="inherit">
          عن موقعنا
        </Link>
        <Link href="https://example.com/home" color="inherit">
          الرئيسية
        </Link>
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
