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
    <Box>
      <StyledFooter>
        <StyledLogo>
          <Typography variant="h6">بلنتي لوغو</Typography>
        </StyledLogo>
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
          للمستخدمين وسيلة سهلة ومريحة لحجز الملاعب عبر الإنترنت. يقدم بلنتي
          مجموعة متنوعة من الملاعب المتاحة للحجز في مختلف المناطق، مما يسمح
          للمستخدمين بالعثور على الملعب المثالي لاحتياجاتهم.
        </Typography>
        <StyledIcons>
          <Facebook />
          <Twitter />
          <LinkedIn />
          <Instagram />
        </StyledIcons>
      </StyledFooter>
    </Box>
  );
};

export default Footer;
