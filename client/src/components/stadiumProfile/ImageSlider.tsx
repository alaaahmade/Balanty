import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import {
  ArrowStyle,
  SliderBox,
  SliderImage,
  ThumbnailBox,
  ThumbnailImage,
} from './styledStadiumProfile';

// This set we will get from backend response
const images = [
  {
    url: 'https://uploads-ssl.webflow.com/624377e20c9e225e2e55e2ed/63da5edbf5049c7b148898d4_soccer-players-action-professional-stadium.jpg',
    id: 0,
  },
  {
    url: 'https://images.livemint.com/img/2022/12/06/1600x900/Stadium_974_1670308763958_1670308770302_1670308770302.jpg',
    id: 1,
  },
  {
    url: 'https://populous.com/wp-content/uploads/2018/01/Populous_Tottenham-Hotspur-Stadium_Credit-Edward-Hill_3-1504x846.jpg',
    id: 2,
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod/images/tottenham-stadium-plans-3-1531502457.jpg?crop=1xw:0.7995594713656388xh;center,top&resize=1200:*',
    id: 3,
  },
];

const ImageSlider = () => {
  const [Active, setActive] = useState(0);

  const handleSlideChange = (currentSlide: number, e: number) => {
    const { id } = images[e];
    setActive(id);
  };

  return (
    <SliderBox
      sx={{
        ml: '3%',
        mt: 'calc(2% + 70px)',
      }}
    >
      <Slide
        prevArrow={
          <ArrowStyle
            onAbort={() => {
              setActive(0);
            }}
            style={{ left: '20px' }}
          >
            <ArrowBackIosIcon />
          </ArrowStyle>
        }
        nextArrow={
          <ArrowStyle style={{ right: '20px' }}>
            <ArrowForwardIosIcon />
          </ArrowStyle>
        }
        onChange={handleSlideChange}
      >
        {images.map(image => {
          return (
            <Box
              key={image.id}
              sx={{
                width: '100%',
                height: '400px',
              }}
            >
              <SliderImage
                sx={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
            </Box>
          );
        })}
      </Slide>
      <ThumbnailBox
        sx={{
          mt: '5px',
        }}
      >
        {images.map(e => (
          <ThumbnailImage
            key={e.id}
            sx={{
              backgroundImage: `url(${e.url})`,
              scale: e.id === Active ? ' 1.2' : '1',
            }}
          />
        ))}
      </ThumbnailBox>
    </SliderBox>
  );
};

export default ImageSlider;
